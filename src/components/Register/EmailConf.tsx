import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const EmailConf = () => {
  const nav = useNavigate();
  return (
    <StyledEmailConfirmer>
      <div className="conf-mail">
        <h1>Email confirmer ! </h1>
        <span onClick={() => nav("/inscription")}>Connectez-vous</span>
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
