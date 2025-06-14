import styled from "styled-components";
import type { TypeDoc } from "../Refresh";
import COLORS from "../../../Styles/Styles";
import {
  capitalizeFirstLetter,
  formatRelativeDate,
} from "../../utils/fonctions";
import { SquarePen } from "lucide-react";
import { useRef, useState } from "react";
import FormGlobale from "./Forms/FormGlobale";

const DataGlobale = ({ restaurant }: { restaurant: TypeDoc }) => {
  const [update, setUpdate] = useState(false);
  const [imageProfil, setImageProfil] = useState<string | undefined>(
    restaurant ? restaurant.profil : ""
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChangeProfil = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && ["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      const imageURL = URL.createObjectURL(file);
      setImageProfil(imageURL); // Mise à jour de l'aperçu
      // Ici tu peux aussi envoyer le fichier à ton backend si besoin
    }
  };
  return (
    <StyledDataGlobale>
      <div className="info-rest">
        <p className="incript">
          {formatRelativeDate(restaurant.createdAt, "Inscrit : ")}
        </p>
        <div className="profil-img">
          {/* <SquarePen
            className="icon-update-profil"
            onClick={() => setUpdate(!update)}
          /> */}
          <img
            // src={restaurant.profil}
            src={imageProfil}
            alt="image-profil"
            onClick={() => handleChangeProfil()}
          />
          <input
            type="file"
            className="input-file"
            ref={inputRef}
            accept=".jpeg,.jpg,.png"
            onChange={handleFileChange}
          />
        </div>
        <SquarePen className="icon-update" onClick={() => setUpdate(!update)} />
        {update ? (
          <FormGlobale
            name={restaurant.pseudo}
            saveur={restaurant.saveur}
            villebase={restaurant.ville}
            description={restaurant.description}
            setUpdate={setUpdate}
          />
        ) : (
          <div className="data-text-glob">
            <p>Nom : {restaurant.pseudo}</p>
            <p>Lieu : {capitalizeFirstLetter(restaurant.ville)}</p>
            <p>Saveur : {capitalizeFirstLetter(restaurant.saveur)}</p>
            <p>Description : {restaurant.description}</p>
          </div>
        )}
      </div>
    </StyledDataGlobale>
  );
};

export default DataGlobale;
const StyledDataGlobale = styled.div`
  background: ${COLORS.main};
  margin: 10px;
  border-radius: 10px;
  width: 40%;
  .info-rest {
    padding: 10px;
    .incript {
      display: block;
      text-align: center;
      color: ${COLORS.yellow};
      font-size: 1.2em;
    }
    .data-text-glob {
      p {
        color: ${COLORS.white};
        margin-bottom: 10px;
      }
    }
    .profil-img {
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: ${COLORS.second};
      border-radius: 5px;
      margin: 20px 0px;
      .icon-update-profil {
        cursor: pointer;
        margin: 10px;
        color: ${COLORS.yellow};
      }
      img {
        width: 30%;
        border-radius: 10px;
        padding: 5px;
        margin: 5px;
        cursor: pointer;
        background: ${COLORS.second};
      }
      .input-file {
        visibility: hidden;
      }
    }
    .icon-update {
      cursor: pointer;
      color: ${COLORS.yellow};
    }
    .data-text-glob {
    }
  }
`;
