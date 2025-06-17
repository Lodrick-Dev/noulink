import { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";

export const PopCookies = () => {
  const [accepted, setAccepted] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_accepted");
    if (consent) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_accepted", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <StyledPopCookies>
      <p>
        En naviguant sur la plateforme Nou Link, vous acceptez l'utilisation de
        cookies afin d'améliorer votre expérience.
      </p>
      <button onClick={handleAccept}>J'accepte</button>
    </StyledPopCookies>
  );
};

const StyledPopCookies = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${COLORS.second};
  color: ${COLORS.white};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50svh;
  p {
    margin: 0;
    font-size: 0.9em;
  }
  button {
    background: ${COLORS.yellow};
    color: ${COLORS.black};
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
