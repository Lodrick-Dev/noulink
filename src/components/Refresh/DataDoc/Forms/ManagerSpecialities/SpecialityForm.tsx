import { useEffect, useRef, useState } from "react";
import { Check, ImagePlus, Plus, X } from "lucide-react";
import styled from "styled-components";

import COLORS from "../../../../../Styles/Styles";

import type { SpecialityFormData } from "./speciality.types";

type SpecialityFormProps = {
  isOpen: boolean;
  editingId: string | null;
  form: SpecialityFormData;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (
    field: keyof SpecialityFormData,
    value: string | boolean | File | null,
  ) => void;
};

export const SpecialityForm = ({
  isOpen,
  editingId,
  form,
  onClose,
  onSubmit,
  onChange,
}: SpecialityFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  /**
   * Crée un aperçu local lorsqu'une nouvelle
   * image est sélectionnée.
   */
  useEffect(() => {
    // Si une nouvelle image a été sélectionnée
    if (form.image instanceof File) {
      const previewUrl = URL.createObjectURL(form.image);

      setImagePreview(previewUrl);

      return () => {
        URL.revokeObjectURL(previewUrl);
      };
    }

    // Si aucune nouvelle image n'est sélectionnée,
    // on affiche l'image existante
    if (form.currentImage) {
      setImagePreview(form.currentImage);
      return;
    }

    // Aucune image
    setImagePreview(null);
  }, [form.image, form.currentImage]);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    onChange("image", file);
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div>
            <ModalTitle>
              {editingId ? "Modifier la spécialité" : "Ajouter une spécialité"}
            </ModalTitle>

            <ModalSubtitle>
              Présentez votre spécialité aux clients.
            </ModalSubtitle>
          </div>

          <CloseButton type="button" onClick={onClose}>
            <X size={22} />
          </CloseButton>
        </ModalHeader>

        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label>Nom de la spécialité *</Label>

            <Input
              type="text"
              placeholder="Ex : Colombo de poulet"
              value={form.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
          </FormGroup>

          <FormRow>
            <FormGroup>
              <Label>Prix (€) *</Label>

              <Input
                type="number"
                min="0"
                step="0.01"
                placeholder="15.00"
                value={form.price}
                onChange={(e) => onChange("price", e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label>Disponibilité</Label>

              <AvailabilityButton
                type="button"
                $available={form.available}
                onClick={() => onChange("available", !form.available)}
              >
                {form.available ? (
                  <>
                    <Check size={17} />
                    Disponible
                  </>
                ) : (
                  <>
                    <X size={17} />
                    Indisponible
                  </>
                )}
              </AvailabilityButton>
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label>Description</Label>

            <TextArea
              placeholder="Décrivez votre spécialité..."
              value={form.description}
              onChange={(e) => onChange("description", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label>Image de la spécialité</Label>

            <ImageUploadContainer>
              <HiddenFileInput
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png"
                onChange={handleImageChange}
              />

              <ImageUploadButton
                type="button"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImagePlus size={22} />

                <span>
                  {imagePreview ? "Changer l'image" : "Ajouter une image"}
                </span>
              </ImageUploadButton>

              {imagePreview && (
                <ImagePreviewContainer>
                  <ImagePreview
                    src={imagePreview}
                    alt="Aperçu de la spécialité"
                  />

                  {/* <RemoveImageButton
                    type="button"
                    onClick={handleRemoveImage}
                    title="Supprimer l'image"
                  >
                    <X size={18} />
                  </RemoveImageButton> */}
                </ImagePreviewContainer>
              )}
            </ImageUploadContainer>
          </FormGroup>

          <ModalActions>
            <CancelButton type="button" onClick={onClose}>
              Annuler
            </CancelButton>

            <SubmitButton type="submit">
              {editingId ? (
                <>
                  <Check size={19} />
                  Enregistrer
                </>
              ) : (
                <>
                  <Plus size={19} />
                  Ajouter
                </>
              )}
            </SubmitButton>
          </ModalActions>
        </Form>
      </Modal>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(26, 26, 26, 0.55);
`;

const Modal = styled.div`
  width: 100%;
  max-width: 600px;
  max-height: 90vh;

  overflow-y: auto;

  border: 1px solid ${COLORS.Bordure};
  border-radius: 18px;

  background: ${COLORS.Carte};

  box-shadow: 0 20px 50px rgba(26, 26, 26, 0.2);

  @media (max-width: 650px) {
    max-height: 95vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  padding: 24px;

  border-bottom: 1px solid ${COLORS.Bordure};
`;

const ModalTitle = styled.h2`
  margin: 0;

  color: ${COLORS.Texte};

  font-size: 1.3rem;
  font-weight: 700;
`;

const ModalSubtitle = styled.p`
  margin: 5px 0 0;

  color: ${COLORS.TexteSecondaire};

  font-size: 0.85rem;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 38px;
  height: 38px;

  border: none;
  border-radius: 50%;

  background: ${COLORS.Fond};
  color: ${COLORS.Texte};

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${COLORS.Inactif};
    color: ${COLORS.white};
  }
`;

const Form = styled.form`
  padding: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  flex: 1;

  margin-bottom: 18px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Label = styled.label`
  color: ${COLORS.Texte};

  font-size: 0.85rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;

  padding: 12px 13px;

  border: 1px solid ${COLORS.Bordure};

  border-radius: 9px;

  outline: none;

  color: ${COLORS.Texte};
  background: ${COLORS.Carte};

  font-size: 0.9rem;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: ${COLORS.TexteSecondaire};
  }

  &:focus {
    border-color: ${COLORS.main};

    box-shadow: 0 0 0 3px rgba(31, 64, 104, 0.12);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;

  padding: 12px 13px;

  resize: vertical;

  border: 1px solid ${COLORS.Bordure};

  border-radius: 9px;

  outline: none;

  color: ${COLORS.Texte};
  background: ${COLORS.Carte};

  font-family: inherit;
  font-size: 0.9rem;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: ${COLORS.TexteSecondaire};
  }

  &:focus {
    border-color: ${COLORS.main};

    box-shadow: 0 0 0 3px rgba(31, 64, 104, 0.12);
  }
`;

const AvailabilityButton = styled.button<{
  $available: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  min-height: 42px;

  border: 1px solid
    ${({ $available }) => ($available ? COLORS.Actif : COLORS.Inactif)};

  border-radius: 9px;

  background: ${({ $available }) =>
    $available ? "rgba(33, 191, 115, 0.08)" : "rgba(238, 108, 77, 0.08)"};

  color: ${({ $available }) => ($available ? COLORS.Actif : COLORS.Inactif)};

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ $available }) =>
      $available ? "rgba(33, 191, 115, 0.15)" : "rgba(238, 108, 77, 0.15)"};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ImageUploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  width: 100%;
  min-height: 90px;

  border: 1px dashed ${COLORS.main};

  border-radius: 10px;

  background: ${COLORS.Fond};
  color: ${COLORS.main};

  font-size: 0.9rem;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(39, 142, 165, 0.08);
    border-color: ${COLORS.second};
  }

  &:active {
    transform: scale(0.99);
  }
`;

const ImagePreviewContainer = styled.div`
  position: relative;

  width: 100%;
  height: 180px;

  overflow: hidden;

  border: 1px solid ${COLORS.Bordure};

  border-radius: 10px;
`;

const ImagePreview = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  padding-top: 8px;

  @media (max-width: 450px) {
    flex-direction: column-reverse;

    button {
      width: 100%;
    }
  }
`;

const CancelButton = styled.button`
  padding: 11px 18px;

  border: 1px solid ${COLORS.Bordure};

  border-radius: 9px;

  background: ${COLORS.Carte};
  color: ${COLORS.Texte};

  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${COLORS.Fond};

    border-color: ${COLORS.TexteSecondaire};
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  padding: 11px 18px;

  border: none;
  border-radius: 9px;

  background: ${COLORS.main};
  color: ${COLORS.white};

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${COLORS.second};
  }

  &:active {
    transform: scale(0.98);
  }
`;
