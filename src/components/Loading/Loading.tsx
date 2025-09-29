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
  width: 35px;
  height: 35px;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    width: 20px;
    height: 20px;
    border: 3px solid ${COLORS.yellow};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
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
