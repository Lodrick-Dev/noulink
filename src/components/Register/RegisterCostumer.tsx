import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";

export const RegisterCostumer = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <StyledRegisterCostumer>
      <h1>Inscription</h1>
      <form>
        <div className="input email">
          <input type="email" placeholder="Email" />
          <span className="em">
            Utilisez une adresse email valide. Vous recevrez un email de
            confirmation.
          </span>
        </div>
        <div className="input pass">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Mot de passe"
          />
          {!showPass ? (
            <EyeOff
              className="ii"
              size={30}
              onClick={() => setShowPass((prev) => !prev)}
            />
          ) : (
            <Eye
              size={30}
              className="ii"
              onClick={() => setShowPass((prev) => !prev)}
            />
          )}
        </div>
        <div className="input pass">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Confirme mot de passe"
          />
        </div>
        <input type="submit" value="S'inscrire" />
      </form>
    </StyledRegisterCostumer>
  );
};

const StyledRegisterCostumer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0px;
  h1 {
    color: ${COLORS.green};
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      width: 70%;
      margin: 5px 0px;
    }
    input {
      padding: 5px;
      outline: none;
      font-size: 1.1em;
    }
    .email {
      .em {
        font-size: 0.7em;
        color: ${COLORS.green};
      }
    }
    .pass {
      .ii {
        margin-top: 5px;
      }
    }
    > input {
      margin-top: 15px;
      padding: 10px 25px;
      width: 55%;
      background: ${COLORS.green};
      border: none;
      outline: none;
      border-radius: 10px;
      color: aliceblue;
    }
  }
  @media screen and (max-width: 450px) {
    form {
      div {
        width: 95%;
      }
    }
  }
`;
