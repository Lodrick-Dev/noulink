import styled from "styled-components";

const FormProfil = () => {
  return (
    <StyledFormProfil>
      <label htmlFor="profil"></label>
      <input type="file" id="profil" />
    </StyledFormProfil>
  );
};

export default FormProfil;
const StyledFormProfil = styled.div``;
