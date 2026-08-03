import styled from "styled-components";

import COLORS from "../../Styles/Styles";
import type { Order } from "../../Context/OrderContext";

type OrderFiltersProps = {
  selectedStatus: "all" | Order["status"];
  onSelectStatus: (status: "all" | Order["status"]) => void;
};

export const OrderFilters = ({
  selectedStatus,
  onSelectStatus,
}: OrderFiltersProps) => {
  return (
    <Filters>
      <FilterButton
        type="button"
        $active={selectedStatus === "all"}
        onClick={() => onSelectStatus("all")}
      >
        Toutes
      </FilterButton>

      <FilterButton
        type="button"
        $active={selectedStatus === "waiting"}
        onClick={() => onSelectStatus("waiting")}
      >
        En attente
      </FilterButton>

      <FilterButton
        type="button"
        $active={selectedStatus === "preparing"}
        onClick={() => onSelectStatus("preparing")}
      >
        En préparation
      </FilterButton>

      <FilterButton
        type="button"
        $active={selectedStatus === "ready"}
        onClick={() => onSelectStatus("ready")}
      >
        Prêtes
      </FilterButton>

      <FilterButton
        type="button"
        $active={selectedStatus === "delivered"}
        onClick={() => onSelectStatus("delivered")}
      >
        Terminées
      </FilterButton>

      <FilterButton
        type="button"
        $active={selectedStatus === "refused"}
        onClick={() => onSelectStatus("refused")}
      >
        Refusées
      </FilterButton>

      <FilterButton
        type="button"
        $active={selectedStatus === "cancelled"}
        onClick={() => onSelectStatus("cancelled")}
      >
        Annulées
      </FilterButton>
    </Filters>
  );
};

const Filters = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 25px;
  overflow-x: auto;
  padding-bottom: 5px;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  flex-shrink: 0;

  padding: 9px 15px;

  border: 1px solid ${({ $active }) => ($active ? COLORS.main : COLORS.Bordure)};

  border-radius: 20px;

  color: ${({ $active }) => ($active ? COLORS.white : COLORS.Texte)};

  background: ${({ $active }) => ($active ? COLORS.main : COLORS.Carte)};

  cursor: pointer;
`;
