import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { ImagePlus, LoaderCircle, Trash2, Images } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { isFileSizeValid, isValidImageFile } from "../utils/fonctions";
import { toast } from "react-toastify";
import axios from "axios";
import { Dynamic } from "../../Context/ContextDynamique";

export const Admin = () => {
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState<string[]>([]);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState("");
  const { token, userAuth } = Dynamic();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChargeImg = () => {
    inputRef.current?.click();
  };
  const handleCheckImg = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!isValidImageFile(file)) {
      return toast.error(
        "Image invalide. Seuls les formats JPG, JPEG et PNG sont autorisés.",
      );
    }
    if (!isFileSizeValid(file)) {
      return toast.error("L’image est trop lourde. Taille maximale : 5 Mo.");
    }
    setUpdating(true);
    const data = new FormData();
    data.append("feedback", file);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API}feedback/update-galerie/add/${userAuth?.id}`,
        data,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setFeedback(res.data.feedback.galerie);
      toast.success(res.data.success);
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Une erreur est survenue.");
    } finally {
      setUpdating(false);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleDeleteGalerie = async (url: string) => {
    setDeleting(url);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API}feedback/update-galerie/delete/${userAuth?.id}`,
        { url },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setFeedback(res.data.galerie);
      toast.success(res.data.success);
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Une erreur est survenue.");
    } finally {
      setDeleting("");
    }
  };
  const getAll = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_API}feedback/all`,
      );
      if (res.data.message) {
        setMessage(res.data.message);
      }
      if (res.data.galerie) {
        setFeedback(res.data.galerie);
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Impossible de récupérer les feedbacks.",
      );
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <StyledAdmin>
      <div className="header">
        <Images size={28} />

        <div>
          <h2>Gestion des feedbacks</h2>
          <p>Ajoutez ou supprimez les images affichées.</p>
        </div>
      </div>

      <button
        className="upload-btn"
        onClick={handleChargeImg}
        disabled={updating}
      >
        {updating ? <LoaderCircle className="spin" /> : <ImagePlus />}

        <span>{updating ? "Envoi en cours..." : "Ajouter une image"}</span>
      </button>
      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleCheckImg}
      />

      <div className="content">
        {message && feedback.length === 0 && (
          <div className="empty">{message}</div>
        )}
        {feedback.length > 0 && <span>{feedback.length} avis</span>}
        <div className="gallery">
          {feedback.map((img) => (
            <div className="card" key={img}>
              <img src={img} alt="feedback" />

              <button
                className="delete"
                onClick={() => handleDeleteGalerie(img)}
                disabled={deleting === img}
              >
                {deleting === img ? (
                  <LoaderCircle className="spin" size={18} />
                ) : (
                  <Trash2 size={18} />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </StyledAdmin>
  );
};

const StyledAdmin = styled.div`
  margin: 20px auto;
  width: 50%;
  height: 90svh;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background: ${COLORS.red};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: aliceblue;
  .header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;

    h2 {
      margin: 0;
      color: ${COLORS.main};
    }

    p {
      margin-top: 5px;
      color: #ffffff;
      font-size: 14px;
    }
  }

  .upload-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 22px;
    border: none;
    border-radius: 12px;
    background: ${COLORS.green};
    color: white;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      opacity: 0.9;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }
  .content {
    margin-top: 30px;
  }

  .empty {
    width: 100%;
    padding: 40px;
    background: white;
    border-radius: 14px;
    color: grey;
    text-align: center;
  }
  .gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 5px;
    border-radius: 10px;
    width: 100%;
    height: 350px;
    overflow-y: scroll;
  }
  .card {
    position: relative;
    height: 220px;
    border-radius: 16px;
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    width: 80%;
    img {
      width: 100%;
      border-radius: 10px;
    }

    .delete {
      position: absolute;

      top: 10px;
      right: 10px;

      width: 42px;
      height: 42px;

      border: none;
      border-radius: 50%;

      background: white;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      transition: 0.2s;

      &:hover {
        background: #ffeaea;
        color: red;
      }
    }
  }

  .spin {
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;
