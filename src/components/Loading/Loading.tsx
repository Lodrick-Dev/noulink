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
  width: 25px;
  height: 25px;
  margin: 0px 10px;
  .loader {
    width: 25px;
    height: 25px;
    border: 3px solid ${COLORS.black};
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
