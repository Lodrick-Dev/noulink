import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const LoadingBlue = () => {
  return (
    <StyledLoadingBlue>
      <span className="loader"></span>
    </StyledLoadingBlue>
  );
};

export default LoadingBlue;

const StyledLoadingBlue = styled.div`
  .loader {
    width: 70px;
    height: 70px;
    border: 5px solid ${COLORS.main};
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
