import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import { House } from "lucide-react";
type TypeProps = {
  setPopRouter: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ setPopRouter }: TypeProps) => {
  const pageActu = useLocation();
  const direction = useNavigate();
  const returnText = () => {
    return pageActu.pathname !== "/" ? (
      <House className="home-a" />
    ) : (
      "S'enregistrer"
    );
  };
  const actionCondition = () => {
    if (pageActu.pathname !== "/") {
      direction("/");
    } else {
      setPopRouter(true);
    }
  };
  return (
    <StyledHeader>
      <div className="box first">
        <span onClick={() => actionCondition()}>{returnText()}</span>
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
      color: ${COLORS.white};
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
