import styled from "styled-components";
import type { TypeDoc } from "../Refresh";
import COLORS from "../../../Styles/Styles";
import {
  capitalizeFirstLetter,
  formatRelativeDate,
  isFileSizeValid,
  isValidImageFile,
} from "../../utils/fonctions";
import { SquarePen } from "lucide-react";
import { useRef, useState } from "react";
import FormGlobale from "./Forms/FormGlobale";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../../Loading/Loading";
type TypeProps = {
  restaurant: TypeDoc;
  setRestaurant: React.Dispatch<React.SetStateAction<TypeDoc | null>>;
};
const DataGlobale = ({ restaurant, setRestaurant }: TypeProps) => {
  const [update, setUpdate] = useState(false);
  const [imageProfil, setImageProfil] = useState<string | undefined>(
    restaurant ? restaurant.profil : ""
  );
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChangeProfil = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      //check mimi et extension
      if (!isValidImageFile(file)) {
        return toast.error(
          "Image invalide. Seuls les formats JPG, JPEG et PNG sont autorisés."
        );
      }

      //checkk taille
      if (!isFileSizeValid(file)) {
        return toast.error("L’image est trop lourde. Taille maximale : 5 Mo.");
      }
      setUploading(true);
      await handleUpdateProfil(file);
      setUploading(false);
      // setImageProfil(imageURL);
    }
    // Mise à jour de l'aperçu
    // Ici tu peux aussi envoyer le fichier à ton backend si besoin
  };

  const handleUpdateProfil = async (img: File) => {
    const data = new FormData();
    data.append("url", restaurant?.profil ? restaurant?.profil : "");
    data.append("profil", img);
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/update-profil/${
          restaurant._id
        }`,
        withCredentials: true,
        data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res) {
        if (res.data) {
          setImageProfil(res.data.url);
          return toast.success(res.data.succes);
        }
      }
    } catch (error) {
      console.log(error);
      return toast.error(
        "Une erreur est survenue lors de la mise jour du profil"
      );
    }
  };
  return (
    <StyledDataGlobale>
      <div className="info-rest">
        <p className="incript">
          {formatRelativeDate(restaurant.createdAt, "Inscrit : ")}
        </p>
        <div className="profil-img">
          {uploading && <Loading />}
          {!uploading && (
            <img
              // src={restaurant.profil}
              src={imageProfil}
              alt="image-profil"
              onClick={() => handleChangeProfil()}
            />
          )}
          {!uploading && (
            <input
              type="file"
              className="input-file"
              ref={inputRef}
              accept=".jpeg,.jpg,.png"
              onChange={handleFileChange}
            />
          )}
        </div>
        <SquarePen className="icon-update" onClick={() => setUpdate(!update)} />
        {update ? (
          <FormGlobale
            name={restaurant.pseudo}
            saveur={restaurant.saveur}
            villebase={restaurant.ville}
            description={restaurant.description}
            setUpdate={setUpdate}
            id={restaurant._id}
            setRestaurant={setRestaurant}
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
      color: ${COLORS.green};
    }
    .data-text-glob {
    }
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 0px;
    .info-rest {
      .profil-img {
        img {
          width: 80%;
          border-radius: 20px;
        }
      }
    }
  }
`;
