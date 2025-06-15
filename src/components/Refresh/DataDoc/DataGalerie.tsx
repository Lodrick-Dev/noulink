import styled from "styled-components";
import COLORS from "../../../Styles/Styles";
import { CircleX, SquarePlus } from "lucide-react";
import { useState } from "react";

const DataGalerie = ({ galerie }: { galerie: string[] }) => {
  const [galerieLocal, setGalerieLocal] = useState<string[]>(
    galerie.length > 0 ? galerie : []
  );
  const deleteEl = (url: string) => {
    setGalerieLocal((prev) => prev.filter((m) => m !== url));
  };
  return (
    <StyledDataGalerie>
      <div className="galerie-box">
        <span>Galerie (max 3 images)</span>
        {Array.isArray(galerieLocal) &&
          galerieLocal.map((el, i) => (
            <div className="imgs-galeries" key={i}>
              <CircleX
                className="icon-delete"
                size={25}
                onClick={() => deleteEl(el)}
              />
              <img src={el} alt={`img-galerie-${i}`} />
            </div>
          ))}
        {galerieLocal && galerieLocal.length < 3 && (
          <div className="box-i-add">
            <SquarePlus className="icon-add-img" size={40} />
          </div>
        )}
      </div>
    </StyledDataGalerie>
  );
};

export default DataGalerie;
const StyledDataGalerie = styled.div`
  background: ${COLORS.main};
  margin: 10px;
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
      .icon-delete {
        position: absolute;
        right: 0px;
        background: ${COLORS.grey};
        border-radius: 50%;
        padding: 5px;
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
      .icon-add-img {
        filter: 2px 2px 2px red;
        cursor: pointer;
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.8));
      }
    }
  }
`;
