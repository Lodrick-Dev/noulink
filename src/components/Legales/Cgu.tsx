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
          Nou Link est une plateforme gratuite destinée à mettre en avant les
          spécialités culinaires de l'Outre-mer. Elle permet aux utilisateurs de
          référencer un profil (pseudo, description, spécialités, images) qui
          sera visible publiquement.
        </p>
      </div>
      <div>
        <h2>.2 Accès au site</h2>
        <p>
          L'accès à Nou Link est gratuit et ouvert à tous. Toutefois, certaines
          fonctionnalités (comme la publication d'un profil) nécessitent une
          vérification par SMS via un code unique.
        </p>
        <p>
          L'utilisateur est responsable de l'exactitude des informations qu'il
          fournit. En cas d'informations trompeuses ou inappropriées, Nou Link
          se réserve le droit de suspendre ou supprimer le profil concerné.
        </p>
        <p>
          Pour garantir la pertinence des profils visibles sur Nou Link, tout
          compte doit être actualisé au moins une fois tous les 5 mois. Passé ce
          délai sans activité, le compte sera automatiquement supprimé. Cela
          permet d’éviter que des visiteurs essaient de contacter des
          établissements qui ne sont plus actifs dans la réalité.
        </p>
      </div>
      <div>
        <h2>.3 Données personnelles</h2>
        <p>
          L'utilisation de Nou Link implique la collecte de certaines données
          (téléphone, ville, description, etc.). Celles-ci sont traitées
          conformément à notre{" "}
          <span onClick={() => nav("/politique-confidentialite")}>
            Politique de Confidentialité.
          </span>
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
          Nous nous réservons le droit de modérer ou supprimer tout contenu
          contraire à ces règles.
        </strong>
      </div>
      <div>
        <h2>.5 Proprité intellectuelle</h2>
        <p>
          Tous les contenus de la plateforme (logo, charte graphique, textes,
          etc.) sont la propriété de Nou Link. Toute reproduction, totale ou
          partielle, est interdite sans autorisation préalable.
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
