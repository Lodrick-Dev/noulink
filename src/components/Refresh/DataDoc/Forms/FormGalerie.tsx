import styled from "styled-components";
import { CircleX, SquarePlus } from "lucide-react";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import COLORS from "../../../../Styles/Styles";
import Loading from "../../../utils/Loading";
import { isFileSizeValid, isValidImageFile } from "../../../utils/fonctions";
type TypeProps = {
  galerie: string[];
  id: string;
};
const FormGalerie = ({ galerie, id }: TypeProps) => {
  const [updating, setUpdating] = useState(false);
  const [galerieLocal, setGalerieLocal] = useState<string[]>(
    galerie.length > 0 ? galerie : []
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChargeImg = () => {
    if (galerieLocal.length < 3) {
      inputRef.current?.click();
    } else {
      return toast.error("Max 3 images");
    }
  };

  const handleCheckImg = async (event: React.ChangeEvent<HTMLInputElement>) => {
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
      setUpdating(true);
      await handleUpdateGalerie(file);
      setUpdating(false);
    }
  };

  const handleUpdateGalerie = async (img: File) => {
    const data = new FormData();
    data.append("galerie", img);
    try {
      const res = await axios({
        method: "post",
        url: `${
          import.meta.env.VITE_APP_API
        }restaurant/update-galerie/add/${id}`,
        withCredentials: true,
        data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res) {
        if (res.data) {
          setGalerieLocal(res.data.galerie);
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

  //delete
  const deleteImg = async (url: string) => {
    setUpdating(true);
    try {
      const res = await axios({
        method: "post",
        url: `${
          import.meta.env.VITE_APP_API
        }restaurant/update-galerie/delete/${id}`,
        data: { url },
        withCredentials: true,
      });
      if (res) {
        if (res.data.succes) {
          setGalerieLocal(res.data.galerie);
          setUpdating(false);
          return toast.success(res.data.succes);
          //toast.error(res.data.succes);
        }
      }
    } catch (error) {
      setUpdating(false);
      console.log(error);
      return toast.error("Une erreur est survenue");
    }
  };
  return (
    <StyledFormGalerie>
      <div className="galerie-box">
        <span>Galerie (max 3 images) </span>
        {Array.isArray(galerieLocal) &&
          galerieLocal.map((el, i) => (
            <div className="imgs-galeries" key={i}>
              {updating && (
                <div className="to-loading">
                  <Loading />
                </div>
              )}
              <CircleX
                className="icon-delete"
                size={25}
                onClick={() => !updating && deleteImg(el)}
              />
              <img src={el} alt={`img-galerie-${i}`} />
            </div>
          ))}
        {galerieLocal && galerieLocal.length < 3 && (
          <div className="box-i-add">
            <input
              type="file"
              className="input-file"
              ref={inputRef}
              accept=".jpeg,.jpg,.png"
              onChange={handleCheckImg}
            />
            {!updating && (
              <SquarePlus
                className="icon-add-img"
                size={40}
                onClick={handleChargeImg}
              />
            )}
          </div>
        )}
      </div>
    </StyledFormGalerie>
  );
};

export default FormGalerie;
const StyledFormGalerie = styled.div`
  background: ${COLORS.main};
  margin: 10px 0px;
  border-radius: 10px;
  width: 55%;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  .galerie-box {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    span {
      display: block;
      width: 100%;
      text-align: center;
      text-align: center;
      color: ${COLORS.yellow};
      font-size: 1.2em;
    }
    .imgs-galeries {
      display: flex;
      justify-content: center;
      max-width: 30%;
      margin: 10px;
      position: relative;
      .to-loading {
        position: absolute;
        top: 50%;
        padding: 0px;
        right: 50%;
        transform: translate(50%, -50%);
        background: #191919ba;
        backdrop-filter: blur(5px);
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 21;
        border-radius: 10px;
      }
      .icon-delete {
        position: absolute;
        right: 0px;
        background: ${COLORS.grey};
        border-radius: 50%;
        padding: 5px;
        z-index: 20;
        cursor: pointer;
        color: ${COLORS.red};
      }
      img {
        box-shadow: 3px 3px 5px #0f0f0f82;
        display: block;
        width: 100%;
        border-radius: 10px;
        margin: 10px;
      }
    }
    .box-i-add {
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${COLORS.grey};
      border-radius: 10px;
      input {
        display: none;
      }
      .icon-add-img {
        filter: 2px 2px 2px red;
        cursor: pointer;
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.8));
      }
    }
  }
  @media screen and (max-width: 450px) {
    width: 80%;
    .imgs-galeries {
      margin: 5px;
      min-width: 40%;
      .icon-delete {
        padding: 1px !important;
      }
    }
  }
`;
