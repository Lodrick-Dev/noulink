import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const Loading = () => {
  return (
    <LaodingStyled>
      <span className="loader"></span>
    </LaodingStyled>
  );
};

export default Loading;
const LaodingStyled = styled.div`
  min-width: 35px;
  min-height: 35px;
  max-width: 35px;
  max-height: 35px;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: ${COLORS.second}; */
  .loader {
    min-width: 25px;
    min-height: 25px;
    max-width: 25px;
    max-height: 25px;
    border: 2px solid ${COLORS.yellow};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: block;
    /* box-sizing: border-box; */
    animation: rotation 1s linear infinite;
    flex-shrink: 0 !important;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
