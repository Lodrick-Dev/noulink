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
import type { TypeDoc } from "../../Refresh";
import axios from "axios";
import Loading from "../../../Loading/Loading";
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
  const [updating, setUpdating] = useState(false);
  const [updatePseudo, setUpdatePseudo] = useState("");
  const [updateSaveur, setUpdateSaveur] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const { ville } = Dynamic();

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
    } catch (error) {
      setUpdating(false);
      console.log(error);
      return toast.error("Une erreur est survenue");
    }
  };
  return (
    <StyledFormGlobale>
      <div className="the-inputs">
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
            defaultValue={
              updateSaveur ? updateSaveur : capitalizeFirstLetter(saveur)
            }
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
          value={updateDescription ? updateDescription : description}
          onChange={(e) => setUpdateDescription(e.target.value)}
        ></textarea>
        {updating && <Loading />}
        {!updating && (
          <button onClick={() => handleUpdate()}>Enregistrer</button>
        )}
      </div>
    </StyledFormGlobale>
  );
};

export default FormGlobale;
const StyledFormGlobale = styled.div`
  background: ${COLORS.second};
  padding: 10px;
  border-radius: 10px;
  .the-inputs {
    width: 60%;
    display: flex;
    flex-direction: column;
    input,
    textarea {
      padding: 5px;
      border-radius: 5px;
      outline: none;
      margin-top: 10px;
      border: none;
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
    .the-inputs {
      width: 100%;
      textarea {
        height: 10svh;
      }
    }
  }
`;
