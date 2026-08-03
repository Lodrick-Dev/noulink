import { useMemo, useState } from "react";
import styled from "styled-components";
import { RefreshCw, ShoppingBag, XCircle } from "lucide-react";

import COLORS from "../../Styles/Styles";
import { useOrder, type Order } from "../../Context/OrderContext";
import { OrderStats } from "./OrderStats";
import { OrderFilters } from "./OrderFilters";
import { OrderCard } from "./OrderCard";

export const Orders = () => {
  const { orders, loadingOrders, orderError, refreshSellerOrders } = useOrder();

  const [selectedStatus, setSelectedStatus] = useState<"all" | Order["status"]>(
    "all",
  );

  const filteredOrders = useMemo(() => {
    if (selectedStatus === "all") {
      return orders;
    }

    return orders.filter((order) => order.status === selectedStatus);
  }, [orders, selectedStatus]);

  if (loadingOrders && orders.length === 0) {
    return (
      <StyledOrders>
        <LoadingContainer>
          <RefreshCw className="spin" size={32} />
          <p>Chargement des commandes...</p>
        </LoadingContainer>
      </StyledOrders>
    );
  }

  return (
    <StyledOrders>
      <PageHeader>
        <div>
          <PageTitle>
            <ShoppingBag size={30} />
            Commandes reçues
          </PageTitle>

          <PageSubtitle>
            Gérez les commandes envoyées par vos clients.
          </PageSubtitle>
        </div>

        <RefreshButton
          type="button"
          onClick={refreshSellerOrders}
          disabled={loadingOrders}
        >
          <RefreshCw size={18} className={loadingOrders ? "spin" : ""} />
          Actualiser
        </RefreshButton>
      </PageHeader>

      <OrderStats
        orders={orders}
        selectedStatus={selectedStatus}
        onSelectStatus={setSelectedStatus}
      />

      <OrderFilters
        selectedStatus={selectedStatus}
        onSelectStatus={setSelectedStatus}
      />

      {orderError && (
        <ErrorMessage>
          <XCircle size={20} />
          <span>{orderError}</span>
        </ErrorMessage>
      )}

      {filteredOrders.length === 0 ? (
        <EmptyState>
          <ShoppingBag size={50} />

          <h2>
            {selectedStatus === "all"
              ? "Aucune commande"
              : "Aucune commande dans cette catégorie"}
          </h2>

          <p>
            {selectedStatus === "all"
              ? "Les nouvelles commandes de vos clients apparaîtront ici."
              : "Aucune commande ne correspond à ce statut."}
          </p>
        </EmptyState>
      ) : (
        <OrdersList>
          {filteredOrders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </OrdersList>
      )}
    </StyledOrders>
  );
};

const StyledOrders = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
  padding-bottom: 50px;
`;

const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const PageTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: 12px;

  margin: 0 0 8px;

  color: ${COLORS.Texte};
  font-size: 1.8rem;
`;

const PageSubtitle = styled.p`
  margin: 0;
  color: ${COLORS.TexteSecondaire};
`;

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 11px 16px;

  border: 1px solid ${COLORS.Bordure};
  border-radius: 10px;

  color: ${COLORS.Texte};
  background: ${COLORS.Carte};

  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${COLORS.Fond};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 70px 20px;

  border: 1px dashed ${COLORS.Bordure};
  border-radius: 16px;

  color: ${COLORS.TexteSecondaire};
  text-align: center;

  svg {
    margin-bottom: 15px;
  }

  h2 {
    margin: 0 0 8px;
    color: ${COLORS.Texte};
  }

  p {
    margin: 0;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 400px;

  color: ${COLORS.TexteSecondaire};

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 20px;
  padding: 14px 16px;

  border-radius: 10px;

  color: ${COLORS.white};
  background: ${COLORS.Inactif};
`;
