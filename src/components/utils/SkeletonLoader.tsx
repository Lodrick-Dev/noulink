import styled, { keyframes } from "styled-components";
import COLORS from "../../Styles/Styles";

const SkeletonLoader = () => {
  return <StyledSkeleton />;
};

export default SkeletonLoader;

const shimmer = keyframes`
  0% {
    background-position: -800px 0;
  }
  100% {
    background-position: 800px 0;
  }
`;

const StyledSkeleton = styled.div`
  width: 600px;
  height: 250px;
  border-radius: 10px;
  background: ${COLORS.grey};
  background-image: linear-gradient(
    90deg,
    ${COLORS.grey} 0px,
    #eceff1 40px,
    ${COLORS.grey} 80px
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.6s infinite linear;
`;
