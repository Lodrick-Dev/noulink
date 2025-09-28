import { useEffect, useRef, useState } from "react";
import Loading from "../../../utils/Loading";
import { isFileSizeValid, isValidImageFile } from "../../../utils/fonctions";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import COLORS from "../../../../Styles/Styles";
import { Dynamic } from "../../../../Context/ContextDynamique";

const FormProfil = () => {
  const { token } = Dynamic();
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
    } catch (error: any) {
      console.log(error);
      if (error.response?.data?.message) {
        return toast.error(error.response?.data?.message);
      }
      return toast.error(
        "Une erreur est survenue lors de la mise jour du profil"
      );
    }
  };

  const testProtectedRoute = async () => {
    console.log("Test route protégée avec le token :", token);

    try {
      const res = await axios.get("http://localhost:5009/test-protected", {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ ton access_token Supabase
        },
      });
      console.log("Réponse API :", res.data);
    } catch (error: any) {
      console.error("Erreur API :", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Erreur lors de l'appel API"
      );
    }
  };
  useEffect(() => {
    setTimeout(() => {
      console.log("Token dans FormProfil :", token);

      if (token) {
        testProtectedRoute();
      }
    }, 5000);
  }, [token]);
  return (
    <StyledFormProfil className="profil-img">
      {uploading && <Loading />}
      {!uploading && (
        <img
          // src={restaurant.profil}
          src={imageProfil ? imageProfil : "/assets/logo.png"}
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
      <span onClick={() => handleChangeProfil()}>profil</span>
    </StyledFormProfil>
  );
};

export default FormProfil;
const StyledFormProfil = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COLORS.second};
  border-radius: 10px;
  margin: 10px 0px;
  min-height: 200px;
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
  span {
    border-bottom: solid 1px ${COLORS.white};
    cursor: pointer;
    width: 100%;
    opacity: 0.5;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;
