import styled from "styled-components";
import MainHome from "./MainHome/MainHome";
import ListesHome from "../components/ListesHome/ListesHome";
export type TypeProps = {
  setPopRouter: React.Dispatch<React.SetStateAction<boolean>>;
};
const Home = ({ setPopRouter }: TypeProps) => {
  return (
    <StyledHome>
      <MainHome setPopRouter={setPopRouter} />
      <ListesHome />
    </StyledHome>
  );
};

export default Home;
const StyledHome = styled.div``;
