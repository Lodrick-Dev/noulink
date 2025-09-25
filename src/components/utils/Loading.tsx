import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const Loading = () => {
  return (
    <StyledLoading>
      <span className="loader"></span>
    </StyledLoading>
  );
};

export default Loading;
const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${COLORS.grey};
    box-shadow: 32px 0 ${COLORS.grey}, -32px 0 ${COLORS.grey};
    position: relative;
    animation: flash 0.5s ease-out infinite alternate;
  }

  @keyframes flash {
    0% {
      background-color: #fff2;
      box-shadow: 32px 0 #fff2, -32px 0 ${COLORS.grey};
    }
    50% {
      background-color: ${COLORS.grey};
      box-shadow: 32px 0 #fff2, -32px 0 #fff2;
    }
    100% {
      background-color: #fff2;
      box-shadow: 32px 0 ${COLORS.grey}, -32px 0 #fff2;
    }
  }
`;
