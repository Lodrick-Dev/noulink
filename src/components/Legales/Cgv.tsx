import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useEffect } from "react";

const Cgv = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <StyledCgv>
      <div>
        <h1>Conditions Générales de Vente (CGV) de Nou Link</h1>
      </div>
      <span>Dernière mise à jour : 19 octobre 2025</span>
      <div>
        <h2>.1 Objet</h2>
        <p>
          Les présentes Conditions Générales de Vente (CGV) définissent les
          modalités de souscription, d’utilisation et de facturation des
          abonnements annuels payants permettant de créer et publier un profil
          sur la plateforme Nou Link (service exploité sous le nom commercial
          Loryum).
        </p>
        <p>
          Nou Link permet aux particuliers et professionnels de publier un
          profil mettant en avant leurs spécialités culinaires.
        </p>
        <p>L’accès au site pour la consultation reste gratuit.</p>
        <p>
          La création, la publication et la gestion d’un profil sont réservées
          aux utilisateurs disposant d’un abonnement annuel payant
        </p>
      </div>
      <div>
        <h2>.2 Editeur et contact</h2>
        <p>Nom commercial : Loryum</p>
        <p>Entreprise Individuelle de : JEAN-JACQUES Lodrick</p>
        <p>Numéro SIRET : 992 781 260 00011</p>
        <p>Adresse : 16 BIS Avenue de l’Europe, 51100 Reims, France</p>
        <p>Email : dev.frenchlod@gmail.com</p>
        <p>Hébergement : OVH, France</p>
      </div>
      <div>
        <h2>.3 Abonnement annuel</h2>
        <p>
          {" "}
          <strong>Accès payant : </strong>La création et la publication d’un
          profil nécessitent un paiement unique pour une durée de 12 mois.
        </p>
        <p>
          {" "}
          <strong>Renouvellement :</strong>L’utilisateur peut renouveler son
          abonnement pour une nouvelle période de 12 mois selon les tarifs en
          vigueur au moment du renouvellement. Aucun renouvellement automatique
          n’est effectué sans action de l’utilisateur.
        </p>
        <p>
          Le renouvellement se fait selon les modalités et tarifs en vigueur au
          moment du paiement.
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
          effective qu’après validation du paiement. Une facture est émise et
          envoyée par email après chaque paiement.
        </p>
      </div>
      <div>
        <h2>.4 Modalités de création et gestion du profil</h2>
        <strong>
          Chaque utilisateur abonné peut créer un profil public contenant :
        </strong>
        <p>Pseudo ou nom</p>
        <p>Description personnelle ou professionnelle/ Contact</p>
        <p>Liste de spécialités culinaires</p>
        <p>Images et galerie</p>
        <strong>
          L’utilisateur est responsable de l’exactitude des informations qu’il
          publie. Toute information trompeuse, inappropriée, illégale ou
          contrevenant aux règles de Nou Link (ex. publicité pour des
          concurrents non autorisés) peut entraîner la suspension ou la
          suppression du profil sans remboursement.
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
        <hr />
        <p>
          En cas de suppression du profil pour non-conformité avec la thématique
          du site (ex. publication de contenus étrangers à l’Outre-mer), aucun
          remboursement ne sera effectué, même si l’abonnement est encore en
          cours.
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
          Les données collectées lors de la souscription (nom, email,
          description, images, etc.) sont traitées conformément à la Politique
          de Confidentialité de Nou Link, rédigée en conformité avec le
          Règlement Général sur la Protection des Données (RGPD).
        </p>
        <p>
          Elles sont conservées pendant la durée de l’abonnement, puis
          supprimées ou anonymisées à son expiration, sauf obligation légale
          contraire.
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
          <strong>Absence de garantie de performance :</strong> Nou Link
          (Loryum) ne garantit pas la visibilité, le trafic ou les résultats
          commerciaux liés à la publication d’un profil.
        </p>
        <ul>
          <strong>Nou Link ne saurait être tenue responsable :</strong>
          <li>- des informations publiées par les utilisateurs,</li>
          <li>
            - de la qualité, de la conformité ou de la sécurité des repas
            proposés par les vendeurs,
          </li>
          <li>
            - des pertes de données ou interruptions temporaires du service.
          </li>
        </ul>
        <p>
          Les utilisateurs sont responsables du respect des réglementations
          applicables à la préparation et à la vente de repas (hygiène, sécurité
          alimentaire, étiquetage, etc.).
        </p>
      </div>
      <div>
        <h2>.9 Droit de rétractation</h2>
        <p>
          Conformément à l’article L221-28 du Code de la Consommation,
          l’utilisateur reconnaît et accepte que le service (création et mise en
          ligne du profil, accès aux outils et à la visibilité sur la
          plateforme) commence immédiatement après le paiement.
        </p>
        <p>
          Dès lors, l’utilisateur renonce expressément à son droit de
          rétractation, et aucun remboursement ne pourra être exigé au titre de
          ce délai légal de 14 jours.
        </p>
      </div>
      <div>
        <h2>.Résolution amiable des litiges</h2>
        <p>
          En cas de litige ou de réclamation concernant un abonnement ou
          l’utilisation de la plateforme, l’utilisateur est invité à contacter
          Nou Link par email à : dev.frenchlod@gmail.com pour rechercher une
          solution amiable.
        </p>
      </div>
      <div>
        <h2>.11 Modification des CGV</h2>
        <p>
          Nou Link se réserve le droit de modifier les présentes CGV à tout
          moment. Les modifications s’appliquent uniquement aux nouvelles
          souscriptions et seront communiquées sur la plateforme.
        </p>
      </div>
      <div>
        <h2>.12 Litiges et droit applicable</h2>
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
      color: ${COLORS.green};
    }
    h2 {
      color: ${COLORS.green};
    }
    strong {
      display: block;
      color: ${COLORS.yellow};
    }
    p {
      margin-top: 10px;
      color: aliceblue;
    }
    ul {
      margin-top: 30px;
      li {
        color: aliceblue;
        list-style: none;
      }
    }
  }
`;
