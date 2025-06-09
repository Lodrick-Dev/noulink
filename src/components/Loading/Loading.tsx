import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LaodingStyled>
      <span className="loader"></span>
    </LaodingStyled>
  );
};

export default Loading;
const LaodingStyled = styled.div`
  .loader {
    width: 25px;
    height: 25px;
    border: 3px solid #fff;
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
