import styled from "styled-components";
import MainHome from "./MainHome/MainHome";
import ListesHome from "../components/ListesHome/ListesHome";
export type TypeProps = {
  ville: string;
  setVille: React.Dispatch<React.SetStateAction<string>>;
  setPopRouter: React.Dispatch<React.SetStateAction<boolean>>;
};
const Home = ({ ville, setVille, setPopRouter }: TypeProps) => {
  return (
    <StyledHome>
      <MainHome ville={ville} setVille={setVille} setPopRouter={setPopRouter} />
      <ListesHome />
    </StyledHome>
  );
};

export default Home;
const StyledHome = styled.div``;
