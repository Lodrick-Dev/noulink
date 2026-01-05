import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { capitalizeFirstLetter } from "../utils/fonctions";
type TypePropsOne = {
  profil: string | undefined;
  name: string | undefined;
  saveur: string | undefined;
  localisation?: string | undefined;
  id: string;
  actionClick: (id: string) => void;
};
const One = ({ profil, name, localisation, saveur, id, actionClick }: TypePropsOne) => {
  return (
    <StyledOne onClick={() => actionClick(id)}>
      <div className="img">
      <img src={profil ? profil : ""} alt={"profil-img"} />
      </div>
      <div className="box-content">
      {name && <strong>{name}</strong>}
      {saveur && <span className="the-span">Saveur : { capitalizeFirstLetter(saveur)}</span>}
      {localisation && <span> 📍 {capitalizeFirstLetter(localisation)}</span>}
      </div>
    </StyledOne>
  );
};

export default One;
const StyledOne = styled.div`
  width: 20%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  margin: 10px;
  /* background: yellow; */
  border: solid 2px ${COLORS.grey};
  box-shadow: 1px 1px 1px rgba(46, 46, 46, 0.119);
  .img{
    margin: 0px auto;
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      align-self: center;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background: ${COLORS.black};
    }
  }
  .box-content{
    width: 100%;
    /* background: green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 0px;
    strong {
      text-align: center;
      border-top: solid 1px ${COLORS.main};
    }
    .the-span {
      display: block;
      margin: 10px auto;
      text-align: center;
      border-radius: 5px;
      font-size: 0.8em;
      width: 100%;
      background: ${COLORS.yellow};
    }
  }
  @media screen and (max-width: 450px) {
    /* min-width: 45%; */
    max-height: 20vh;
    width: 95%;
    margin: 5px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: solid 3px ${COLORS.grey};
    .img{
      height: 100%;
      img{
        max-width: 100%;
        border-radius: 5px;
    }
    }
    strong {
      width: 100%;
      font-size: 0.9em;
    }
    .the-span {
      border-radius: 0px;
      width: 100%;
      /* width: 80%; */
      font-size: 0.7em;
    }
  }
`;
