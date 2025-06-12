import React, { useState } from "react";
import styled from "styled-components";
import Loading from "../Loading/Loading";
import COLORS from "../../Styles/Styles";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import axios from "axios";
type TypeProps = {
  setDisplayNumero: React.Dispatch<React.SetStateAction<string | null>>;
  displayNumero: string | null;
  setCodeSms: React.Dispatch<React.SetStateAction<string>>;
  codeSms: string;
};
const CheckNumero = ({
  setDisplayNumero,
  displayNumero,
  setCodeSms,
  codeSms,
}: TypeProps) => {
  const [changeField, setChangeField] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);
  const [sendedCode, setSendedCode] = useState(false);
  const [numero, setNumero] = useState("");
  const [error, setError] = useState("");

  const handleValidation = () => {
    if (!formatAndValidatePhone(numero)) {
      setError(
        "Numéro invalide. Veuillez entrer un numéro mobile valide (France, DOM)."
      );
      const timer = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setError("");
      const formatNum = formatAndValidatePhone(numero);
      setDisplayNumero(formatNum);
      setChangeField(true);
    }
  };

  //format numero
  const formatAndValidatePhone = (numero: string): string | null => {
    const clean = numero.replace(/[\s\-().]/g, "");

    if (/^0690\d{6}$/.test(clean)) return "+590" + clean.slice(1); // Guadeloupe
    if (/^0696\d{6}$/.test(clean)) return "+596" + clean.slice(1); // Martinique
    if (/^0694\d{6}$/.test(clean)) return "+594" + clean.slice(1); // Guyane
    if (/^0639\d{6}$/.test(clean)) return "+262" + clean.slice(1); // Mayotte

    if (/^0[67]\d{8}$/.test(clean)) return "+33" + clean.slice(1); // France

    if (/^\+33[67]\d{8}$/.test(clean)) return clean;
    if (/^\+590690\d{6}$/.test(clean)) return clean;
    if (/^\+596696\d{6}$/.test(clean)) return clean;
    if (/^\+594694\d{6}$/.test(clean)) return clean;
    if (/^\+262639\d{6}$/.test(clean)) return clean;

    return null; // Numéro invalide
  };

  //send code
  const handleSendCode = async () => {
    setSendingCode(true);
    const uuid = uuidv4();

    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/create-f`,
        withCredentials: true,
        headers: {
          "x-client-uuid": uuid,
        },
        data: {
          numero,
        },
      });
      setSendedCode(true);
      setSendingCode(false);
      if (res.data) {
        return toast.success(res.data.message);
      }
    } catch (error: any) {
      setSendingCode(false);
      console.log(error);
      if (error.response.data.error) {
        setSendedCode(true);
        return toast.info(error.response.data.error);
      }
      return toast.error("Une erreur est survenue");
    }
  };

  const backNumero = () => {
    setDisplayNumero("");
    setNumero("");
    setChangeField(false);
  };
  return (
    <StyledCheckNumero>
      <label htmlFor="num">Entrez le numéro de téléphone** :</label>
      {changeField ? (
        <div className="send-code">
          <p>Pour rester actif. Un code est envoyé au {displayNumero}</p>
          {sendingCode && <Loading />}
          {sendedCode && (
            <input
              type="text"
              placeholder="Code reçu"
              value={codeSms ? codeSms : ""}
              onChange={(e) => setCodeSms(e.target.value)}
            />
          )}
          {!sendingCode && !sendedCode && (
            <>
              <button onClick={() => handleSendCode()}>Envoyer le code</button>
              <span onClick={() => backNumero()}>Retour</span>
            </>
          )}
        </div>
      ) : (
        <input
          type="tel"
          placeholder="Avec indicatif téléphonique"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      )}
      {!changeField && <button onClick={handleValidation}>Vérifier</button>}
      <span>
        Numéro accepté : France(+33), Guyane(+594), Guadeloupe(+590),
        Martinique(+596), Mayotte(+262). Numéro non public
      </span>
      {error && <p style={{ color: "red", fontSize: "0.7em" }}>{error}</p>}
    </StyledCheckNumero>
  );
};

export default CheckNumero;
const StyledCheckNumero = styled.div`
  width: 100%;
  margin-top: 10px;
  background: ${COLORS.main};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;
  button {
    margin-top: 5px;
    width: 50%;
    outline: none;
    border: none;
    background: ${COLORS.green};
    border-radius: 5px;
    cursor: pointer;
  }
  /* select {
        padding: 5px;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      } */
  input {
    margin-top: 0px;
    font-size: 1em;
  }
  label {
    font-size: 0.8em;
    color: white;
  }
  span {
    font-size: 0.7em;
    color: ${COLORS.yellow};
  }
  .send-code {
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    p {
      font-size: 0.8em;
      text-decoration: underline;
      color: white;
    }
    span {
      cursor: pointer;
      margin-top: 15px;
      text-decoration: underline;
    }
  }
`;
