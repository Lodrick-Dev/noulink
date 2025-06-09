import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const One = () => {
  return (
    <StyledOne>
      <img src="/assets/repas.jpg" alt="" />
      <strong>Marc uo pp ej ee ooi</strong>
      <span className="the-span">Saveur : Guyane</span>
    </StyledOne>
  );
};

export default One;
const StyledOne = styled.div`
  width: 15%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px;
  border: solid 1px ${COLORS.grey};
  box-shadow: 1px 1px 1px rgba(46, 46, 46, 0.119);
  img {
    margin: 0px auto;
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: block;
  }
  strong {
    text-align: center;
  }
  .the-span {
    display: block;
    margin: 10px auto;
    text-align: center;
    border-radius: 7px;
    font-size: 0.8em;
    background: ${COLORS.yellow};
  }
  @media screen and (max-width: 450px) {
    width: 30%;
    height: 25vh;
    margin: 5px;
    .the-span {
      border-radius: 0px;
      width: 100%;
      /* width: 80%; */
      font-size: 0.7em;
    }
  }
`;
