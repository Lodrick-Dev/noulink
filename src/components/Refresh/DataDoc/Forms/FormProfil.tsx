import { useRef, useState } from "react";
import Loading from "../../../utils/Loading";
import { isFileSizeValid, isValidImageFile } from "../../../utils/fonctions";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import COLORS from "../../../../Styles/Styles";

const FormProfil = () => {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageProfil, setImageProfil] = useState<string | undefined>();
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
    // data.append("url", restaurant?.profil ? restaurant?.profil : "");
    data.append("profil", img);
    try {
      const res = await axios({
        method: "post",
        url: `${
          import.meta.env.VITE_APP_API
        }restaurant/update-profil/${"restaurant._id"}`,
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
    <StyledFormProfil className="profil-img">
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
    </StyledFormProfil>
  );
};

export default FormProfil;
const StyledFormProfil = styled.div`
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
`;
