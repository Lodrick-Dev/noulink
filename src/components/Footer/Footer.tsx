import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  return (
    <StyledFooter>
      <ul>
        <li onClick={() => nav("/cgu")}>CGU</li>
        <li onClick={() => nav("/politique-confidentialite")}>
          Politique de confidentialité
        </li>
        <li onClick={() => nav("/mentions")}>Mentions légales</li>
        <a href="https://www.instagram.com/noulinkg/" target="_blank">
          Instagram
        </a>
      </ul>
      <div className="box-img">
        <img src="/svglogo.svg" alt="logo-noulink" />
      </div>
      <span>©copyright - 2025</span>
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
    }
  }
  @media screen and (max-width: 450px) {
    .box-img {
      img {
        width: 50%;
      }
    }
  }
`;
