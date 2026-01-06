import styled from "styled-components";
import COLORS from "../../Styles/Styles";
// import BarreSearch from "../../components/BarreSearch/BarreSearch";
import Loading from "../../components/Loading/Loading";
import { Dynamic } from "../../Context/ContextDynamique";
import SaveurSelector from "./SaveurSelector/SaveurSelector";
export type TypePropsHome = {
  setSaveur: React.Dispatch<React.SetStateAction<string>>;
  saveur: string;
};
const MainHome = ({ setSaveur, saveur }: TypePropsHome) => {
  const { setVille, ville, deleteCityCookie } = Dynamic();
  const cancelPositon = () => {
    setVille("");
    deleteCityCookie();
  };
  return (
    <StyledMainHome>
      <h1>Link up to favorite food</h1>
      <SaveurSelector saveur={saveur} setSaveur={setSaveur} />
      {/* <BarreSearch /> */}
      <div className="position">
        <span onClick={() => cancelPositon()} className="localisation">
          Ville actuelle : {ville ? `${ville} ✅` : <Loading />}{" "}
        </span>
        <span>Saveurs de : {saveur ? `${saveur} ✅` : "Tous"} </span>
      </div>
    </StyledMainHome>
  );
};

export default MainHome;
const StyledMainHome = styled.main`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.second};
  flex-direction: column;
  h1 {
    color: ${COLORS.white};
    font-size: 3.7em;
    margin-bottom: 15px;
    letter-spacing: 0.2em;
  }
  .position {
    width: 100%;
    margin-top: 20px;
    .localisation {
      display: block;
      text-decoration: underline;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    span {
      font-size: 0.8em;
      display: flex;
      align-items: center;
      margin: 5px;
      display: flex;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 10px;
    h1 {
      width: 100%;
      text-align: center;
      font-size: 2em;
    }
  }
`;
