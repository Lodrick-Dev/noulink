import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  Check,
  Minus,
  Package,
  ShoppingCart,
  Trash2,
  Truck,
  Store,
  X,
} from "lucide-react";

import COLORS from "../../Styles/Styles";
import { useCart } from "../../Context/CartContext";
import { Dynamic } from "../../Context/ContextDynamique";
import axios from "axios";
import { toast } from "react-toastify";
import { useOrder } from "../../Context/OrderContext";
import { useAccount } from "../../Context/AccountContext";

type OrderItem = {
  restaurantId: string;
  restaurantName: string;
  deliveryAvailable: boolean;
  specialityId: string;
  name: string;
  description?: string;
  image?: string;
  price: number;
  available: boolean;
  quantity: number;
  totalPrice: number;
};

type DeliveryOption = {
  restaurantId: string;
  delivery: boolean;
};

export const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption[]>([]);

  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { token } = Dynamic();
  const { refreshOrders } = useOrder();
  const { account } = useAccount();
  const getCartItems = async () => {
    if (cartItems.length === 0) {
      setOrderItems([]);
      setDeliveryOptions([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}order/cart`,
        withCredentials: true,
        data: {
          items: cartItems,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        const items: OrderItem[] = res.data.items;

        setOrderItems(items);

        const uniqueRestaurants = Array.from(
          new Map(
            items.map((item) => [
              item.restaurantId,
              {
                restaurantId: item.restaurantId,
                delivery: false,
              },
            ]),
          ).values(),
        );

        setDeliveryOptions(uniqueRestaurants);
      } else {
        setError("Impossible de récupérer les articles du panier.");
      }
    } catch (error) {
      console.error(error);

      setError("Une erreur est survenue lors du chargement du panier.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getCartItems();
    }
  }, [cartItems, token]);

  const handleRemoveItem = (specialityId: string, restaurantId: string) => {
    removeFromCart(specialityId, restaurantId);
  };

  const restaurants = useMemo(() => {
    const grouped = new Map<
      string,
      {
        restaurantId: string;
        restaurantName: string;
        deliveryAvailable: boolean;
        items: OrderItem[];
      }
    >();

    orderItems.forEach((item) => {
      const existing = grouped.get(item.restaurantId);

      if (existing) {
        existing.items.push(item);
      } else {
        grouped.set(item.restaurantId, {
          restaurantId: item.restaurantId,
          restaurantName: item.restaurantName,
          deliveryAvailable: item.deliveryAvailable,
          items: [item],
        });
      }
    });

    return Array.from(grouped.values());
  }, [orderItems]);

  /**
   * Total général de la commande.
   */
  const total = useMemo(() => {
    return orderItems.reduce((total, item) => total + item.totalPrice, 0);
  }, [orderItems]);

  /**
   * Modifier le choix de livraison d'un restaurant.
   */
  const handleDeliveryChange = (restaurantId: string, delivery: boolean) => {
    setDeliveryOptions((prev) =>
      prev.map((option) =>
        option.restaurantId === restaurantId
          ? {
              ...option,
              delivery,
            }
          : option,
      ),
    );
  };

  const hasValidDeliveryOptions = () => {
    return restaurants.every((restaurant) => {
      const option = deliveryOptions.find(
        (item) => item.restaurantId === restaurant.restaurantId,
      );

      return option !== undefined;
    });
  };

  const handleSendOrder = async () => {
    if (cartItems.length === 0) {
      return;
    }

    if (
      !account?.pseudo?.trim() ||
      !account?.ville?.trim() ||
      !account?.road?.trim() ||
      !account?.contact?.trim()
    ) {
      setError(
        "Veuillez compléter votre pseudo, votre ville, votre adresse et votre numéro de contact avant de passer commande.",
      );

      toast.warning(
        "Veuillez compléter vos informations personnelles avant de passer commande.",
      );

      return;
    }

    if (!hasValidDeliveryOptions()) {
      setError("Veuillez choisir un mode de réception pour chaque restaurant.");

      return;
    }

    try {
      setSending(true);
      setError(null);

      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}order/create`,
        withCredentials: true,
        data: {
          items: cartItems,
          deliveryOptions,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        toast.success("Votre commande a été envoyée avec succès !");

        clearCart();
        setOrderItems([]);
        setDeliveryOptions([]);
        await refreshOrders();
      } else {
        setError("Impossible d'envoyer la commande.");
      }
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Une erreur est survenue lors de l'envoi de la commande.",
        );
      } else {
        setError("Une erreur est survenue lors de l'envoi de la commande.");
      }
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <StyledCart>
        <Loading>Chargement de votre panier...</Loading>
      </StyledCart>
    );
  }

  if (cartItems.length === 0 || orderItems.length === 0) {
    return (
      <StyledCart>
        <EmptyCart>
          <ShoppingCart size={50} />

          <h1>Votre panier est vide</h1>

          <p>Vous n'avez aucune spécialité dans votre panier.</p>
        </EmptyCart>
      </StyledCart>
    );
  }

  return (
    <StyledCart>
      <Header>
        <Title>Mon panier</Title>

        <Subtitle>
          Vérifiez vos spécialités et choisissez votre mode de réception avant
          d'envoyer votre commande.
        </Subtitle>
      </Header>

      {error && (
        <ErrorMessage>
          <X size={20} />
          {error}
        </ErrorMessage>
      )}

      <OrderContent>
        <ProductsContainer>
          {restaurants.map((restaurant) => {
            const selectedOption = deliveryOptions.find(
              (option) => option.restaurantId === restaurant.restaurantId,
            );

            return (
              <RestaurantCard key={restaurant.restaurantId}>
                <RestaurantHeader>
                  <RestaurantName>{restaurant.restaurantName}</RestaurantName>
                </RestaurantHeader>

                <RestaurantProducts>
                  {restaurant.items.map((item) => (
                    <ProductCard
                      key={`${item.restaurantId}-${item.specialityId}`}
                    >
                      <ProductContent>
                        <ProductImageContainer>
                          {item.image ? (
                            <ProductImage src={item.image} alt={item.name} />
                          ) : (
                            <ImagePlaceholder>
                              <Package size={35} />
                            </ImagePlaceholder>
                          )}
                        </ProductImageContainer>

                        <ProductInformation>
                          <ProductName>{item.name}</ProductName>

                          {item.description && (
                            <ProductDescription>
                              {item.description}
                            </ProductDescription>
                          )}

                          <ProductPrice>
                            {item.price.toLocaleString("fr-FR", {
                              style: "currency",
                              currency: "EUR",
                            })}
                          </ProductPrice>

                          {!item.available && (
                            <Unavailable>
                              <X size={15} />
                              Cette spécialité n'est plus disponible
                            </Unavailable>
                          )}
                        </ProductInformation>

                        <ProductActions>
                          <Quantity>Quantité : {item.quantity}</Quantity>

                          <RemoveButton
                            type="button"
                            onClick={() =>
                              handleRemoveItem(
                                item.specialityId,
                                item.restaurantId,
                              )
                            }
                          >
                            <Minus size={17} />
                            Retirer
                          </RemoveButton>

                          <ProductTotal>
                            {item.totalPrice.toLocaleString("fr-FR", {
                              style: "currency",
                              currency: "EUR",
                            })}
                          </ProductTotal>
                        </ProductActions>
                      </ProductContent>
                    </ProductCard>
                  ))}
                </RestaurantProducts>

                <DeliverySection>
                  <DeliveryTitle>
                    <Truck size={20} />
                    Mode de réception
                  </DeliveryTitle>

                  {restaurant.deliveryAvailable ? (
                    <>
                      <DeliveryDescription>
                        Ce restaurant propose la livraison. Choisissez comment
                        vous souhaitez récupérer votre commande.
                      </DeliveryDescription>

                      <DeliveryChoices>
                        <DeliveryChoice>
                          <input
                            type="radio"
                            name={`delivery-${restaurant.restaurantId}`}
                            checked={selectedOption?.delivery === true}
                            onChange={() =>
                              handleDeliveryChange(
                                restaurant.restaurantId,
                                true,
                              )
                            }
                          />

                          <Truck size={20} />

                          <div>
                            <strong>Livraison</strong>
                            <span>
                              Le restaurant vous livre votre commande.
                            </span>
                            <span>
                              Adresse : {account?.road}, {account?.ville}
                            </span>
                          </div>
                        </DeliveryChoice>

                        <DeliveryChoice>
                          <input
                            type="radio"
                            name={`delivery-${restaurant.restaurantId}`}
                            checked={selectedOption?.delivery === false}
                            onChange={() =>
                              handleDeliveryChange(
                                restaurant.restaurantId,
                                false,
                              )
                            }
                          />

                          <Store size={20} />

                          <div>
                            <strong>Retrait sur place</strong>
                            <span>
                              Vous récupérez votre commande directement au
                              restaurant.
                            </span>
                          </div>
                        </DeliveryChoice>
                      </DeliveryChoices>
                    </>
                  ) : (
                    <UnavailableDelivery>
                      <Store size={20} />

                      <div>
                        <strong>Retrait sur place uniquement</strong>

                        <span>
                          Ce restaurant ne propose pas de service de livraison.
                        </span>
                      </div>
                    </UnavailableDelivery>
                  )}
                </DeliverySection>
              </RestaurantCard>
            );
          })}
        </ProductsContainer>

        <Summary>
          <SummaryTitle>Résumé de la commande</SummaryTitle>

          <SummaryRow>
            <span>Produits</span>

            <span>
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </SummaryRow>

          <SummaryRow>
            <span>Nombre de restaurants</span>

            <span>{restaurants.length}</span>
          </SummaryRow>

          <Separator />

          <TotalRow>
            <span>Total</span>

            <strong>
              {total.toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR",
              })}
            </strong>
          </TotalRow>

          <ClearButton type="button" onClick={clearCart}>
            <Trash2 size={18} />
            Vider le panier
          </ClearButton>

          <SendButton
            type="button"
            onClick={handleSendOrder}
            disabled={sending}
          >
            <Check size={19} />

            {sending ? "Envoi en cours..." : "Envoyer la commande"}
          </SendButton>
        </Summary>
      </OrderContent>
    </StyledCart>
  );
};

const StyledCart = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
  padding-bottom: 40px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  color: ${COLORS.green};
  font-size: 2em;
  text-align: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  margin: 0;
  color: ${COLORS.TexteSecondaire};
  text-align: center;
  line-height: 1.5;
`;

const OrderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  align-items: start;
  gap: 30px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RestaurantCard = styled.article`
  overflow: hidden;
  background: ${COLORS.Carte};
  border: 1px solid ${COLORS.Bordure};
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(31, 64, 104, 0.08);
`;

const RestaurantHeader = styled.div`
  padding: 14px 20px;
  background: ${COLORS.main};
`;

const RestaurantName = styled.h2`
  margin: 0;
  color: ${COLORS.white};
  font-size: 1.1em;
`;

const RestaurantProducts = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductCard = styled.div`
  border-bottom: 1px solid ${COLORS.Bordure};

  &:last-child {
    border-bottom: none;
  }
`;

const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr auto;
  gap: 20px;
  padding: 20px;

  @media screen and (max-width: 650px) {
    grid-template-columns: 100px 1fr;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const ProductImageContainer = styled.div`
  width: 130px;
  height: 130px;
  overflow: hidden;
  border-radius: 10px;
  background: ${COLORS.Fond};

  @media screen and (max-width: 650px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    height: 200px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${COLORS.TexteSecondaire};
`;

const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProductName = styled.h3`
  margin: 0;
  color: ${COLORS.Texte};
  font-size: 1.1em;
`;

const ProductDescription = styled.p`
  margin: 0;
  color: ${COLORS.TexteSecondaire};
  font-size: 0.9em;
  line-height: 1.4;
`;

const ProductPrice = styled.span`
  color: ${COLORS.green};
  font-weight: 700;
`;

const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;

  @media screen and (max-width: 650px) {
    grid-column: 1 / -1;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Quantity = styled.span`
  color: ${COLORS.TexteSecondaire};
  font-size: 0.9em;
`;

const ProductTotal = styled.strong`
  color: ${COLORS.Texte};
  font-size: 1.1em;
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  color: ${COLORS.white};
  background: ${COLORS.Inactif};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const DeliverySection = styled.div`
  padding: 20px;
  border-top: 1px solid ${COLORS.Bordure};
  background: ${COLORS.Fond};
`;

const DeliveryTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 8px;
  color: ${COLORS.Texte};
  font-size: 1em;
`;

const DeliveryDescription = styled.p`
  margin: 0 0 15px;
  color: ${COLORS.TexteSecondaire};
  font-size: 0.9em;
  line-height: 1.4;
`;

const DeliveryChoices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DeliveryChoice = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border: 1px solid ${COLORS.Bordure};
  border-radius: 10px;
  background: ${COLORS.Carte};
  cursor: pointer;

  input {
    margin-top: 4px;
    cursor: pointer;
  }

  svg {
    flex-shrink: 0;
    color: ${COLORS.green};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  strong {
    color: ${COLORS.Texte};
  }

  span {
    color: ${COLORS.TexteSecondaire};
    font-size: 0.85em;
    line-height: 1.4;
  }
`;

const UnavailableDelivery = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 10px;
  background: ${COLORS.Carte};

  svg {
    flex-shrink: 0;
    color: ${COLORS.TexteSecondaire};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  strong {
    color: ${COLORS.Texte};
  }

  span {
    color: ${COLORS.TexteSecondaire};
    font-size: 0.85em;
  }
`;

const Summary = styled.aside`
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  background: ${COLORS.Carte};
  border: 1px solid ${COLORS.Bordure};
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(31, 64, 104, 0.08);

  @media screen and (max-width: 900px) {
    position: static;
  }
`;

const SummaryTitle = styled.h2`
  margin: 0 0 10px;
  color: ${COLORS.Texte};
  font-size: 1.3em;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.TexteSecondaire};
`;

const Separator = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${COLORS.Bordure};
`;

const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.Texte};
  font-size: 1.2em;

  strong {
    color: ${COLORS.green};
  }
`;

const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px;
  border: 1px solid ${COLORS.Inactif};
  border-radius: 10px;
  color: ${COLORS.Inactif};
  background: transparent;
  cursor: pointer;

  &:hover {
    color: ${COLORS.white};
    background: ${COLORS.Inactif};
  }
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  color: ${COLORS.black};
  background: ${COLORS.yellow};
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  color: ${COLORS.TexteSecondaire};
  text-align: center;

  h1 {
    margin: 20px 0 8px;
    color: ${COLORS.Texte};
  }

  p {
    margin: 0;
  }
`;

const Loading = styled.div`
  padding: 80px 20px;
  color: ${COLORS.TexteSecondaire};
  text-align: center;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  padding: 12px 15px;
  border-radius: 10px;
  color: ${COLORS.white};
  background: ${COLORS.Inactif};
  text-align: center;
`;

const Unavailable = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${COLORS.Inactif};
  font-size: 0.85em;
`;
