import styled from "styled-components";
import Register from "../../components/Register/Register";
import COLORS from "../../Styles/Styles";
import { useState } from "react";
import Login from "../../components/Register/Login";
import Intro from "../../Home/LandingPage/Intro";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <StyledAuth>
      <div className="box-i">
        <Intro />
      </div>
      {isLogin ? <Login /> : <Register />}
      <span className="what-action" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "S'inscrire" : "Se connecter"}
      </span>
    </StyledAuth>
  );
};

export default Auth;
const StyledAuth = styled.section`
  background: ${COLORS.second};
  width: 70%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  .box-i {
    width: 100%;
    margin-bottom: 50px;
  }
  .what-action {
    cursor: pointer;
    text-decoration: underline;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;
