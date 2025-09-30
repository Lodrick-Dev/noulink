import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import { Dynamic } from "../../Context/ContextDynamique";
const Header = () => {
  const { token } = Dynamic();
  const pageActu = useLocation();
  const direction = useNavigate();
  const conditionAction = () => {
    if (pageActu.pathname === "/dashboard") {
      direction("/home");
    } else {
      direction("/dashboard");
    }
  };
  return (
    <StyledHeader>
      <div className="box first">
        <span onClick={() => direction("/")}>
          <House className="home-a" />
        </span>
        {token && (
          <span className="u-token" onClick={() => conditionAction()}>
            {pageActu.pathname === "/dashboard" ? "Public" : "Dashboard"}
          </span>
        )}
        {!token && pageActu.pathname !== "/auth" && (
          <span className="no-token" onClick={() => direction("/auth")}>
            Connexion
          </span>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  background: ${COLORS.main};
  display: flex;
  justify-content: flex-end;
  .first {
    background: ${COLORS.main};
    display: flex;
    justify-content: space-between;
    padding: 15px;
    span {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: ${COLORS.yellow};
      cursor: pointer;
      text-decoration: underline;
    }
    .u-token,
    .no-token {
      margin-left: 15px;
    }
  }
`;
