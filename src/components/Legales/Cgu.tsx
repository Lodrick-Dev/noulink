import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useEffect } from "react";

const Cgu = () => {
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <StyledCgu>
      <div>
        <strong>Conditions Générales d'Utilisation (CGU) de Nou Link</strong>
        <span>Dernière mise à jour : 19 octobre 2025</span>
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
        <div className="legales">
          <p>Nom commercial : Loryum</p>
          <p>Entreprise Individuelle de : JEAN-JACQUES Lodrick</p>
          <p>Numéro SIRET : 992 781 260 00011</p>
          <p>Adresse : 16 BIS Avenue de l’Europe, 51100 Reims, France</p>
          <p>Email : dev.frenchlod@gmail.com</p>
          <strong>Hébergement :</strong>
          <p>Fournisseur : OVH</p>
          <p>Pays : France</p>
          <p>Site web : www.ovh.com</p>
        </div>
      </div>
      <div>
        <h2>.2 Accès au site</h2>
        <p>
          L’accès à Nou Link est gratuit et ouvert à tous pour la consultation.
        </p>
        <p>
          La création, publication et gestion d’un profil nécessitent un
          paiement pour un an.
        </p>
        <ul>
          <strong>L'utilisateur déclare</strong>
          <li>
            - Avoir au moins 18 ans, ou être autorisé par un représentant légal.
          </li>
          <li>- Fournir des informations exactes et à jour</li>
          <li>
            - Ne pas publier de contenu trompeur, inapproprié, illégal ou
            contraire à la charte du site
          </li>
          <li>
            - L’utilisateur est responsable de l’exactitude et de la mise à jour
            des informations qu’il fournit.
          </li>
        </ul>
        <p>
          En cas d’informations trompeuses, inappropriées, illégales ou
          contraires aux règles de Nou Link (ex. publicité pour des plateformes
          concurrentes), Nou Link se réserve le droit de suspendre ou supprimer
          le profil concerné sans remboursement. Ainsi qu’en cas de non-paiement
          ou de fraude
        </p>
        <strong>
          L’inscription sur la plateforme implique l’acceptation pleine et
          entière des CGU et des Conditions Générales de Vente (CGV).
        </strong>
      </div>
      <div>
        <h2>.3 Données personnelles</h2>
        <p>
          L'utilisation de Nou Link implique la collecte de certaines données
          uniquement au fonctionnement du service (pseudo nom, ville,
          description, etc.). Celles-ci sont traitées conformément à notre{" "}
          <span onClick={() => nav("/politique-confidentialite")}>
            Politique de Confidentialité.
          </span>{" "}
        </p>
        <p>
          Ces données sont traitées conformément à notre Politique de
          Confidentialité, rédigée en conformité avec le Règlement Général sur
          la Protection des Données (RGPD).
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
          Nou Link se réserve le droit de suspendre ou supprimer tout contenu ou
          profil en cas de non-respect de la loi, des présentes CGU, ou de tout
          signalement légitime, sans préavis ni remboursement.
        </strong>
        <hr />
        <p>
          Les contenus publiés sur Nou Link doivent être en lien avec la
          thématique de la plateforme, à savoir la mise en avant des spécialités
          culinaires et des saveurs issues de certains départements de
          l’Outre-mer : Guyane, Guadeloupe, Martinique et Mayotte.
        </p>
        <p>
          Tout profil publiant des contenus sans rapport avec cette thématique
          (par exemple des spécialités provenant d’autres régions ou pays)
          pourra être désactivé ou supprimé, même en cas d’abonnement payé.
        </p>
        <p>
          Aucune demande de remboursement ne pourra être effectuée dans ce cas,
          conformément à l’article relatif aux{" "}
          <span onClick={() => nav("/cgv")}>
            Conditions Générales de Vente (CGV).
          </span>
        </p>
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
          gratuite, pour les afficher sur la plateforme et les utiliser à des
          fins de promotion du site (ex. : mise en avant d’un profil ou d’une
          photo sur la page d’accueil ou les réseaux sociaux).
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
        <ul>
          <strong>
            Les vendeurs (particuliers ou professionnels) sont seuls
            responsables :
          </strong>
          <li>- de leurs publications ;</li>
          <li>
            - du respect des réglementations applicables à la vente et à la
            préparation de repas (notamment normes d’hygiène et d’étiquetage) ;
          </li>
          <li>- de la qualité et de la sécurité des repas proposés ;</li>
          <li>-des informations qu’ils diffusent auprès du public;</li>
        </ul>
        <ul>
          <strong>Nou Link décline toute responsabilité :</strong>
          <li>
            -en cas d’informations fausses, illégales ou trompeuses publiées par
            un utilisateur ;
          </li>
          <li>
            -en cas de litige entre utilisateurs (vendeur, consommateur,
            visiteur) ;
          </li>
          <li>
            -en cas de dommage résultant de l’utilisation du site ou d’une
            impossibilité temporaire d’accès.
          </li>
        </ul>
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
    ul {
      margin-top: 30px;
      margin-bottom: 30px;
      strong {
        margin-bottom: 0px;
      }
      li {
        color: aliceblue;
        list-style: none;
      }
    }
  }
`;
