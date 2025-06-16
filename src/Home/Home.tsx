import styled from "styled-components";
import MainHome from "./MainHome/MainHome";
import ListesHome from "../components/ListesHome/ListesHome";
import { useState } from "react";
const Home = () => {
  const [saveur, setSaveur] = useState<string>("");
  return (
    <StyledHome>
      <MainHome setSaveur={setSaveur} saveur={saveur} />
      <ListesHome saveur={saveur} />
    </StyledHome>
  );
};

export default Home;
const StyledHome = styled.div``;
