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
  .loader {
    min-width: 20px;
    min-height: 20px;
    max-width: 20px;
    max-height: 20px;
    border: 3px solid ${COLORS.yellow};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    flex-shrink: 0; /* important */
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
