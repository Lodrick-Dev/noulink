import styled from "styled-components";
import { Check, Image as ImageIcon, ShoppingCart, X } from "lucide-react";

import COLORS from "../../Styles/Styles";
import type { TypeSpecialities } from "./ListesHome";
import { SpecialityCartButton } from "./SpecialityCartButton";

type SpecialityListProps = {
  specialities: TypeSpecialities[];
  onAddToCart: (speciality: TypeSpecialities) => void;
  onRemoveFromCart: (specialityId: string) => void;
  cartItems?: {
    specialityId: string;
    quantity: number;
  }[];
  onLogin: () => void;
};

export const SpecialityList = ({
  specialities,
  onAddToCart,
  onRemoveFromCart,
  cartItems = [],
  onLogin,
}: SpecialityListProps) => {
  const getQuantity = (specialityId: string) => {
    return (
      cartItems.find((item) => item.specialityId === specialityId)?.quantity ||
      0
    );
  };

  if (specialities.length === 0) {
    return (
      <StyledSpecialityList>
        <EmptyState>
          <ShoppingCart size={40} />

          <h2>Aucune spécialité disponible</h2>

          <p>Ce restaurant n'a pas encore ajouté de spécialités.</p>
        </EmptyState>
      </StyledSpecialityList>
    );
  }

  return (
    <StyledSpecialityList>
      <Header>
        <Title>Nos spécialités</Title>

        <Subtitle>
          Découvrez les spécialités proposées par ce restaurant.
        </Subtitle>
      </Header>

      <SpecialitiesGrid>
        {specialities.map((speciality) => {
          const quantity = getQuantity(speciality.id);

          return (
            <SpecialityCard
              key={speciality.id}
              $available={speciality.available}
            >
              <ImageContainer>
                {speciality.image ? (
                  <SpecialityImage
                    src={speciality.image}
                    alt={speciality.name}
                  />
                ) : (
                  <ImagePlaceholder>
                    <ImageIcon size={42} />
                    <span>Aucune image</span>
                  </ImagePlaceholder>
                )}

                <Status $available={speciality.available}>
                  {speciality.available ? (
                    <>
                      <Check size={14} />
                      Disponible
                    </>
                  ) : (
                    <>
                      <X size={14} />
                      Indisponible
                    </>
                  )}
                </Status>
              </ImageContainer>

              <CardContent>
                <CardHeader>
                  <SpecialityName>{speciality.name}</SpecialityName>

                  <Price>
                    {speciality.price.toLocaleString("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </Price>
                </CardHeader>

                <Description>
                  {speciality.description || "Aucune description"}
                </Description>

                <SpecialityCartButton
                  speciality={speciality}
                  quantity={quantity}
                  onAddToCart={onAddToCart}
                  onRemoveFromCart={onRemoveFromCart}
                  onLogin={onLogin}
                />
              </CardContent>
            </SpecialityCard>
          );
        })}
      </SpecialitiesGrid>
    </StyledSpecialityList>
  );
};

const StyledSpecialityList = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
`;
const Header = styled.div`
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
  margin: 0;
  color: ${COLORS.TexteSecondaire};
  font-size: 1em;
  text-align: center;
`;
const SpecialitiesGrid = styled.div`
  display: flex;
  background: grey;
  min-width: 400px;
  overflow-x: scroll;

  @media screen and (max-width: 450px) {
  }
`;

/* ==========================================
   Card
========================================== */

const SpecialityCard = styled.article<{
  $available: boolean;
}>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 50%;
  background: ${COLORS.Carte};
  border: 1px solid ${COLORS.Bordure};
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(31, 64, 104, 0.08);
  margin: 15px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  opacity: ${({ $available }) => ($available ? 1 : 0.75)};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(31, 64, 104, 0.12);
  }
`;

/* ==========================================
   Image
========================================== */

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  background: ${COLORS.Fond};
  overflow: hidden;
`;

const SpecialityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImagePlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  color: ${COLORS.TexteSecondaire};

  span {
    font-size: 0.9em;
  }
`;

/* ==========================================
   Status
========================================== */

const Status = styled.div<{
  $available: boolean;
}>`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  align-items: center;
  gap: 5px;

  padding: 6px 10px;
  border-radius: 20px;

  color: ${COLORS.white};
  background: ${({ $available }) =>
    $available ? COLORS.Actif : COLORS.Inactif};

  font-size: 0.8em;
  font-weight: 600;
`;

/* ==========================================
   Content
========================================== */

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 10px;
`;

const SpecialityName = styled.h2`
  margin: 0;
  color: ${COLORS.Texte};
  font-size: 1.2em;
  font-weight: 700;
`;

const Price = styled.span`
  flex-shrink: 0;
  color: ${COLORS.green};
  font-size: 1.1em;
  font-weight: 700;
`;

const Description = styled.p`
  flex: 1;
  margin: 0 0 20px;
  color: ${COLORS.TexteSecondaire};
  font-size: 0.95em;
  line-height: 1.5;
`;

/* ==========================================
   Buttons
========================================== */

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  padding: 11px 15px;

  border: none;
  border-radius: 10px;

  color: ${COLORS.black};
  background: ${COLORS.yellow};

  font-size: 0.95em;
  font-weight: 600;

  cursor: pointer;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const UnavailableButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  padding: 11px 15px;

  border: none;
  border-radius: 10px;

  color: ${COLORS.white};
  background: ${COLORS.Inactif};

  font-size: 0.95em;
  font-weight: 600;

  cursor: not-allowed;
`;

/* ==========================================
   Quantity
========================================== */

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  padding: 5px;

  border: 1px solid ${COLORS.Bordure};
  border-radius: 10px;
  background: ${COLORS.Fond};
`;

const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;

  border: none;
  border-radius: 8px;

  color: ${COLORS.white};
  background: ${COLORS.main};

  cursor: pointer;

  &:hover {
    background: ${COLORS.second};
  }
`;

const Quantity = styled.span`
  min-width: 25px;

  color: ${COLORS.Texte};
  font-size: 1.1em;
  font-weight: 700;
  text-align: center;
`;

/* ==========================================
   Empty
========================================== */

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 20px;

  color: ${COLORS.TexteSecondaire};
  text-align: center;

  h2 {
    margin: 15px 0 5px;
    color: ${COLORS.Texte};
  }

  p {
    margin: 0;
  }
`;
