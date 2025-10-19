import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  return (
    <StyledFooter>
      <ul>
        <li onClick={() => nav("/cgu")}>CGU</li>
        <li onClick={() => nav("/cgv")}>CGV</li>
        <li onClick={() => nav("/politique-confidentialite")}>
          Politique de confidentialité
        </li>
        <li onClick={() => nav("/mentions")}>Mentions légales</li>
        <a href="https://www.instagram.com/noulinkg/" target="_blank">
          Instagram
        </a>
      </ul>
      <div className="stripe">
        <strong className="info-stripe">
          ✅ Paiement 100% sécurisé via Stripe
        </strong>
        <img src="/assets/logo-stripe.webp" alt="img-stripe" />
      </div>
      <div className="box-img">
        <img src="/svglogo.svg" alt="logo-noulink" onClick={() => nav("/")} />
      </div>
      <span className="copyright">
        ©copyright - Nou Link 2025 - par{" "}
        <a href="https://www.loryum.com" target="_blank">
          Loryum
        </a>{" "}
      </span>
    </StyledFooter>
  );
};

export default Footer;
const StyledFooter = styled.div`
  background: ${COLORS.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      cursor: pointer;
      list-style: none;
      text-decoration: underline;
      color: white;
      margin-top: 10px;
    }
    a {
      cursor: pointer;
      color: white;
      margin-top: 10px;
    }
  }
  .box-img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40%;
      cursor: pointer;
    }
  }
  .stripe {
    width: 50%;
    margin: 0px auto 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50%;
      margin: 0px auto;
    }
    .info-stripe {
      display: block;
      text-align: center;
      width: 100%;
      border-radius: 5px;
      padding: 5px;
      color: ${COLORS.green};
    }
  }
  .copyright {
    color: ${COLORS.yellow};
    a {
      color: ${COLORS.green};
      cursor: pointer;
    }
  }
  @media screen and (max-width: 450px) {
    .box-img {
      img {
        width: 50%;
      }
    }
    .stripe {
      width: 100%;
    }
  }
`;
