import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { User } from "lucide-react";
import { useState } from "react";
import { LoadingHorizontal } from "../Loading/LoadingHorizontal";

export const FormInfoCustomer = () => {
  const [sending, setSending] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [city, setCity] = useState("");
  const [adresse, setAdresse] = useState("");

  const saveInfo = async () => {
    setSending(true);
    try {
      console.log(
        "mon pseudo : ",
        pseudo + " ma ville : " + city + " mon adresse : " + adresse,
      );
      setPseudo("");
      setCity("");
      setAdresse("");
      console.log(
        "mon pseudo : ",
        pseudo + " ma ville : " + city + " mon adresse : " + adresse,
      );
    } catch (error) {
    } finally {
      setSending(false);
    }
  };
  return (
    <StyledFormInfoCustomer>
      <div className="sous-box">
        <h2>
          <User size={20} />
          Mon profil
        </h2>
        <strong>Pour la livraison</strong>
        <div className="field">
          <label>Pseudo</label>
          <input
            value={pseudo ? pseudo : ""}
            placeholder="Nom prénom"
            onChange={(e) => setPseudo(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Ville</label>
          <input
            placeholder="Ville"
            value={city ? city : ""}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Adresse</label>
          <input
            placeholder="Adresse"
            value={adresse ? adresse : ""}
            onChange={(e) => setAdresse(e.target.value)}
          />
        </div>
        {sending ? (
          <LoadingHorizontal />
        ) : (
          <button onClick={saveInfo}>Enregistrer</button>
        )}
      </div>
    </StyledFormInfoCustomer>
  );
};
const StyledFormInfoCustomer = styled.div`
  width: 30%;
  .sous-box {
    background: ${COLORS.white};
    border-radius: 18px;
    padding: 25px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    h2 {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 25px;
      color: ${COLORS.main};
    }
    strong {
      display: block;
      text-align: center;
    }
    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      label {
        font-weight: 600;
        margin-bottom: 8px;
        color: ${COLORS.black};
      }

      input {
        border: 1px solid ${COLORS.grey};
        border-radius: 10px;
        padding: 14px;
        outline: none;
        font-size: 15px;

        &:focus {
          border-color: ${COLORS.second};
        }
      }
    }
    button {
      border: none;
      cursor: pointer;
      background: ${COLORS.green};
      color: white;
      padding: 14px 24px;
      border-radius: 10px;
      font-weight: bold;

      &:hover {
        opacity: 0.9;
      }

      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 0px auto;
  }
`;
