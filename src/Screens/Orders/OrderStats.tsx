import styled from "styled-components";
import { Check, Clock3, PackageCheck, ShoppingBag } from "lucide-react";

import COLORS from "../../Styles/Styles";
import type { Order } from "../../Context/OrderContext";

type OrderStatsProps = {
  orders: Order[];
  selectedStatus: "all" | Order["status"];
  onSelectStatus: (status: "all" | Order["status"]) => void;
};

export const OrderStats = ({
  orders,
  selectedStatus,
  onSelectStatus,
}: OrderStatsProps) => {
  const pendingCount = orders.filter(
    (order) => order.status === "waiting",
  ).length;

  const preparingCount = orders.filter(
    (order) => order.status === "preparing",
  ).length;

  const readyCount = orders.filter((order) => order.status === "ready").length;

  return (
    <Stats>
      <StatCard
        $active={selectedStatus === "waiting"}
        onClick={() => onSelectStatus("waiting")}
      >
        <StatIcon>
          <Clock3 size={22} />
        </StatIcon>

        <StatContent>
          <strong>{pendingCount}</strong>
          <span>En attente</span>
        </StatContent>
      </StatCard>

      <StatCard
        $active={selectedStatus === "preparing"}
        onClick={() => onSelectStatus("preparing")}
      >
        <StatIcon>
          <PackageCheck size={22} />
        </StatIcon>

        <StatContent>
          <strong>{preparingCount}</strong>
          <span>En préparation</span>
        </StatContent>
      </StatCard>

      <StatCard
        $active={selectedStatus === "ready"}
        onClick={() => onSelectStatus("ready")}
      >
        <StatIcon>
          <Check size={22} />
        </StatIcon>

        <StatContent>
          <strong>{readyCount}</strong>
          <span>Prêtes</span>
        </StatContent>
      </StatCard>

      <StatCard
        $active={selectedStatus === "all"}
        onClick={() => onSelectStatus("all")}
      >
        <StatIcon>
          <ShoppingBag size={22} />
        </StatIcon>

        <StatContent>
          <strong>{orders.length}</strong>
          <span>Total</span>
        </StatContent>
      </StatCard>
    </Stats>
  );
};

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 18px;

  border: 1px solid ${({ $active }) => ($active ? COLORS.main : COLORS.Bordure)};

  border-radius: 14px;

  background: ${COLORS.Carte};

  box-shadow: 0 4px 12px rgba(31, 64, 104, 0.06);

  text-align: left;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45px;
  height: 45px;

  border-radius: 12px;

  color: ${COLORS.main};
  background: ${COLORS.Fond};
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  strong {
    color: ${COLORS.Texte};
    font-size: 1.4rem;
  }

  span {
    color: ${COLORS.TexteSecondaire};
    font-size: 0.85rem;
  }
`;
