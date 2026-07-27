import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import type { TypeSpecialities } from "./ListesHome";
import { Dynamic } from "../../Context/ContextDynamique";
import { useAccount } from "../../Context/AccountContext";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { useCart } from "../../Context/CartContext";

type SpecialityCartButtonProps = {
  idrestaurant: string;
  speciality: TypeSpecialities;
  onLogin: () => void;
};

export const SpecialityCartButton = ({
  idrestaurant,
  speciality,
  onLogin,
}: SpecialityCartButtonProps) => {
  const { token } = Dynamic();
  const { accountType } = useAccount();
  const { addToCart, removeFromCart, getQuantity } = useCart();
  const messageDisplay = (status: boolean) => {
    if (!token) {
      return "Connectez-vous";
    }
    if (accountType === "restaurant") {
      return "Commande réservée aux clients";
    }
    if (accountType === "customer" && status) {
      return "Ajouter au panier";
    }
    return "Indisponible";
  };
  const quantity = getQuantity(speciality.id, idrestaurant);

  // Utilisateur non connecté
  if (!token) {
    return (
      <AddButton type="button" onClick={onLogin}>
        <ShoppingCart size={18} />
        {messageDisplay(speciality.available)}
      </AddButton>
    );
  }

  // Restaurant connecté
  if (accountType === "restaurant") {
    return (
      <UnavailableButton type="button" disabled>
        <X size={18} />
        {messageDisplay(speciality.available)}
      </UnavailableButton>
    );
  }

  // Spécialité indisponible
  if (!speciality.available) {
    return (
      <UnavailableButton type="button" disabled>
        <X size={18} />
        {messageDisplay(speciality.available)}
      </UnavailableButton>
    );
  }

  // Client connecté - Aucun article
  if (quantity === 0) {
    return (
      <AddButton
        type="button"
        onClick={() => addToCart(speciality.id, idrestaurant)}
      >
        <ShoppingCart size={18} />
        {messageDisplay(speciality.available)}
      </AddButton>
    );
  }

  // Client connecté - Article dans le panier
  return (
    <QuantityContainer>
      <QuantityButton
        type="button"
        onClick={() => removeFromCart(speciality.id, idrestaurant)}
      >
        <Minus size={18} className="i-c" />
      </QuantityButton>

      <Quantity>{quantity}</Quantity>

      <QuantityButton
        type="button"
        onClick={() => addToCart(speciality.id, idrestaurant)}
      >
        <Plus size={18} />
      </QuantityButton>
    </QuantityContainer>
  );
};

// ==========================================
// Styled Components
// ==========================================

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
  .i-c {
    color: aliceblue;
  }
`;

const Quantity = styled.span`
  min-width: 25px;

  color: ${COLORS.Texte};
  font-size: 1.1em;
  font-weight: 700;
  text-align: center;
`;
