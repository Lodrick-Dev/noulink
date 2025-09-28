import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { supabase } from "../utils/supabaseClient";

const ManagerAccount = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const deleteAccount = async () => {
    if (window.confirm("Supprimer votre compte ? ")) {
      setLoading(true);
      try {
        const res = await axios({
          method: "delete",
          url: `${import.meta.env.VITE_APP_API}restaurant/delete/${"mon d=id"}`,
          withCredentials: true,
        });
        console.log(res);
        if (res.data) {
          setLoading(false);
          if (res.data.succes) {
            nav("/");
          }
          return toast.success(res.data.succes);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        return toast.error("Une erreur est survenue");
      }
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Erreur lors de la déconnexion :", error.message);
      alert("Erreur lors de la déconnexion");
    } else {
      alert("Vous avez été déconnecté");
      // optionnel : redirige l'utilisateur
      window.location.href = "/";
    }
  };
  return (
    <StyledManagerAccount>
      <span className="delete-btn-compte" onClick={() => deleteAccount()}>
        Supprimer mon compte
      </span>
      <span className="logout" onClick={() => handleLogout()}>
        Déconnexion
      </span>
    </StyledManagerAccount>
  );
};

export default ManagerAccount;
const StyledManagerAccount = styled.div`
  margin: 20px 0px 0px 0px;
  padding: 10px;
  font-size: 0.7em;
  color: aliceblue;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  border-top: solid 1px ${COLORS.grey};
  .delete-btn-compte {
    background: ${COLORS.red};
    cursor: pointer;
    margin-right: 25px;
    font-weight: bold;
    padding: 5px 25px;
    border-radius: 5px;
  }
  .logout {
    padding: 5px 25px;
    border-radius: 5px;
    cursor: pointer;
    background: ${COLORS.main};
    margin-left: 25px;
    font-weight: bold;
  }
  @media screen and (max-width: 450px) {
    /* flex-direction: column; */
    flex-direction: column-reverse;
    align-items: flex-start;
    .delete-btn-compte {
      display: block;
      width: auto;
      margin-right: 0px;
      margin-top: 15px;
    }
    .logout {
      margin-bottom: 15px;
      display: flex;
      margin-left: 0px;
    }
  }
`;
