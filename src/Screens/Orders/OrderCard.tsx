import { useState } from "react";
import styled from "styled-components";
import {
  Check,
  MapPin,
  PackageCheck,
  ShoppingBag,
  X,
  XCircle,
} from "lucide-react";
import { toast } from "react-toastify";

import COLORS from "../../Styles/Styles";
import { useOrder, type Order } from "../../Context/OrderContext";
import axios from "axios";
import { Dynamic } from "../../Context/ContextDynamique";

type OrderCardProps = {
  order: Order;
};

export const OrderCard = ({ order }: OrderCardProps) => {
  const [updating, setUpdating] = useState(false);
  const { token } = Dynamic();
  const { refreshSellerOrders } = useOrder();

  const handleUpdateStatus = async (status: Order["status"]) => {
    if (status === "refused") {
      const confirmed = window.confirm(
        "Êtes-vous sûr de vouloir refuser cette commande ?",
      );

      if (!confirmed) {
        return;
      }
    }

    try {
      setUpdating(true);

      const res = await axios.patch(
        `${import.meta.env.VITE_APP_API}order/${order._id}/status`,
        {
          status,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data.success) {
        toast.success(res.data.message);

        // Recharge les commandes du restaurant
        // pour afficher immédiatement le nouveau statut
        await refreshSellerOrders();
      }
    } catch (error) {
      console.error(
        "Erreur lors de la modification du statut de la commande :",
        error,
      );

      toast.error("Impossible de modifier le statut de la commande.");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <OrderCardContainer>
      <OrderTop>
        <OrderIdentity>
          <OrderNumber>
            Commande #{order._id.slice(-6).toUpperCase()}
          </OrderNumber>

          <OrderDate>{formatDate(order.createdAt)}</OrderDate>
        </OrderIdentity>

        <StatusBadge $status={order.status}>
          <StatusDot $status={order.status} />
          {getStatusLabel(order.status)}
        </StatusBadge>
      </OrderTop>

      <OrderInfo>
        <OrderType>
          {order.delivery ? (
            <>
              <MapPin size={18} />
              Livraison
            </>
          ) : (
            <>
              <ShoppingBag size={18} />À récupérer
            </>
          )}
        </OrderType>

        <OrderTotal>
          {order.total.toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
          })}
        </OrderTotal>
      </OrderInfo>

      <ItemsList>
        {order.items.map((item) => (
          <OrderItem key={item.id}>
            <ItemQuantity>{item.quantity}x</ItemQuantity>

            <ItemInformation>
              <ItemName>{item.name}</ItemName>

              {item.description && (
                <ItemDescription>{item.description}</ItemDescription>
              )}
            </ItemInformation>

            <ItemPrice>
              {item.totalPrice.toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR",
              })}
            </ItemPrice>
          </OrderItem>
        ))}
      </ItemsList>

      <OrderActions>
        {order.status === "waiting" && (
          <>
            <ActionButton
              type="button"
              $variant="refuse"
              disabled={updating}
              onClick={() => handleUpdateStatus("refused")}
            >
              <X size={18} />
              Refuser
            </ActionButton>

            <ActionButton
              type="button"
              $variant="accept"
              disabled={updating}
              onClick={() => handleUpdateStatus("preparing")}
            >
              <Check size={18} />
              Accepter la commande
            </ActionButton>
          </>
        )}

        {order.status === "preparing" && (
          <ActionButton
            type="button"
            $variant="ready"
            disabled={updating}
            onClick={() => handleUpdateStatus("ready")}
          >
            <PackageCheck size={18} />
            Commande prête
          </ActionButton>
        )}

        {order.status === "ready" && (
          <ActionButton
            type="button"
            $variant="complete"
            disabled={updating}
            onClick={() => handleUpdateStatus("delivered")}
          >
            <Check size={18} />

            {order.delivery
              ? "Marquer comme livrée"
              : "Commande remise au client"}
          </ActionButton>
        )}

        {order.status === "delivered" && (
          <CompletedMessage>
            <Check size={18} />
            Commande terminée
          </CompletedMessage>
        )}

        {order.status === "refused" && (
          <RefusedMessage>
            <XCircle size={18} />
            Commande refusée
          </RefusedMessage>
        )}

        {order.status === "cancelled" && (
          <RefusedMessage>
            <XCircle size={18} />
            Commande annulée
          </RefusedMessage>
        )}
      </OrderActions>
    </OrderCardContainer>
  );
};

const formatDate = (date?: string) => {
  if (!date) {
    return "Date inconnue";
  }

  return new Date(date).toLocaleString("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const getStatusLabel = (status: Order["status"]) => {
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
      return status;
  }
};

const OrderCardContainer = styled.article`
  overflow: hidden;

  background: ${COLORS.Carte};

  border: 1px solid ${COLORS.Bordure};
  border-radius: 16px;

  box-shadow: 0 5px 18px rgba(31, 64, 104, 0.07);
`;

const OrderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  padding: 18px 20px;

  border-bottom: 1px solid ${COLORS.Bordure};

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const OrderIdentity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const OrderNumber = styled.strong`
  color: ${COLORS.Texte};
`;

const OrderDate = styled.span`
  color: ${COLORS.TexteSecondaire};
  font-size: 0.85rem;
`;

const StatusBadge = styled.div<{
  $status: Order["status"];
}>`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 8px 13px;

  border-radius: 20px;

  color: ${COLORS.Texte};
  background: ${COLORS.Fond};

  font-size: 0.85rem;
  font-weight: 700;
`;

const StatusDot = styled.span<{
  $status: Order["status"];
}>`
  width: 9px;
  height: 9px;
  border-radius: 50%;

  background: ${({ $status }) => {
    switch ($status) {
      case "waiting":
        return "#f59e0b";
      case "preparing":
        return "#3b82f6";
      case "ready":
        return "#16a34a";
      case "delivered":
        return "#16a34a";
      case "refused":
      case "cancelled":
        return "#dc2626";
      default:
        return COLORS.main;
    }
  }};
`;

const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 20px;

  background: ${COLORS.Fond};
`;

const OrderType = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;

  color: ${COLORS.TexteSecondaire};

  font-size: 0.9rem;
  font-weight: 600;
`;

const OrderTotal = styled.strong`
  color: ${COLORS.green};
  font-size: 1.15rem;
`;

const ItemsList = styled.div`
  padding: 5px 20px;
`;

const OrderItem = styled.div`
  display: grid;
  grid-template-columns: 45px 1fr auto;
  align-items: center;
  gap: 12px;

  padding: 15px 0;

  border-bottom: 1px solid ${COLORS.Bordure};

  &:last-child {
    border-bottom: none;
  }
`;

const ItemQuantity = styled.span`
  color: ${COLORS.main};
  font-weight: 800;
`;

const ItemInformation = styled.div`
  min-width: 0;
`;

const ItemName = styled.strong`
  display: block;
  color: ${COLORS.Texte};
`;

const ItemDescription = styled.span`
  display: block;

  margin-top: 3px;

  color: ${COLORS.TexteSecondaire};

  font-size: 0.8rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemPrice = styled.span`
  color: ${COLORS.Texte};
  font-weight: 600;
`;

const OrderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  padding: 15px 20px;

  border-top: 1px solid ${COLORS.Bordure};

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button<{
  $variant: "refuse" | "accept" | "ready" | "complete";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 15px;

  border: none;
  border-radius: 9px;

  color: ${COLORS.white};

  background: ${({ $variant }) => {
    switch ($variant) {
      case "refuse":
        return COLORS.Inactif;
      case "accept":
        return COLORS.green;
      case "ready":
        return COLORS.main;
      case "complete":
        return COLORS.green;
      default:
        return COLORS.main;
    }
  }};

  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CompletedMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${COLORS.green};
  font-weight: 600;
`;

const RefusedMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${COLORS.Inactif};
  font-weight: 600;
`;
