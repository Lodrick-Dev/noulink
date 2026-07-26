import styled from "styled-components";
import {
  Check,
  Eye,
  EyeOff,
  Image as ImageIcon,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

import COLORS from "../../../../../Styles/Styles";
import type { Speciality } from "./speciality.types";

type SpecialityCardProps = {
  speciality: Speciality;
  onEdit: (speciality: Speciality) => void;
  onDelete: (id: string) => void;
  onToggleAvailable: (id: string) => void;
};

export const SpecialityCard = ({
  speciality,
  onEdit,
  onDelete,
  onToggleAvailable,
}: SpecialityCardProps) => {
  return (
    <SpecialityCardContainer $available={speciality.available}>
      <ImageContainer>
        {speciality.image ? (
          <SpecialityImage src={speciality.image} alt={speciality.name} />
        ) : (
          <ImagePlaceholder>
            <ImageIcon size={38} />
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
        <CardTop>
          <SpecialityName>{speciality.name}</SpecialityName>

          <Price>
            {speciality.price.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
            })}
          </Price>
        </CardTop>

        <Description>
          {speciality.description || "Aucune description"}
        </Description>

        <CardActions>
          <ActionButton
            type="button"
            onClick={() => {
              if (!speciality.id) return;
              onToggleAvailable(speciality.id);
            }}
            $variant="status"
            title={
              speciality.available ? "Rendre indisponible" : "Rendre disponible"
            }
          >
            {speciality.available ? <EyeOff size={18} /> : <Eye size={18} />}
          </ActionButton>

          <ActionButton
            type="button"
            onClick={() => onEdit(speciality)}
            $variant="edit"
          >
            <Pencil size={18} />
            Modifier
          </ActionButton>

          <ActionButton
            type="button"
            onClick={() => {
              if (!speciality.id) return;
              onDelete(speciality.id);
            }}
            $variant="delete"
            title="Supprimer"
          >
            <Trash2 size={18} />
          </ActionButton>
        </CardActions>
      </CardContent>
    </SpecialityCardContainer>
  );
};

const SpecialityCardContainer = styled.article<{ $available: boolean }>`
  overflow: hidden;
  border: 1px solid ${COLORS.Bordure};
  border-radius: 16px;
  background: ${COLORS.Carte};
  box-shadow: 0 5px 18px rgba(26, 26, 26, 0.06);
  opacity: ${({ $available }) => ($available ? 1 : 0.75)};
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(26, 26, 26, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  overflow: hidden;
  background: ${COLORS.Fond};
`;

const SpecialityImage = styled.img`
  display: block;
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
    font-size: 0.85rem;
  }
`;

const Status = styled.div<{ $available: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  align-items: center;
  gap: 5px;

  padding: 6px 10px;

  border-radius: 20px;

  background: ${({ $available }) =>
    $available ? COLORS.Actif : COLORS.Inactif};

  color: ${COLORS.white};
  font-size: 0.75rem;
  font-weight: 600;

  box-shadow: 0 3px 8px rgba(26, 26, 26, 0.12);
`;

const CardContent = styled.div`
  padding: 18px;
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
`;

const SpecialityName = styled.h2`
  margin: 0;

  color: ${COLORS.Texte};
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.35;
`;

const Price = styled.span`
  color: ${COLORS.Premium};
  font-size: 1.05rem;
  font-weight: 700;
  white-space: nowrap;
`;

const Description = styled.p`
  min-height: 42px;
  margin: 12px 0 18px;

  color: ${COLORS.TexteSecondaire};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ActionButton = styled.button<{
  $variant: "status" | "edit" | "delete";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  min-height: 38px;
  padding: 8px 11px;

  border: 1px solid ${COLORS.Bordure};
  border-radius: 8px;

  background: ${COLORS.Carte};

  color: ${({ $variant }) =>
    $variant === "delete"
      ? COLORS.Inactif
      : $variant === "edit"
        ? COLORS.main
        : COLORS.TexteSecondaire};

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${COLORS.Fond};

    border-color: ${({ $variant }) =>
      $variant === "delete"
        ? COLORS.Inactif
        : $variant === "edit"
          ? COLORS.main
          : COLORS.TexteSecondaire};
  }

  &:active {
    transform: scale(0.97);
  }

  &:nth-child(2) {
    flex: 1;
  }

  @media (max-width: 400px) {
    &:nth-child(2) {
      font-size: 0;
      flex: 0;
    }
  }
`;
