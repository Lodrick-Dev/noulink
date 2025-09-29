import styled from "styled-components";
import Localisation from "../../../Inscription/Localisation";
import COLORS from "../../../../Styles/Styles";
import {
  capitalizeFirstLetter,
  normalizeString,
} from "../../../utils/fonctions";
import { useState } from "react";
import { Dynamic } from "../../../../Context/ContextDynamique";
import { toast } from "react-toastify";
import type { TypeDoc } from "../../Dashboard";
import axios from "axios";
import Loading from "../../../Loading/Loading";
import { supabase } from "../../../utils/supabaseClient";
type TypeProps = {
  name: string | undefined;
  saveur: string | undefined;
  villebase: string | undefined;
  description: string | undefined;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  setRestaurant: React.Dispatch<React.SetStateAction<TypeDoc | null>>;
};
const FormGlobale = ({
  name,
  saveur,
  villebase,
  description,
  setUpdate,
  id,
  setRestaurant,
}: TypeProps) => {
  const { ville, token } = Dynamic();
  const [updating, setUpdating] = useState(false);
  const [updatePseudo, setUpdatePseudo] = useState("");
  const [updateSaveur, setUpdateSaveur] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");

  //before we save pseudo to supabase:
  const updatePseudoSupaBase = async () => {
    const { data, error } = await supabase.auth.updateUser({
      data: { name: updatePseudo }, // ou { pseudo: newPseudo }
    });

    if (error) {
      console.error("Erreur :", error.message);
    } else {
      console.log("Profil mis à jour :", data.user);
      handleUpdate();
    }
  };

  const handleUpdate = async () => {
    // 1. Normaliser les valeurs de la base
    const basePseudo = name?.trim() || "";
    const baseSaveur = saveur?.trim() || "";
    const baseDescription = description?.trim() || "";
    const baseVille = normalizeString(villebase || "");

    // 2. Normaliser les valeurs saisies (états)
    const currentPseudo = updatePseudo.trim() || basePseudo;
    const currentSaveur = updateSaveur.trim() || baseSaveur;
    const currentDescription = updateDescription.trim() || baseDescription;
    const currentVille = normalizeString(ville);

    // 3. Comparaison réelle
    const hasChangedPseudo = currentPseudo !== basePseudo;
    const hasChangedSaveur = currentSaveur !== baseSaveur;
    const hasChangedDescription = currentDescription !== baseDescription;
    const hasChangedVille = currentVille !== baseVille;

    // 4. Si aucun champ n’a changé
    if (
      !hasChangedPseudo &&
      !hasChangedSaveur &&
      !hasChangedDescription &&
      !hasChangedVille
    ) {
      setUpdate(false);
      return toast.info("Aucune modification n’a été apportée.");
    }

    setUpdating(true);
    // 5. Envoi complet même si vide
    const data = {
      pseudo: currentPseudo,
      saveur: currentSaveur,
      description: currentDescription,
      ville: currentVille,
    };
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/update-info/${id}`,
        data,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        if (res.data) {
          if (res.data.succes) {
            setUpdating(false);
            setUpdate(false);
            setRestaurant(res.data.doc);
            return toast.success(res.data.succes);
          }
        }
      }
    } catch (error: any) {
      setUpdating(false);
      console.log(error);
      if (error.response.data.message) {
        return toast.error(error.response.data.message);
      }
      return toast.error("Une erreur est survenue");
    }
  };

  return (
    <StyledFormGlobale>
      <div className="the-inputs">
        <span>Informations </span>
        <input
          type="text"
          placeholder="Nom (pseudo,etablissement)"
          defaultValue={updatePseudo ? updatePseudo : name}
          onChange={(e) => setUpdatePseudo(e.target.value)}
        />
        <Localisation />
        <div className="box-saveur">
          <label htmlFor="saveur">Saveurs de* : </label>
          <select
            id="saveur"
            value={updateSaveur ? updateSaveur : capitalizeFirstLetter(saveur)}
            onChange={(e) => setUpdateSaveur(e.target.value)}
          >
            <option value="">--Selection de la saveur--</option>
            <option value="Guyane">Guyane</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Martinique">Martinique</option>
            <option value="Mayotte">Mayotte</option>
          </select>
        </div>
        <textarea
          placeholder="Description, contact, horaire, ect (optionnel)"
          defaultValue={updateDescription ? updateDescription : description}
          onChange={(e) => setUpdateDescription(e.target.value)}
        ></textarea>
        {updating && <Loading />}
        {!updating && (
          <button onClick={() => updatePseudoSupaBase()}>Enregistrer</button>
        )}
      </div>
    </StyledFormGlobale>
  );
};

export default FormGlobale;
const StyledFormGlobale = styled.div`
  background: ${COLORS.second};
  min-width: 30%;
  padding: 10px;
  border-radius: 10px;
  .the-inputs {
    width: 100%;
    display: flex;
    margin: 0px auto;
    flex-direction: column;
    span {
      display: block;
      width: 100%;
      text-align: center;
      text-align: center;
      color: ${COLORS.white};
      font-size: 1.2em;
    }
    input,
    textarea {
      padding: 5px;
      border-radius: 5px;
      outline: none;
      margin-top: 10px;
      border: none;
    }
    textarea {
      min-height: 100px;
    }
    .box-saveur {
      margin: 10px 0px;
      display: flex;
      flex-direction: column;
      label {
        font-size: 0.9em;
      }
      select {
        padding: 5px;
        border-radius: 5px;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }
    button {
      width: 50%;
      padding: 5px;
      border-radius: 5px;
      outline: none;
      border: none;
      background: ${COLORS.green};
      color: white;
      margin: 10px 0px;
      transition: 0.3s;
      cursor: pointer;
    }
    button:hover {
      transition: 0.3s;
      background: ${COLORS.main};
    }
  }
  @media screen and (max-width: 450px) {
    min-width: 80%;
    .the-inputs {
      width: 100%;
      textarea {
        height: 10svh;
      }
    }
  }
`;
