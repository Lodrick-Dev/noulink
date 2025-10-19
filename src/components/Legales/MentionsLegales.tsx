import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useEffect } from "react";

const MentionsLegales = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <StyledMentionsLegales>
      <div className="box">
        <strong>Editeur du site :</strong>
        <p className="first-p">
          Le site www.noulink.fr est édité par Loryum, entreprise individuelle
          enregistrée en France. Le projet Nou Link est développé et géré sous
          la responsabilité de Loryum.
        </p>
        <span>
          <strong>Nom Commercial : </strong>Loryum
        </span>
        <span>
          <strong>Entreprise individuelle de : </strong>JEAN-JACQUES Lodrick
        </span>
        <span>
          <strong>SIRET : </strong>992 781 260 00011
        </span>
        <span>
          <strong>Adresse : </strong>16 BIS Avenue de l’Europe, 51100 Reims,
          France
        </span>
        <span>
          <strong>Adresse e-mail de contact : </strong> dev.frenchlod@gmail.com
        </span>
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
    display: flex;
    flex-direction: column;
    .first-p {
      margin-bottom: 20px;
    }
    span {
      color: ${COLORS.white};
      strong {
        font-size: 1em;
        color: ${COLORS.black};
      }
    }
    strong {
      font-size: 1.2em;
    }
    p {
      color: aliceblue;
      margin: 2px 0px;
    }
  }
`;
