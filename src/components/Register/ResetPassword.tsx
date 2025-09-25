import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { supabase } from "../utils/supabaseClient";
import { useState } from "react";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordConf, setNewPasswordConf] = useState<string>("");
  const handleUpdatePassword = async () => {
    if (!newPassword || !newPasswordConf) {
      return toast.error("Tous les champs sont obligatoires");
    }
    if (newPassword.length < 6 || newPasswordConf.length < 6) {
      return toast.error("Mot de passe avec 6 caractères minimum");
    }
    if (newPassword !== newPasswordConf) {
      return toast.error("Les mots de passe ne correspondent pas");
    }
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error("Erreur mise à jour mot de passe :", error.message);
      toast.error("Erreur mise à jour mot de passe ");
    } else {
      alert("Mot de passe mis à jour avec succès !");
    }
  };

  return (
    <StyledInitPassword>
      <div className="init-pass">
        <input
          type="password"
          placeholder="Nouveau de mot de passe"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmer de mot de passe"
          onChange={(e) => setNewPasswordConf(e.target.value)}
        />
        <button onClick={() => handleUpdatePassword()}>Changer</button>
      </div>
    </StyledInitPassword>
  );
};

export default ResetPassword;
const StyledInitPassword = styled.section`
  padding: 20px;
  .init-pass {
    padding: 20px;
    width: 70%;
    margin: 10px auto;
    background: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    input {
      width: 30%;
      margin: 5px auto;
      padding: 5px;
      outline: none;
      border: none;
      border-radius: 5px;
      border-bottom: solid 2px ${COLORS.second};
      font-size: 1.2em;
    }
    button {
      width: 20%;
      margin: 10px auto;
      padding: 5px 20px;
      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 1.3em;
      background: ${COLORS.green};
      color: aliceblue;
      cursor: pointer;
      transition: 0.3s;
    }
    button:hover {
      transition: 0.3s;
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 450px) {
    .init-pass {
      width: 90%;
      input {
        width: 100%;
      }
      button {
        width: 70%;
      }
    }
  }
`;
