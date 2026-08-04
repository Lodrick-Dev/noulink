import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import {
  ShoppingBag,
  LogOut,
  PackageCheck,
  Truck,
  XCircle,
} from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dynamic } from "../../Context/ContextDynamique";
import { LoadingHorizontal } from "../Loading/LoadingHorizontal";
import { useAccount } from "../../Context/AccountContext";
import { FormInfoCustomer } from "../GestionCustomer/FormInfoCustomer";
import { useOrder } from "../../Context/OrderContext";

export const DashboardCustomer = () => {
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  const { signOut, token } = Dynamic();
  const { account } = useAccount();

  const { orders, loadingOrders } = useOrder();

  const deleteAccount = async () => {
    if (window.confirm("Supprimer votre compte ? ")) {
      setLoading(true);

      try {
        const res = await axios({
          method: "delete",
          url: `${import.meta.env.VITE_APP_API}customer/delete/${account._id}`,
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data?.success) {
          toast.warning(res.data.message);

          await signOut();

          nav("/auth");
        }
      } catch (error) {
        console.log(error);

        toast.error("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    }
  };

  const logoutUser = async () => {
    await signOut();
    nav("/auth");
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "waiting":
        return "En attente";

      case "preparing":
        return "En préparation";

      case "ready":
        return "Prête";

      case "delivered":
        return "Livrée";

      case "refused":
        return "Refusée";

      case "cancelled":
        return "Annulée";

      default:
        return "Statut inconnu";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "waiting":
        return <PackageCheck size={20} />;

      case "preparing":
        return <PackageCheck size={20} />;

      case "ready":
        return <PackageCheck size={20} />;

      case "delivered":
        return <Truck size={20} />;

      case "refused":
      case "cancelled":
        return <XCircle size={20} />;

      default:
        return <PackageCheck size={20} />;
    }
  };

  if (loadingOrders) {
    return (
      <StyledDashboardCustomer>
        <LoadingContainer>
          <LoadingHorizontal />
        </LoadingContainer>
      </StyledDashboardCustomer>
    );
  }

  return (
    <StyledDashboardCustomer>
      <Header>
        <div>
          <h1>Bonjour 👋</h1>

          <p>Bienvenue sur votre espace client.</p>

          <p className="dev">⚠️ En cours de développement ⚠️</p>

          <LogOut className="i" onClick={logoutUser} />
        </div>

        <div className="btns">
          {loading ? (
            <LoadingHorizontal />
          ) : (
            <DeleteAccountButton onClick={deleteAccount}>
              Supprimer mon compte
            </DeleteAccountButton>
          )}
        </div>
      </Header>

      {account && <CustomerEmail>{account.email}</CustomerEmail>}

      <Content>
        <div className="left">
          <FormInfoCustomer />
        </div>
        <Right>
          <Card>
            <Title>
              <ShoppingBag size={20} />
              Commandes
            </Title>

            {orders.length === 0 ? (
              <Empty>Aucune commande pour le moment.</Empty>
            ) : (
              <OrdersList>
                {orders.map((order) => (
                  <OrderCard key={order._id}>
                    <OrderHeader>
                      <OrderInfo>
                        <OrderNumber>
                          Commande #{order._id.slice(-6).toUpperCase()}
                        </OrderNumber>

                        <OrderDate>
                          {order.createdAt
                            ? new Date(order.createdAt).toLocaleDateString(
                                "fr-FR",
                                {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                },
                              )
                            : ""}
                        </OrderDate>
                      </OrderInfo>

                      <StatusBadge $status={order.status}>
                        {getStatusIcon(order.status)}

                        <span>{getStatusLabel(order.status)}</span>
                      </StatusBadge>
                    </OrderHeader>

                    <OrderBody>
                      <RestaurantInfo>
                        <strong>Restaurant</strong>

                        <span>{order.restaurantName}</span>
                      </RestaurantInfo>

                      <DeliveryInfo>
                        {order.delivery ? (
                          <>
                            <Truck size={18} />

                            <span>Livraison</span>
                          </>
                        ) : (
                          <>
                            <PackageCheck size={18} />

                            <span>À récupérer sur place</span>
                          </>
                        )}
                      </DeliveryInfo>

                      <OrderItems>
                        {order.items.map((item) => (
                          <OrderItem key={item.id}>
                            <div>
                              <strong>{item.name}</strong>

                              <span>Quantité : {item.quantity}</span>
                            </div>

                            <strong>
                              {item.totalPrice.toLocaleString("fr-FR", {
                                style: "currency",
                                currency: "EUR",
                              })}
                            </strong>
                          </OrderItem>
                        ))}
                      </OrderItems>

                      <OrderFooter>
                        <span>Total</span>

                        <strong>
                          {order.total.toLocaleString("fr-FR", {
                            style: "currency",
                            currency: "EUR",
                          })}
                        </strong>
                      </OrderFooter>
                    </OrderBody>
                  </OrderCard>
                ))}
              </OrdersList>
            )}
          </Card>
        </Right>
      </Content>
    </StyledDashboardCustomer>
  );
};

const StyledDashboardCustomer = styled.section`
  width: 90%;
  max-width: 1400px;
  margin: 30px auto;
  padding-bottom: 50px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  .i {
    cursor: pointer;
  }

  .dev {
    color: ${COLORS.Inactif};
    font-weight: 600;
  }

  .btns {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CustomerEmail = styled.span`
  display: block;
  margin-bottom: 25px;
  color: ${COLORS.TexteSecondaire};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  .left {
    width: 30%;
  }

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    .left {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  height: 140vh;
  overflow-y: scroll;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const Card = styled.div`
  padding: 25px;

  background: ${COLORS.Carte};
  border: 1px solid ${COLORS.Bordure};
  border-radius: 15px;

  box-shadow: 0 4px 12px rgba(31, 64, 104, 0.08);
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0 0 25px;

  color: ${COLORS.Texte};
`;

const Empty = styled.div`
  padding: 50px 20px;

  color: ${COLORS.TexteSecondaire};

  text-align: center;
`;

const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const OrderCard = styled.article`
  overflow: hidden;

  background: ${COLORS.Fond};

  border: 1px solid ${COLORS.Bordure};
  border-radius: 15px;
`;

const OrderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 18px 20px;

  background: ${COLORS.Carte};

  border-bottom: 1px solid ${COLORS.Bordure};

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const OrderNumber = styled.strong`
  color: ${COLORS.Texte};
`;

const OrderDate = styled.span`
  color: ${COLORS.TexteSecondaire};
  font-size: 0.85em;
`;

const StatusBadge = styled.div<{ $status: string }>`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 15px;

  border-radius: 10px;

  font-weight: 700;

  color: ${({ $status }) =>
    $status === "refused" || $status === "cancelled"
      ? COLORS.white
      : COLORS.black};

  background: ${({ $status }) =>
    $status === "waiting"
      ? COLORS.yellow
      : $status === "preparing"
        ? COLORS.second
        : $status === "ready"
          ? COLORS.green
          : $status === "delivered"
            ? COLORS.green
            : COLORS.Inactif};
`;

const OrderBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  padding: 20px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: ${COLORS.TexteSecondaire};

  strong {
    color: ${COLORS.Texte};
  }
`;

const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${COLORS.TexteSecondaire};

  font-size: 0.9em;
`;

const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-top: 15px;

  border-top: 1px solid ${COLORS.Bordure};
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  strong {
    color: ${COLORS.Texte};
  }

  span {
    color: ${COLORS.TexteSecondaire};
    font-size: 0.85em;
  }
`;

const OrderFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 15px;

  border-top: 1px solid ${COLORS.Bordure};

  color: ${COLORS.Texte};

  strong {
    color: ${COLORS.green};
    font-size: 1.2em;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 300px;
`;

const DeleteAccountButton = styled.button`
  padding: 10px 15px;

  border: none;
  border-radius: 8px;

  color: ${COLORS.white};
  background: ${COLORS.Inactif};

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
