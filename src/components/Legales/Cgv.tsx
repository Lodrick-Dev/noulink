import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const Cgv = () => {
  return (
    <StyledCgv>
      <div>
        <h1>Conditions Générales de Vente (CGV) de Nou Link</h1>
      </div>
      <div>
        <h2>.1 Objet</h2>
        <p>
          Les présentes Conditions Générales de Vente (CGV) définissent les
          modalités de souscription, d’utilisation et de facturation des
          abonnements annuels payants permettant de créer et publier un profil
          sur la plateforme Nou Link (service exploité sous le nom commercial
          Losira).
        </p>
        <p>
          L’accès au site pour la consultation reste gratuit, mais la
          publication de contenus et la gestion de profil sont réservées aux
          abonnés payants.
        </p>
      </div>
      <div>
        <h2>.2 Editeur et contact</h2>
        <p>Éditeur : Loddman (pseudo Instagram), nom commercial : Losira</p>
        <p>Email : dev.frenchlod@gmail.com</p>
        <p>Hébergement : OVH, France</p>
      </div>
      <div>
        <h2>.3 Abonnement annuel</h2>
        <p>
          {" "}
          <strong>Accès payant : </strong>La création et la publication d’un
          profil nécessitent la souscription d’un abonnement annuel.
        </p>
        <p>
          {" "}
          <strong>Renouvellement :</strong>L’abonnement est valable pour une
          période de 12 mois à compter de la date de paiement. Il pourra être
          renouvelé à expiration selon les modalités définies lors de la
          souscription.{" "}
        </p>
        <p>
          {" "}
          <strong>Tarifs :</strong>Les tarifs de l’abonnement annuel sont
          communiqués lors de l’inscription et consultables sur la plateforme.
          Ils peuvent être modifiés pour les nouvelles souscriptions, mais les
          abonnements en cours restent au tarif initial jusqu’à expiration.{" "}
        </p>
        <p>
          {" "}
          <strong>Paiement : </strong>Le paiement est effectué en ligne via les
          moyens sécurisés proposés par Nou Link. La souscription n’est
          effective qu’après validation du paiement.
        </p>
      </div>
      <div>
        <h2>.4 Modalités de création et gestion du profil</h2>
        <strong>
          Chaque utilisateur abonné peut créer un profil public contenant :
        </strong>
        <p>Pseudo ou nom</p>
        <p>Description personnelle ou professionnelle</p>
        <p>Liste de spécialités culinaires</p>
        <p>Images et galerie</p>
        <p>Coordonnées de contact (optionnelles)</p>
        <strong>
          L’utilisateur est responsable de l’exactitude des informations qu’il
          publie. Toute information trompeuse, inappropriée ou illégale peut
          entraîner la suspension ou la suppression du profil sans remboursement
          de l’abonnement.
        </strong>
      </div>
      <div>
        <h2>.5 Durée et résiliation</h2>
        <p>L’abonnement est conclu pour une durée de 12 mois.</p>
        <p>
          L’utilisateur peut demander la suppression de son profil et la
          résiliation de son abonnement à tout moment, en contactant :
          dev.frenchlod@gmail.com .
        </p>
        <p>
          Aucun remboursement ne sera effectué en cas de résiliation anticipée
          ou de suspension pour non-respect des règles de la plateforme.
        </p>
      </div>
      <div>
        <h2>.6 Propriété intellectuelle</h2>
        <p>
          Les contenus créés par Nou Link (logo, charte graphique, textes) sont
          la propriété exclusive de Nou Link.
        </p>
        <p>
          Les utilisateurs conservent leurs droits d’auteur sur leurs contenus,
          mais accordent à Nou Link une licence non exclusive, mondiale et
          gratuite permettant l’hébergement et la diffusion sur la plateforme.
        </p>
      </div>
      <div>
        <h2>.7 Données personnelles et RGPD</h2>
        <p>
          Les données collectées pour la création et gestion des profils sont
          traitées conformément à la Politique de Confidentialité et au RGPD.
        </p>
        <p>
          Elles sont conservées tant que l’abonnement est actif et supprimées à
          la demande de l’utilisateur ou à l’expiration de l’abonnement.
        </p>
        <p>
          Les utilisateurs disposent des droits suivants : accès, rectification,
          suppression, limitation du traitement.
        </p>
      </div>
      <div>
        <h2>.8 Responsabilité</h2>
        <p>
          Nou Link met tout en œuvre pour assurer le bon fonctionnement de la
          plateforme, mais ne peut garantir l’absence d’erreurs, de pertes de
          données ou d’interruptions temporaires.
        </p>
        <p>
          Nou Link n’est pas responsable des informations publiées par les
          utilisateurs, ni de la qualité des repas proposés.
        </p>
      </div>
      <div>
        <h2>.9 Modification des CGV</h2>
        <p>
          Nou Link se réserve le droit de modifier les présentes CGV à tout
          moment. Les modifications s’appliquent uniquement aux nouvelles
          souscriptions et seront communiquées sur la plateforme.
        </p>
      </div>
      <div>
        <h2>.10 Litiges et droit applicable</h2>
        <p>Les présentes CGV sont régies par le droit françai</p>
        <p>
          Tout litige relatif à la souscription ou à l’utilisation des
          abonnements sera soumis aux tribunaux compétents en France.
        </p>
      </div>
    </StyledCgv>
  );
};

export default Cgv;
const StyledCgv = styled.section`
  background: ${COLORS.main};
  margin: 100px auto;
  padding: 20px;
  width: 80%;
  border-radius: 20px;
  div {
    margin: 30px 0px;
    h1 {
      text-align: center;
      font-size: 1.3em;
    }
    strong {
      display: block;
      margin: 10px 0px;
      color: ${COLORS.green};
    }
    p {
      margin-top: 10px;
      color: aliceblue;
      span {
        cursor: pointer;
        color: ${COLORS.yellow};
      }
    }
  }
`;
