import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const BarreSearch = () => {
  return (
    <StyledBarreSearch>
      <input type="search" placeholder="Plat" />
      <button>🔍</button>
    </StyledBarreSearch>
  );
};

export default BarreSearch;
const StyledBarreSearch = styled.div`
  /* background: green; */
  margin-top: 20px;
  width: 50%;
  display: flex;
  justify-content: center;
  input {
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: none;
    width: 60%;
    margin-right: 20px;
    font-size: 1.3em;
  }
  button {
    padding: 3px 35px;
    font-size: 1.6em;
    background: ${COLORS.yellow};
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 1px 1px 7px ${COLORS.black};
    transition: 0.2s;
  }
  button:hover {
    transition: 0.2s;
    transform: scale(1.05);
  }
  button:active {
    transition: 0.2s;
    box-shadow: none;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      margin: 0px auto;
      margin-bottom: 10px;
      width: 80%;
    }
    button {
      padding: 3px 30px;
    }
  }
`;
