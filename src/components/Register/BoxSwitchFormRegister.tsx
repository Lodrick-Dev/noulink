import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import Register from "./Register";
import { RegisterCostumer } from "./RegisterCostumer";

export const BoxSwitchFormRegister = ({
  setIsLogin,
}: {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchParams] = useSearchParams();
  const [valueParams, setValueParams] = useState<string | null>("");
  const nav = useNavigate();
  const returnBack = () => {
    nav("/auth");
    setIsLogin(true);
  };

  const formDisplay = () => {
    if (valueParams === "seller") return <Register />;
    if (valueParams === "costumer") return <RegisterCostumer />;
  };
  useEffect(() => {
    let x = searchParams.get("type");
    if (x) {
      setValueParams(x);
    }
  }, [searchParams]);
  return (
    <StyledBoxSwitchFormRegister>
      <ArrowLeft size={35} className="icon" onClick={() => returnBack()} />
      {valueParams && formDisplay()}
      {valueParams === null ||
        (valueParams === "" && (
          <div className="box-btn">
            <h2>Vous etes : </h2>
            <div className="btns">
              <button onClick={() => nav("/auth?type=seller")}>Vendeur</button>
              <button onClick={() => nav("/auth?type=costumer")}>Client</button>
            </div>
          </div>
        ))}
    </StyledBoxSwitchFormRegister>
  );
};
const StyledBoxSwitchFormRegister = styled.div`
  background: white;
  width: 50%;
  margin: 10px auto;
  padding: 20px;
  border-radius: 10px;
  .icon {
    cursor: pointer;
  }
  .box-btn {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    .btns {
      display: flex;
      button {
        width: 50%;
        margin: 10px;
        padding: 5px 10px;
        font-size: 1.1em;
        outline: none;
        border: none;
        border-radius: 10px;
        background: ${COLORS.green};
        color: aliceblue;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
