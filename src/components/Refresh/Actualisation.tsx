import { useState } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { toast } from "react-toastify";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Loading from "../Loading/Loading";
type TypeProps = {
  setActualised: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
};
const Actualisation = ({ setActualised, setId }: TypeProps) => {
  const [displayNumero, setDisplayNumero] = useState<string | null>("");
  const [codeSms, setCodeSms] = useState("");
  const [numero, setNumero] = useState("");
  const [error, setError] = useState("");
  const [changeField, setChangeField] = useState(false);
  const [loading, setLoading] = useState(false);

  //fonctions
  const handleValidation = () => {
    if (!numero) {
      toast.error("Un numéro est obligatoire");
      return null;
    }

    const formatNum = formatAndValidatePhone(numero);

    if (!formatNum) {
      setError(
        "Numéro invalide. Veuillez entrer un numéro mobile valide (France, DOM)."
      );
      setTimeout(() => setError(""), 3000);
      return null;
    }

    setError("");
    return formatNum;
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

  //handleCheckIfNumExist
  const handleCheckIfNumExist = async () => {
    const checkedIfAutorize = handleValidation();
    if (!checkedIfAutorize) {
      return; // Stoppe la fonction si le numéro est invalide
    }
    const t = formatAndValidatePhone(numero);

    setDisplayNumero(t);
    const uuid = uuidv4();
    if (!numero) return;
    setLoading(true);

    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/check-numero`,
        withCredentials: true,
        headers: {
          "x-client-uuid": uuid,
        },
        data: {
          numero: t,
        },
      });
      if (res.data) {
        setLoading(false);
        setChangeField(true);
        if (res.data.message) {
          return toast.success(res.data.message);
        }
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setChangeField(false);
      if (error.response.data.error) {
        return toast.error(error.response.data.error);
      } else {
        return toast.error("Une erreur est survenue");
      }
    }
  };

  //handleAssociatwithCode
  const handleAssociatWithCode = async () => {
    // handleValidation();
    if (!displayNumero || !codeSms) {
      return toast.error("Un numéro est obligatoire");
    }
    setLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/check-numero-code`,
        withCredentials: true,
        data: {
          numero: displayNumero,
          checkcode: codeSms,
        },
      });
      if (res.data) {
        setLoading(false);
        setChangeField(true);
        if (res.data.id) {
          setId(res.data.id);
          setActualised(true);
          //   return toast.success(res.data.message);
        }
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setChangeField(false);
      if (error.response.data.error) {
        return toast.error(error.response.data.error);
      }
      return toast.error("Une erreur est survenue");
    }
  };
  return (
    <StyledActualisation>
      {changeField ? (
        <label htmlFor="code">Entrez le code associé à {displayNumero}*</label>
      ) : (
        <label htmlFor="num">Vérifiez votre numéro de téléphone*</label>
      )}
      {changeField ? (
        <input
          type="text"
          id="code"
          placeholder="Code"
          value={codeSms}
          onChange={(e) => setCodeSms(e.target.value)}
        />
      ) : (
        <input
          type="tel"
          id="num"
          placeholder="Avec indicatif téléphonique"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      )}
      {error && <span style={{ color: "red" }}>{error}</span>}
      <span>
        Numéro accepté : France(+33), Guyane(+594), Guadeloupe(+590),
        Martinique(+596), Mayotte(+262)
      </span>
      {loading && <Loading />}
      {changeField ? (
        <button onClick={() => handleAssociatWithCode()}>
          Vérifier le code
        </button>
      ) : (
        <button onClick={() => handleCheckIfNumExist()}>Vérifier </button>
      )}
    </StyledActualisation>
  );
};

export default Actualisation;
const StyledActualisation = styled.div`
  background: ${COLORS.main};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0px auto;
  width: 90%;
  label {
    font-size: 0.8em;
    color: ${COLORS.white};
  }
  input {
    width: 80%;
    padding: 5px;
    border-radius: 5px;
    font-size: 1.1em;
    border: none;
    outline: none;
    margin: 5px auto;
  }
  span {
    font-size: 0.7em;
    color: ${COLORS.yellow};
  }
  button {
    width: 35%;
    margin-top: 10px;
    padding: 5px 20px;
    border: solid 2px ${COLORS.yellow};
    border-radius: 5px;
    outline: none;
    background: ${COLORS.green};
    cursor: pointer;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    input {
      font-size: 1em;
    }
    button {
      width: 50%;
    }
  }
`;
