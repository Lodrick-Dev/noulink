import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useNavigate } from "react-router-dom";

const PopRouter = ({
  setPopRouter,
}: {
  setPopRouter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const direction = useNavigate();
  return (
    <StyledPopRouter onClick={() => setPopRouter(false)}>
      <div className="box-btn" onClick={(e) => e.stopPropagation()}>
        <button
          className="inscrip"
          onClick={() => {
            direction("/inscription");
            setPopRouter(false);
          }}
        >
          Inscription
        </button>
        <button
          className="actu"
          onClick={() => {
            direction("/update");
            setPopRouter(false);
          }}
        >
          Mettre à jour
        </button>
        {/* <span>
          ✨ Vous avez déjà un compte ? Vérifiez votre numéro de mobile
          directement pour le garder actif, puis mettez à jour vos infos si
          besoin.
        </span> */}
      </div>
    </StyledPopRouter>
  );
};

export default PopRouter;
const StyledPopRouter = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  position: fixed;
  z-index: 20;
  background: #00000082;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  .box-btn {
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .inscrip {
      background: ${COLORS.green};
      color: ${COLORS.white};
    }
    .actu {
      background: ${COLORS.yellow};
    }
    button {
      padding: 5px 15px;
      border-radius: 5px;
      border: none;
      outline: none;
      /* width: 80%; */
      cursor: pointer;
      font-size: 1.3em;
      box-shadow: 1px 1px 7px ${COLORS.black};
      margin: 10px;
    }
    span {
      margin-top: 10px;
      text-align: center;
      width: 100%;
      color: ${COLORS.green};
    }
  }
  @media screen and (max-width: 450px) {
    .box-btn {
      button {
        width: 80%;
      }
    }
  }
`;
