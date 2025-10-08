import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "react-toastify";
import { supabase } from "../utils/supabaseClient";
import Loading from "../utils/Loading";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      return toast.error("Tous les champs sont obligatoires");
    }
    if (password.length < 6) {
      return toast.error("Mot de passe avec 6 caractères minimum");
    }
    if (password === confirmPassword) {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${import.meta.env.VITE_URL}conf-email`,
        },
      });
      console.log(error);
      console.log(data);
      setLoading(false);
      if (error) {
        console.log(error);

        return alert(error.message);
      } else if (data?.user && data?.user?.identities?.length === 0) {
        // Cas 2 : Email déjà inscrit et confirmé
        alert("Cet email est déjà inscrit.");
      } else {
        setLoading(false);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        alert("Confirmer votre email pour valider l'inscription");
      }
    } else {
      setLoading(false);
      alert("Mot de passe de correspond pas");
    }
  };
  return (
    <StyledRegister>
      <h1>Inscription</h1>
      <span className="indic">
        Formulaire réservé aux personnes souhaitant proposer leurs saveurs sur
        Nou Link.
      </span>
      <form onSubmit={(e) => handleSubscribe(e)}>
        <input
          type="email"
          placeholder="Email*"
          value={email ? email : ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe*"
          value={password ? password : ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmation mot de passe*"
          value={confirmPassword ? confirmPassword : ""}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {loading && <Loading />}
        {!loading && <input type="submit" value="S'enregistrer" />}
      </form>
    </StyledRegister>
  );
};

export default Register;
const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;
  h1 {
    text-align: center;
    color: ${COLORS.yellow};
  }
  .indic {
    text-align: center;
    color: ${COLORS.white};
  }
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0px auto;
    input {
      width: 55%;
      margin: 10px auto;
      padding: 3px;
      font-size: 1.2em;
      border-radius: 7px;
      outline: none;
      border: none;
    }

    input:last-child {
      width: 30%;
      padding: 5px;
      font-size: 1.2em;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      border: none;
      transition: 0.5s;
      color: ${COLORS.main};
      background: ${COLORS.yellow};
    }
    input:last-child:hover {
      background: ${COLORS.green};
      color: ${COLORS.white};
    }
  }
  .bar-or {
    text-align: center;
    margin: 0px auto;
    opacity: 0.5;
    font-size: 0.8em;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    form {
      width: 100%;
      input {
        width: 100%;
      }
      input:last-child {
        width: 60%;
        padding: 5px;
        font-size: 1.2em;
        border-radius: 10px;
        outline: none;
        border: none;
      }
    }
  }
`;
