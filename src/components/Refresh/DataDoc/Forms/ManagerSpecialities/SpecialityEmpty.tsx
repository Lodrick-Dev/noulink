import styled from "styled-components";
import { Image as ImageIcon, Plus } from "lucide-react";

import COLORS from "../../../../../Styles/Styles";

type SpecialityEmptyProps = {
  onAdd: () => void;
};

export const SpecialityEmpty = ({ onAdd }: SpecialityEmptyProps) => {
  return (
    <EmptyState>
      <div className="empty-icon">
        <ImageIcon size={32} />
      </div>

      <h3>Aucune spécialité</h3>

      <p>
        Ajoutez votre première spécialité pour commencer à présenter votre carte
        aux clients.
      </p>

      <AddButton onClick={onAdd}>
        <Plus size={20} />
        Ajouter une spécialité
      </AddButton>
    </EmptyState>
  );
};

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 400px;
  padding: 40px;

  border: 1px dashed ${COLORS.Bordure};
  border-radius: 16px;

  background: ${COLORS.Carte};

  text-align: center;

  .empty-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 70px;
    height: 70px;
    margin-bottom: 15px;

    border-radius: 50%;

    background: ${COLORS.Fond};
    color: ${COLORS.main};
  }

  h3 {
    margin: 0;

    color: ${COLORS.Texte};

    font-size: 1.15rem;
    font-weight: 700;
  }

  p {
    max-width: 450px;
    margin: 10px 0 25px;

    color: ${COLORS.TexteSecondaire};

    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media screen and (max-width: 500px) {
    min-height: 350px;
    padding: 25px 20px;
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 18px;

  border: none;
  border-radius: 10px;

  background: ${COLORS.main};
  color: ${COLORS.white};

  font-size: 0.95rem;
  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.92;
    background: ${COLORS.second};
  }

  &:active {
    transform: translateY(0);
  }
`;
