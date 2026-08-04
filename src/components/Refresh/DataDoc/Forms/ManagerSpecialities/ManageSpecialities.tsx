import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import styled from "styled-components";

import COLORS from "../../../../../Styles/Styles";

import type { Speciality, SpecialityFormData } from "./speciality.types";

import { SpecialityCard } from "./SpecialityCard";
import { SpecialityEmpty } from "./SpecialityEmpty";
import { SpecialityForm } from "./SpecialityForm";
import axios from "axios";
import { Dynamic } from "../../../../../Context/ContextDynamique";
import { useAccount } from "../../../../../Context/AccountContext";
import { toast } from "react-toastify";

const initialForm: SpecialityFormData = {
  name: "",
  price: "",
  description: "",
  image: "",
  currentImage: "",
  available: true,
};

export const ManageSpecialities = () => {
  const [specialities, setSpecialities] = useState<Speciality[] | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<SpecialityFormData>(initialForm);
  const { token } = Dynamic();
  const { account } = useAccount();

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      description: "",
      image: null,
      currentImage: "",
      available: true,
    });

    setEditingId(null);
    setIsFormOpen(false);
  };

  // ==========================================
  // Ouvrir le formulaire de création
  const openCreateForm = () => {
    setEditingId(null);

    setForm({
      name: "",
      price: "",
      description: "",
      image: null,
      currentImage: "",
      available: true,
    });

    setIsFormOpen(true);
  };

  // ==========================================
  // Ouvrir le formulaire de modification
  // ==========================================

  const openEditForm = (speciality: Speciality) => {
    // L'ID est obligatoire ici pour modifier
    // une spécialité existante.
    if (!speciality.id) {
      return;
    }

    setEditingId(speciality.id);

    setForm({
      name: speciality.name,
      price: speciality.price.toString(),
      description: speciality.description,
      image: null,
      currentImage: speciality.image,
      available: speciality.available,
    });

    setIsFormOpen(true);
  };

  // ==========================================
  // Modification d'un champ du formulaire
  const handleFormChange = (
    field: keyof SpecialityFormData,
    value: string | boolean | File | null,
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  //create or update
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.warning("Un nom est obligatoire");
      return;
    }

    if (!form.price) {
      toast.warning("Un prix est obligatoire");
      return;
    }

    try {
      if (!token) {
        console.error("Token introuvable");
        return;
      }

      const data = new FormData();

      data.append("name", form.name.trim());
      data.append("price", form.price);
      data.append("description", form.description.trim());
      data.append("available", String(form.available));

      if (form.image instanceof File) {
        data.append("image", form.image);
      }
      let res;
      // ==========================================
      // MODIFICATION
      // ==========================================
      if (editingId) {
        res = await axios({
          method: "post",
          url: `${import.meta.env.VITE_APP_API}restaurant/speciality/${editingId}`,
          data,
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Spécialité modifiée :", res.data);
        if (res.data.success) {
          setSpecialities(res.data.data);
          toast.success(res.data.message);
          resetForm();
        }
      }

      // ==========================================
      // CRÉATION
      // ==========================================
      else {
        res = await axios({
          method: "post",
          url: `${import.meta.env.VITE_APP_API}restaurant/speciality`,
          data,
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.success) {
          setSpecialities(res.data.data);
          toast.success(res.data.message);
          resetForm();
        }
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'enregistrement de la spécialité :",
        error,
      );
    }
  };

  const deleteSpeciality = async (id: string) => {
    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer cette spécialité ?",
    );
    if (!confirmDelete) {
      return;
    }
    try {
      if (!token) {
        console.error("Token introuvable");
        return;
      }
      const res = await axios({
        method: "delete",
        url: `${import.meta.env.VITE_APP_API}restaurant/speciality/${id}`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Spécialité supprimée :", res.data);

      // Le backend retourne :
      // {
      //   success: true,
      //   message: "Spécialité supprimée avec succès",
      //   data: [...]
      // }
      setSpecialities(res.data.data);
    } catch (error) {
      console.error("Erreur lors de la suppression de la spécialité :", error);
    }
  };

  const toggleAvailable = async (id: string) => {
    try {
      if (!token) {
        console.error("Token introuvable");
        return;
      }

      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/speciality/${id}/toggle-availability`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Disponibilité modifiée :", res.data);
      if (res.data.success) {
        setSpecialities(res.data.data);
        toast.success(res.data.message);
      }

      // Le backend retourne :
      // {
      //   success: true,
      //   message: "Spécialité disponible" / "Spécialité indisponible",
      //   speciality: {...},
      //   data: [...]
      // }

      setSpecialities(res.data.data);
    } catch (error) {
      console.error(
        "Erreur lors de la modification de la disponibilité :",
        error,
      );
    }
  };

  useEffect(() => {
    if (account) {
      setSpecialities(account.specialities);
    }
  }, [account]);
  return (
    <StyledManageSpecialities>
      <Header>
        <div>
          <Title>Mes spécialités</Title>

          <Subtitle>
            Gérez les plats et spécialités proposés à vos clients.
          </Subtitle>
        </div>

        <AddButton type="button" onClick={openCreateForm}>
          <Plus size={20} />
          Ajouter une spécialité
        </AddButton>
      </Header>

      {specialities && specialities.length === 0 ? (
        <SpecialityEmpty onAdd={openCreateForm} />
      ) : (
        <SpecialitiesGrid>
          {specialities &&
            specialities.map((speciality) => (
              <SpecialityCard
                key={speciality.id ?? `${speciality.name}-${speciality.price}`}
                speciality={speciality}
                onEdit={openEditForm}
                onDelete={deleteSpeciality}
                onToggleAvailable={toggleAvailable}
              />
            ))}
        </SpecialitiesGrid>
      )}

      <SpecialityForm
        isOpen={isFormOpen}
        editingId={editingId}
        form={form}
        onClose={resetForm}
        onSubmit={handleSubmit}
        onChange={handleFormChange}
      />
    </StyledManageSpecialities>
  );
};

const StyledManageSpecialities = styled.section`
  width: 100%;
  min-height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: ${COLORS.Fond};

  @media screen and (max-width: 650px) {
    padding: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: ${COLORS.Texte};
  font-size: 1.8rem;
  font-weight: 700;

  @media screen and (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  margin: 7px 0 0;
  color: ${COLORS.TexteSecondaire};
  font-size: 0.95rem;
  line-height: 1.5;
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

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const SpecialitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
