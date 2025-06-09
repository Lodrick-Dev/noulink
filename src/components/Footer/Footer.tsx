import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>CGU</li>
        <li>Politique de confidentialité</li>
        <li>Mentions légales</li>
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
      list-style: none;
      text-decoration: underline;
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
