import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { toast } from "react-toastify";
import { supabase } from "../utils/supabaseClient";
import { LoadingHorizontal } from "../Loading/LoadingHorizontal";

export const RegisterCostumer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [acceptCG, setAcceptCG] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (import.meta.env.VITE_DEV === "true") {
      alert(
        "🚧 En cours de maintenance. " +
          "Inscrivez-vous à la newsletter pour être informé du lancement 🎉",
      );
      return;
    }
    if (!acceptCG) {
      return toast.error(
        "Vous devez accepter les CGU et CGV pour vous inscrire.",
      );
    }
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
          emailRedirectTo: `${import.meta.env.VITE_URL}conf-email/customer?type=customer`,
        },
      });
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
        setAcceptCG(false);
        alert("Confirmer votre email pour valider l'inscription");
      }
    } else {
      setLoading(false);
      alert("Mot de passe de correspond pas");
    }
  };
  return (
    <StyledRegisterCostumer>
      <h1>Inscription</h1>
      <form onSubmit={(e) => handleSubscribe(e)}>
        <div className="input email">
          <input
            type="email"
            placeholder="Email"
            value={email ? email : ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="em">
            Utilisez une adresse email valide. Vous recevrez un email de
            confirmation.
          </span>
        </div>
        <div className="input pass">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Mot de passe"
            value={password ? password : ""}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!showPass ? (
            <EyeOff
              className="ii"
              size={30}
              onClick={() => setShowPass((prev) => !prev)}
            />
          ) : (
            <Eye
              size={30}
              className="ii"
              onClick={() => setShowPass((prev) => !prev)}
            />
          )}
        </div>
        <div className="input pass">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Confirme mot de passe"
            value={confirmPassword ? confirmPassword : ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="accept-cg">
          <input
            type="checkbox"
            checked={acceptCG}
            onChange={(e) => setAcceptCG(e.target.checked)}
            style={{ marginRight: "10px" }}
          />
          <span>
            J'accepte les{" "}
            <a href="/cgu" target="_blank">
              CGU
            </a>{" "}
            et{" "}
            <a href="/cgv" target="_blank">
              CGV
            </a>
          </span>
        </div>
        {loading ? (
          <LoadingHorizontal />
        ) : (
          <input type="submit" value="S'inscrire" />
        )}
      </form>
    </StyledRegisterCostumer>
  );
};

const StyledRegisterCostumer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0px;
  h1 {
    color: ${COLORS.green};
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      width: 70%;
      margin: 5px 0px;
    }
    input {
      padding: 5px;
      outline: none;
      font-size: 1.1em;
    }
    .email {
      .em {
        font-size: 0.7em;
        color: ${COLORS.green};
      }
    }
    .pass {
      .ii {
        margin-top: 5px;
      }
    }
    .accept-cg {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    > input {
      margin-top: 15px;
      padding: 10px 25px;
      width: 55%;
      background: ${COLORS.green};
      border: none;
      outline: none;
      border-radius: 10px;
      color: aliceblue;
    }
  }
  @media screen and (max-width: 450px) {
    form {
      div {
        width: 95%;
      }
    }
  }
`;
