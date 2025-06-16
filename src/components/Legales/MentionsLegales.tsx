import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const MentionsLegales = () => {
  return (
    <StyledMentionsLegales>
      <div className="box">
        <strong>Editeur du site :</strong>
        <p>Le site est édité par un particulier</p>
        <p>Pseudonyme : Loddman (instagram)</p>
        <p>Adresse e-amil de contact : dev.frenchlod@gmail.com</p>
        <p>Statut : particulier (projet personnel sans but lucratif)</p>
      </div>
      <div className="box">
        <strong>Hébergement :</strong>
        <p>Le site est hébergé par : </p>
        <p>OVH</p>
        <p>2 rue Kellermann</p>
        <p>59100 Roubaix - France</p>
        <p>Site web : https://www.ovhcloud.com</p>
      </div>
      <div className="box">
        <strong>Responsabilité :</strong>
        <p>
          Les informations publiées sur ce site sont données à titre indicatif
          et peuvent être modifiées à tout moment
        </p>
        <p>
          L'éditeur ne pourra être tenu responsable des éventuelles erreurs ou
          omissions
        </p>
      </div>
      <div className="box">
        <strong>Données personnelles :</strong>
        <p>Aucune donnée personnelle n'est collectée à des fins commerciales</p>
        <p>
          La géolocation(ville uniquement) est utilisée localement pour
          personnaliser l'expérience utilisateur, sans stockage nominatif
        </p>
      </div>
    </StyledMentionsLegales>
  );
};

export default MentionsLegales;
const StyledMentionsLegales = styled.section`
  background: ${COLORS.main};
  margin: 100px auto;
  padding: 20px;
  width: 80%;
  border-radius: 20px;
  .box {
    margin: 30px 0px;
    strong {
      font-size: 1.2em;
    }
    p {
      color: aliceblue;
      margin: 2px 0px;
    }
  }
`;
