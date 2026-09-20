import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { supabase } from "../utils/supabaseClient";
import Loading from "../utils/Loading";

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

  // const handleLogout = async () => {
  //   try {
  //     console.log("🔵 Début de la déconnexion...");

  //     const { error } = await supabase.auth.signOut();

  //     console.log("🔵 Résultat signOut :", { error });

  //     if (error) {
  //       console.error("❌ Erreur déconnexion complète :", error);
  //       console.error("❌ Message :", error.message);
  //       console.error("❌ Code :", error.code);
  //       console.error("❌ Status :", error.status);

  //       alert(`Erreur déconnexion : ${error.message}`);
  //       return;
  //     }

  //     console.log("✅ Déconnexion Supabase réussie");

  //     alert("Vous avez été déconnecté");

  //     window.location.href = "/";
  //   } catch (error) {
  //     console.error("🔥 Exception pendant la déconnexion :", error);

  //     if (error instanceof Error) {
  //       console.error("🔥 Message :", error.message);
  //       console.error("🔥 Stack :", error.stack);
  //       alert(`Erreur inattendue : ${error.message}`);
  //     } else {
  //       console.error("🔥 Erreur inconnue :", error);
  //       alert("Erreur inattendue lors de la déconnexion");
  //     }
  //   }
  // };

  const handleLogout = async () => {
    try {
      console.log("🔵 Début de la déconnexion...");

      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();

      console.log("🟢 Session avant signOut :", sessionData);
      console.log("🟢 Erreur session :", sessionError);

      const { error } = await supabase.auth.signOut();

      console.log("🔵 Résultat signOut :", { error });

      if (error) {
        console.error("❌ Erreur déconnexion :", error);
        console.error("❌ Message :", error.message);
        console.error("❌ Status :", error.status);
        return;
      }

      console.log("✅ Déconnexion Supabase réussie");

      window.location.href = "/";
    } catch (error) {
      console.error("🔥 Exception pendant la déconnexion :", error);
    }
  };
  return (
    <StyledManagerAccount>
      <span className="delete-btn-compte" onClick={() => deleteAccount()}>
        {loading ? <Loading /> : " Supprimer mon compte"}
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
