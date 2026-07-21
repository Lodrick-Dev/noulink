import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Dynamic } from "../../Context/ContextDynamique";
import { useAccount } from "../../Context/AccountContext";
import { LoadingHorizontal } from "../Loading/LoadingHorizontal";

const EmailConf = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { token } = Dynamic();
  const { getAccount } = useAccount();
  const createSeller = async () => {
    if (!token) {
      toast.error("Token absent");
      return;
    }
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/create`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data) {
        toast.success(res.data.message);
        getAccount();
        setLoading(true);
        return true;
      }
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la validation de l'email");
    }
  };

  useEffect(() => {
    if (token && location.pathname === "/conf-email") {
      createSeller();
    }
  }, [token, location.pathname]);
  return (
    <StyledEmailConfirmer>
      <h1>Confirmation en cours</h1>
      {!loading ? (
        <LoadingHorizontal />
      ) : (
        <button onClick={() => nav("/auth")}>Connectez-vous</button>
      )}
    </StyledEmailConfirmer>
  );
};

export default EmailConf;
const StyledEmailConfirmer = styled.section`
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

  @media screen and (max-width: 450px) {
    padding-top: 20px;
    width: 100%;
    button {
      width: 50%;
    }
  }
`;
