import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const PolitiqueConfidentialite = () => {
  return (
    <StyledPolitiqueConfidentialite>
      <div className="box">
        <strong>Politique de confidentialité de Nou Link</strong>
        <p>
          Merci d'utiliser Nou Link, la plateforme qui met en avant les saveurs
          de l'Outre-mer autour de vous. Cette politique de confidentialité a
          pour but de vous expliquer de manière claire et transparente quelles
          données personnelles sont collectées, pourquoi et comment sont
          utilisées, stockées et protégées
        </p>
      </div>
      <div className="box">
        <h2>.1 Identité de l'éditeur</h2>
        <strong>Responsable du traitement des données :</strong>
        <p>Nom commercial : Losira</p>
        <p>Nom & Prénom : JEAN-JACQUES Lodrick</p>
        <p>Statut : Micro-entrepreneur</p>
        <p>Numéro SIRET : </p>
        <p>Email : dev.frenchlod@gmail.com</p>
        <strong>Hébergement :</strong>
        <p>Fournisseur : OVH</p>
        <p>Pays : France</p>
      </div>
      <div className="box">
        <h2>.2 Données personnelles collectées</h2>
        <p>
          Nous collectons les données suivantes uniquement dans le cadre de la
          création et de la gestion de votre profil sur Nou Link :
        </p>
        <p>- Pseudo (Nom etablissement pseudo)</p>
        <p>- Numéro de téléphone ( non public )</p>
        <p>- Ville (via géolocalisation)</p>
        <p>- Saveur (de Guyane, Guadeloupe, ect)</p>
        <p>- Spécialités culinaires saisies</p>
        <p>- Description personnelle ou prefessionnelle</p>
        <p>- Image de profil ou galerie</p>
        <strong>
          Aucune information personnelle n'est affichée publiquement, sauf
          celles que vous décidez de rendre visibles dans la description ou dans
          les champs visibles du profil.
        </strong>
        <strong>
          La collecte et le traitement de vos données sont nécessaires à
          l’exécution du contrat (abonnement et publication de profil) et au
          respect de nos obligations légales.
        </strong>
      </div>
      <div className="box">
        <h2>.3 Abonnement annuel et conservation des données</h2>
        <p>
          La création et la publication d’un profil nécessitent un paiement
          unique pour une durée d’un an.
        </p>
        <p>
          À l’issue de cette période, l’utilisateur peut choisir de renouveler
          le paiement pour une année supplémentaire afin de continuer à publier
          et gérer son profil.
        </p>
        <p>
          Vos données sont conservées tant que votre profil est actif. Vous
          pouvez demander la suppression de votre profil ou de vos données à
          tout moment en contactant : dev.frenchlod@gmail.com .
        </p>
        <p>
          Nous procéderons à la suppression de vos données à l'expiration de
          l'abonnement, sauf si vous décidez de renouveler votre profil pour une
          nouvelle année.
        </p>
      </div>
      <div className="box">
        <h2>.4 Utilisation de Google Analytics</h2>
        <p>
          Nous utilisons Google Analytics afin de suivre l'activité générale du
          site (nombre de visites, durée de session, pages consultées). Ces
          données sont anonymes et ne permettent pas de vous identifier
          personnellement.
        </p>
        <p>
          Les données de fréquentation anonymes collectées via cet outil sont
          conservées pour une durée maximale de 6 mois, conformément aux
          recommandations de la CNIL. Vous pouvez refuser ce suivi à tout moment
          en nous contactant.
        </p>
      </div>
      <div className="box">
        <h2>.5 Durée de conversation</h2>
        <p>
          Vos données sont conservées aussi longtemps que votre profil reste
          actif. Vous pouvez demander la suppression de votre profil à tout
          moment en contactant : dev.frenchlod@gmail.com
        </p>
      </div>
      <div className="box">
        <h2>.6 Droits des utilisateurs</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <p>- Accès à vos données</p>
        <p>- Rectification</p>
        <p>- Suppression</p>
        <p>- Limitation du traitement</p>
        <p>Pour exercer vos droits, contactez : dev.frenchlod@gmail.com</p>
      </div>
      <div className="box">
        <h2>.7 Sécurité</h2>
        <p>
          Nous mettons en place des mesures techniques pour protéger vos données
          personnelles contre tout accès non autorisé, perte ou divulgation.
        </p>
        <p>
          Cependant, malgré tous nos efforts pour sécuriser la plateforme, aucun
          système n'est totalement à l'abri des intrusions ou actes
          malveillants. Nous vous encourageons à rester vigilants et à nous
          signaler toute activité suspecte.
        </p>
      </div>
      <div className="box">
        <h2>.8 Modifications</h2>
        <p>
          Nous pouvons mettre à jour cette politique de confidentialité. En cas
          de modification importante, vous serez notifié par un message visible
          sur le site.
        </p>
      </div>
      <div className="box">
        <p>Pour toute question : dev.frenchlod@gmail.com</p>
      </div>
    </StyledPolitiqueConfidentialite>
  );
};

export default PolitiqueConfidentialite;

const StyledPolitiqueConfidentialite = styled.section`
  background: ${COLORS.main};
  margin: 100px auto;
  padding: 20px;
  width: 80%;
  border-radius: 20px;
  .box {
    margin: 30px 0px;
    strong {
      font-size: 1.3em;
      color: ${COLORS.green};
    }
    p {
      color: aliceblue;
    }
  }
`;
