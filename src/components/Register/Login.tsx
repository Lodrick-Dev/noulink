import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Dynamic } from "../../Context/ContextDynamique";
import { toast } from "react-toastify";
import Loading from "../utils/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [initPassword, setInitPassword] = useState(false);
  const nav = useNavigate();
  const { setUserAuth } = Dynamic();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Tous les champs sont obligatoire");
    }
    setLoading(true);
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(error);
    if (error) {
      setLoading(false);
      if (error.message.includes("Invalid login")) {
        return toast.error("E-mail inconnu ou mot de passe incorrect");
      }
      if (error.message.includes("Email not")) {
        toast.error("Email non confirmé");
        return;
      }
      alert(error.message);
    } else if (data?.user) {
      setLoading(false);
      console.log(data);
      console.log(data?.user);
      setUserAuth(data?.user);
      nav("/");
    }
  };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Veuillez entrer votre email");
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

    if (error) {
      console.error("Erreur reset password :", error.message);
    } else {
      console.log("Email de réinitialisation envoyé !");
      alert("Vérifiez votre email pour réinitialiser le mot de passe.");
    }
  };
  return (
    <StyledLogin>
      <h1>Connexion</h1>
      <form
        onSubmit={(e) => {
          initPassword ? handleResetPassword(e) : handleLogin(e);
        }}
      >
        <input
          className="les-puts"
          type="email"
          placeholder="Email"
          value={email ? email : ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!initPassword && (
          <input
            type="password"
            className="les-puts"
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        {loading && <Loading />}
        {!loading && (
          <input
            className="btn-sub"
            type="submit"
            value={initPassword ? "Initialiser mot de passe" : " Se connecter"}
          />
        )}
      </form>
      <strong onClick={() => setInitPassword(!initPassword)}>
        {initPassword ? "Retour" : "Mot de passe oublié"}
      </strong>
    </StyledLogin>
  );
};

export default Login;
const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    text-align: center;
    color: ${COLORS.yellow};
  }
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0px auto;
    .les-puts {
      width: 55%;
      margin: 10px auto;
      padding: 3px;
      font-size: 1.2em;
      border-radius: 7px;
      outline: none;
      border: none;
    }

    .btn-sub {
      margin: 0px auto;
      padding: 5px 40px;
      font-size: 1.2em;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      border: none;
      transition: 0.5s;
    }
    .btn-sub:hover {
      background: ${COLORS.green};
      color: ${COLORS.white};
    }
  }
  strong {
    text-align: center;
    font-size: 0.8em;
    text-decoration: underline;
    cursor: pointer;
    margin: 10px auto;
  }
`;
