import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Dynamic } from "../../Context/ContextDynamique";

const EmailConf = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { token } = Dynamic();
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
      console.log("Email confirmé : ", res.data);
      toast.success("Email confirmé ! ");
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
      <div className="conf-mail">
        <h1>Email confirmer ! </h1>
        <span onClick={() => nav("/auth")}>Connectez-vous</span>
      </div>
    </StyledEmailConfirmer>
  );
};

export default EmailConf;
const StyledEmailConfirmer = styled.section`
  .conf-mail {
    margin: 10px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    h1 {
      text-align: center;
      margin-bottom: 20px;
      font-size: 1.3em;
    }
    span {
      display: block;
      text-align: center;
      cursor: pointer;
      font-size: 1.2;
      color: ${COLORS.green};
      text-decoration: underline;
    }
  }
`;
