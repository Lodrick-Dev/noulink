import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Dynamic } from "../../Context/ContextDynamique";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const EmailConfCostumer = () => {
  const location = useLocation();
  const { userAuth } = Dynamic();
  const nav = useNavigate();
  useEffect(() => {
    console.log(userAuth);
    console.log(location);
  }, []);
  return (
    <StyledEmailConfCostumer>
      <h1>Email confirmer !</h1>
      <button onClick={() => nav("/auth")}>Connectez-vous</button>
    </StyledEmailConfCostumer>
  );
};

const StyledEmailConfCostumer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  width: 60%;
  h1 {
    font-size: 2em;
    color: ${COLORS.green};
    margin-bottom: 10px;
    text-align: center;
  }
  button {
    width: 30%;
    margin: 10px auto;
    padding: 7px 20px;
    border: none;
    border-radius: 10px;
    font-size: 1em;
    cursor: pointer;
    background: ${COLORS.yellow};
  }
`;
