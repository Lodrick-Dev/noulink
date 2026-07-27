import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ChefHat,
  CircleUserRound,
  House,
  LogIn,
  ShoppingCart,
} from "lucide-react";
import { Dynamic } from "../../Context/ContextDynamique";
import { useAccount } from "../../Context/AccountContext";
import { useCart } from "../../Context/CartContext";
const Header = () => {
  const { token } = Dynamic();
  const { accountType } = useAccount();
  const { cartItems } = useCart();
  const pageActu = useLocation();
  const direction = useNavigate();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
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
            {pageActu.pathname === "/dashboard" ? (
              <ChefHat />
            ) : (
              <CircleUserRound />
            )}
          </span>
        )}
        {token && accountType === "customer" && (
          <div className="icon-shop">
            <ShoppingCart className="shoop" />
            {totalQuantity > 0 && <em>{totalQuantity}</em>}
          </div>
        )}
        {!token && pageActu.pathname !== "/auth" && (
          <span className="no-token" onClick={() => direction("/auth")}>
            <LogIn />
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
      margin-left: 30px;
    }
    .shoop {
      color: ${COLORS.yellow};
    }

    .icon-shop {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 30px;
      .shoop {
        color: ${COLORS.yellow};
      }
      em {
        position: absolute;
        background: #f5f5f5;
        padding: 2px;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        bottom: -10px;
        font-size: 1em;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
