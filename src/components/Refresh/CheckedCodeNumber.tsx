import styled from "styled-components";

const CheckedCodeNumber = () => {
  return (
    <StyledCheckedCodeNumber>
      <h3 className="hh-3">Votre compte a été actualisé 👌</h3>
    </StyledCheckedCodeNumber>
  );
};

export default CheckedCodeNumber;
const StyledCheckedCodeNumber = styled.div`
  .hh-3 {
    font-size: 1.3em;
  }
`;
