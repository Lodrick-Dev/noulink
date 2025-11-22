import styled from "styled-components";
import COLORS from "../../Styles/Styles";
type TypePropsOne = {
  profil: string | undefined;
  name: string | undefined;
  saveur: string | undefined;
  id: string;
  actionClick: (id: string) => void;
};
const One = ({ profil, name, saveur, id, actionClick }: TypePropsOne) => {
  return (
    <StyledOne onClick={() => actionClick(id)}>
      <img src={profil ? profil : ""} alt={"profil-img"} />
      {name && <strong>{name}</strong>}
      {saveur && <span className="the-span">Saveur : {saveur}</span>}
    </StyledOne>
  );
};

export default One;
const StyledOne = styled.div`
  width: 15%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 10px;
  margin: 10px;
  border: solid 1px ${COLORS.grey};
  box-shadow: 1px 1px 1px rgba(46, 46, 46, 0.119);
  img {
    margin: 0px auto;
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: block;
    background: ${COLORS.black};
  }
  strong {
    text-align: center;
    border-top: solid 1px ${COLORS.main};
  }
  .the-span {
    display: block;
    margin: 10px auto;
    text-align: center;
    border-radius: 7px;
    font-size: 0.8em;
    width: 90%;
    background: ${COLORS.yellow};
  }
  @media screen and (max-width: 450px) {
    min-width: 45%;
    max-height: 25vh;
    margin: 5px;
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
