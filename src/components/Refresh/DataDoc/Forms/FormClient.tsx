import styled from "styled-components";
import COLORS from "../../../../Styles/Styles";

export const FormClient = () => {
  return (
    <StyledFormClient>
      <h2>Laisse un message pour les vendeurs dans ta ville</h2>
      <p>
        Envoi nous un message sur instagram en indiquant ta ville. On publiera
        ton message anonymement.
      </p>
      <a
        href="https://www.instagram.com/noulinkg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram - Nou Link
      </a>
    </StyledFormClient>
  );
};

const StyledFormClient = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  background: ${COLORS.second};
  width: 40%;
  border-radius: 10px;
  padding: 20px;
  h2 {
    color: ${COLORS.white};
    text-align: center;
    margin: 20px 0px;
    font-size: 1em;
  }
  em {
    font-size: 0.9em;
  }
  a {
    padding: 5px 10px;
    background: ${COLORS.green};
    color: ${COLORS.white};
    border-radius: 5px;
    margin-top: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;
