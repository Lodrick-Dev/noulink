import styled from "styled-components";
import Localisation from "../../../Inscription/Localisation";
import COLORS from "../../../../Styles/Styles";
import { capitalizeFirstLetter } from "../../../utils/fonctions";
import { useState } from "react";
import { Dynamic } from "../../../../Context/ContextDynamique";
import { toast } from "react-toastify";
type TypeProps = {
  name: string | undefined;
  saveur: string | undefined;
  villebase: string | undefined;
  description: string | undefined;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};
const FormGlobale = ({
  name,
  saveur,
  villebase,
  description,
  setUpdate,
}: TypeProps) => {
  const [updatePseudo, setUpdatePseudo] = useState("");
  const [updateSaveur, setUpdateSaveur] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const { ville } = Dynamic();

  const handleUpdate = async () => {
    if (!updatePseudo && !updatePseudo && !updateDescription) {
      if (villebase !== ville) {
        setUpdate(false);
        return toast.info("Aucune modification a été apporté");
      }
    }
  };
  return (
    <StyledFormGlobale>
      <div className="the-inputs">
        <input
          type="text"
          placeholder="Nom (pseudo,etablissement)"
          value={updatePseudo ? updatePseudo : name}
        />
        <Localisation />
        <div className="box-saveur">
          <label htmlFor="saveur">Saveurs de* : </label>
          <select
            id="saveur"
            value={updateSaveur ? updateSaveur : capitalizeFirstLetter(saveur)}
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
        ></textarea>
        <button onClick={() => handleUpdate()}>Enregistrer</button>
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
