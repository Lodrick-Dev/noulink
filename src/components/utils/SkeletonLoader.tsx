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
  /* width: 600px;
  height: 250px; */
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: ${COLORS.grey};
  background-image: linear-gradient(
    90deg,
    #bfbdbd 0px,
    #909090 40px,
    #bfbdbd 80px
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.6s infinite linear;
`;
