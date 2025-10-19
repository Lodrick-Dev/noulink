import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useEffect } from "react";

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <StyledPolitiqueConfidentialite>
      <span>Dernière mise à jour : 2 octobre 2025</span>
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
        <p>Nom commercial : Loryum</p>
        <p>Entreprise Individuelle de : JEAN-JACQUES Lodrick</p>
        <p>Numéro SIRET : 992 781 260 00011</p>
        <p>Adresse : 16 BIS Avenue de l’Europe, 51100 Reims, France</p>
        <p>Email : dev.frenchlod@gmail.com</p>
        <strong>Hébergement :</strong>
        <p>Fournisseur : OVH</p>
        <p>Pays : France</p>
        <p>Site web : www.ovh.com</p>
        <strong>
          Nou Link (Loryum) est responsable du traitement des données
          personnelles collectées sur la plateforme, conformément au Règlement
          Général sur la Protection des Données (RGPD) et à la législation
          française (Loi Informatique et Libertés).
        </strong>
        <p>
          <strong>Responsable du traitement :</strong> JEAN-JACQUES Lodrick,
          exploitant de l’entreprise individuelle <em>Loryum</em> (nom
          commercial).
        </p>
        <p>
          Les données personnelles collectées sont traitées dans le cadre de la
          gestion des profils utilisateurs, des abonnements et de la sécurité du
          site.
        </p>
      </div>
      <div className="box">
        <h2>.2 Données personnelles collectées</h2>
        <p>
          Nous collectons les données suivantes uniquement dans le cadre de la
          création et de la gestion de votre profil sur Nou Link :
        </p>
        <p>- Pseudo (Nom etablissement pseudo)</p>
        <p>- Ville (via géolocalisation)</p>
        <p>- Saveur (de Guyane, Guadeloupe, ect)</p>
        <p>- Spécialités culinaires saisies</p>
        <p>- Description personnelle ou professionnelle</p>
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
        <strong>
          Les paiements effectués sur Nou Link sont traités de manière sécurisée
          par notre prestataire de paiement. Aucune donnée bancaire n’est
          stockée par Nou Link.
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
        <p>
          Le traitement de vos données est fondé sur l’exécution du contrat
          d’abonnement et sur votre consentement pour les éléments de
          personnalisation du profil
        </p>
      </div>
      <div className="box">
        <h2>.4 Utilisation de Google Analytics</h2>
        <p>
          Nous utilisons Google Analytics afin de suivre l'activité générale du
          site (nombre de visites, durée de session, pages consultées). Ces
          données sont anonymes et ne permettent pas de vous identifier
          personnellement conformément aux recommandations de la CNIL.
        </p>
        <p>
          Les données de fréquentation anonymes collectées via cet outil sont
          conservées pour une durée maximale de 6 mois, conformément aux
          recommandations de la CNIL. Vous pouvez refuser ce suivi à tout moment
          en nous contactant.
        </p>
        <p>
          Lors de votre première visite, un bandeau d’information permet de
          gérer votre consentement à l’utilisation des cookies analytiques.
        </p>
      </div>
      <div className="box">
        <h2>.5 Cookies</h2>
        <ul>
          <strong>
            Pour améliorer l’expérience utilisateur et analyser l’audience, Nou
            Link utilise des cookies :
          </strong>
          <li>
            -Cookies analytiques : Google Analytics (anonymisation activée) pour
            suivre la fréquentation.
          </li>
          <li>
            -Cookies de géolocalisation : pour permettre la localisation
            approximative des utilisateurs et afficher des contenus pertinents
            selon leur ville ou région.
          </li>
        </ul>
        <p>
          Ces cookies ne collectent pas de données personnelles identifiables.
        </p>
        <ul>
          <strong>Consentement : </strong>
          <li>
            -En continuant à naviguer sur le site, vous acceptez l’utilisation
            de ces cookies.
          </li>
          <li>
            -Vous pouvez refuser ou supprimer les cookies via les paramètres de
            votre navigateur.
          </li>
        </ul>
        <p>Pour toute question sur les cookies : dev.frenchlod@gmail.com</p>
      </div>
      <div className="box">
        <h2>.6 Durée de conversation</h2>
        <p>
          Vos données sont conservées aussi longtemps que votre profil reste
          actif. Vous pouvez demander la suppression de votre profil à tout
          moment en contactant : dev.frenchlod@gmail.com
        </p>
      </div>
      <div className="box">
        <h2>.7 Droits des utilisateurs</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <p>- Accès à vos données</p>
        <p>- Rectification</p>
        <p>- Suppression</p>
        <p>- Limitation du traitement</p>
        <p>Pour exercer vos droits, contactez : dev.frenchlod@gmail.com</p>
      </div>
      <div className="box">
        <h2>.8 Sécurité</h2>
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
        <h2>.9 Modifications</h2>
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
    ul {
      margin-top: 30px;
      margin-bottom: 30px;
      li {
        list-style: none;
        color: aliceblue;
      }
    }
  }
`;
