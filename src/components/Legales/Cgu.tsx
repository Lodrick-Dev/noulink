import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const Cgu = () => {
  const nav = useNavigate();
  return (
    <StyledCgu>
      <div>
        <strong>Conditions Générales d'Utilisation (CGU) de Nou Link</strong>
        <p>
          Bienvenue sur Nou Link ! En accédant ou en utilisant notre site, vous
          acceptez pleinement et entièrement les présentes Conditions Générales
          d'Utilisation. Merci de les lire attentivemen
        </p>
      </div>
      <div>
        <h2>.1 Présentation du service</h2>
        <p>
          Nou Link (service exploité sous le nom commercial Loryum) est une
          plateforme destinée à mettre en avant les spécialités culinaires de
          l’Outre-mer. La consultation, la recherche et la découverte des fiches
          et profils (spécialités, photos, descriptions, localisation) sont
          gratuites pour les utilisateurs à la recherche de repas. En revanche,
          la création, la publication et la gestion d’un profil permettant de
          présenter une offre de repas (qu’il s’agisse d’un particulier, d’un
          vendeur ou d’un établissement) sont payantes : l’inscription, la mise
          en ligne des contenus et l’accès aux outils associés sont à un
          abonnement annuel, dont les modalités et tarifs sont communiqués au
          moment de l’inscription et précisés dans les Conditions Générales de
          Vente. Un profil public peut contenir un pseudo, une description, la
          liste des spécialités, des images et des coordonnées de contact.
          Chaque utilisateur reste responsable de l’exactitude des informations
          qu’il publie.
        </p>
      </div>
      <div>
        <h2>.2 Accès au site</h2>
        <p>
          L’accès à Nou Link est gratuit et ouvert à tous pour la consultation.
        </p>
        <p>
          La création, publication et gestion d’un profil nécessitent un
          paiement unique pour un an.
        </p>
        <p>
          L’utilisateur est responsable de l’exactitude et de la mise à jour des
          informations qu’il fournit.
        </p>
        <p>
          En cas d’informations trompeuses, inappropriées, illégales ou
          contraires aux règles de Nou Link (ex. publicité pour des plateformes
          concurrentes), Nou Link se réserve le droit de suspendre ou supprimer
          le profil concerné sans remboursement.
        </p>
      </div>
      <div>
        <h2>.3 Données personnelles</h2>
        <p>
          L'utilisation de Nou Link implique la collecte de certaines données
          uniquement au fonctionnement du service (téléphone, ville,
          description, etc.). Celles-ci sont traitées conformément à notre{" "}
          <span onClick={() => nav("/politique-confidentialite")}>
            Politique de Confidentialité.
          </span>{" "}
        </p>
        <p>
          Ces données sont traitées conformément à notre Politique de
          Confidentialité et dans le respect du Règlement Général sur la
          Protection des Données (RGPD).
        </p>

        <p>
          Conformément à la loi, l’utilisateur dispose de droits sur ses données
          (accès, rectification, suppression) qu’il peut exercer en contactant
          Nou Link à l’adresse indiquée à l’article 8.
        </p>
      </div>
      <div>
        <h2>.4 Contenus publiés</h2>
        <p>
          Les utilisateurs peuvent publier des textes (descriptions), images
          (profil et galerie) et spécialités culinaires.
        </p>
        <strong> En publiant du contenu, vous déclarez que :</strong>
        <p>
          - vous disposez des droits nécessaires sur les images et textes
          publiés
        </p>
        <p>
          - le contenu ne viole pas les lois en vigueur (pas de propos haineux,
          discriminatoires, ou violents)
        </p>
        <strong>
          Nous nous réservons le droit de modérer, désactiver ou de supprimer
          tout contenu contraire à ces règles, sans préavis ni remboursement.
        </strong>
      </div>
      <div>
        <h2>.5 Propriété intellectuelle</h2>
        <p>
          Nou Link est propriétaire de son logo, charte graphique, textes, etc.
          Toute reproduction, totale ou partielle, est interdite sans
          autorisation préalable.
        </p>
        <p>
          Les utilisateurs conservent leur droits d'auteur sur leur contenus,
          mais ils accordent à Nou Link une licence non exclusive, mondiale,
          gratuite, pour les afficher sur la plateforme.
        </p>
      </div>
      <div>
        <h2>.6 Responsabilité</h2>
        <p>
          Nous mettons tout en œuvre pour assurer le bon fonctionnement de Nou
          Link. Toutefois, des interruptions temporaires, des erreurs ou des
          pertes de données peuvent survenir.
        </p>
        <strong>
          Bien que nous prenions des mesures de sécurité, aucun site n'est à
          l'abri de failles ou d'attaques informatiques.
        </strong>
        <p>En utilisant le site, vous acceptez ces limites.</p>
        <p>
          Nou Link n'est pas responsable si les informations publiées par les
          utilisateurs sont fausses, trompeuses ou illégales
        </p>
        <p>
          Nou Link n’est pas garant de la disponibilité réelle des vendeurs,
          particuliers ou établissements, ni de la qualité des repas proposés.
        </p>
      </div>
      <div>
        <h2>.7 Modification des CGU</h2>
        <p>
          Les présentes conditions peuvent être modifiées à tout moment. Toute
          modification majeure sera annoncée sur la plateforme.
        </p>
      </div>
      <div>
        <h2>.8 Contact</h2>
        <p>Pour toute question ou signalement : dev.frenchlod@gmail.com</p>
      </div>
    </StyledCgu>
  );
};

export default Cgu;
const StyledCgu = styled.section`
  background: ${COLORS.main};
  margin: 100px auto;
  padding: 20px;
  width: 80%;
  border-radius: 20px;
  div {
    margin: 30px 0px;
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
