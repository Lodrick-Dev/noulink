import { useEffect } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const privacySections = [
    {
      title: "1. Identité du responsable du traitement",
      content: `Responsable du traitement des données personnelles :

Nom commercial : Loryum

Entreprise individuelle de : JEAN-JACQUES Lodrick

Numéro SIRET : 992 781 260 00011

Adresse : 16 BIS Avenue de l’Europe, 51100 Reims, France

Email : dev.frenchlod@gmail.com

Hébergement :

Fournisseur : OVH

Pays : France

Nou Link, exploité sous le nom commercial Loryum, est responsable du traitement des données personnelles collectées dans le cadre de l'utilisation de la plateforme et de ses services.

Les traitements sont réalisés conformément au Règlement Général sur la Protection des Données (RGPD), à la loi Informatique et Libertés et aux dispositions applicables en France.`,
    },

    {
      title: "2. Données personnelles collectées",
      content: `Selon votre utilisation de Nou Link, différentes catégories de données peuvent être collectées.

Pour les utilisateurs et clients :

• Identifiant de compte ;
• Adresse email ;
• Pseudo ;
• Ville ;
• Coordonnées de contact lorsque celles-ci sont renseignées ;
• Informations nécessaires au fonctionnement du compte.

Pour les restaurants :

• Pseudo ou nom de l'établissement ;
• Ville ;
• Coordonnées de contact ;
• Description ;
• Spécialités culinaires ;
• Images de profil et galerie ;
• Informations nécessaires à la gestion du profil et de l'abonnement.

Lorsqu'un client passe une commande, les informations nécessaires à son traitement peuvent notamment comprendre :

• Identifiant du client ;
• Pseudo ;
• Ville ;
• Rue ou adresse renseignée pour la commande ;
• Coordonnées de contact ;
• Contenu de la commande ;
• Quantités commandées ;
• Prix des articles ;
• Montant total ;
• Choix relatif à la livraison ;
• Historique et statut de la commande.

Les informations nécessaires au traitement d'une commande peuvent être communiquées au restaurant concerné afin de permettre la préparation et, lorsque cela est prévu, la livraison de la commande.

Les informations affichées publiquement sur un profil sont limitées aux informations que l'utilisateur choisit de publier dans les champs prévus à cet effet.`,
    },

    {
      title: "3. Notifications et données techniques",
      content: `Nou Link utilise un service de notifications push afin de permettre l'envoi de notifications liées au fonctionnement du service.

Lorsque vous autorisez les notifications sur votre appareil, Nou Link peut enregistrer un identifiant technique de notification, appelé token FCM (Firebase Cloud Messaging).

Ce token permet d'identifier le terminal ou l'installation de l'application auprès du service de notification afin de pouvoir lui transmettre une notification.

Pour les restaurants, les notifications peuvent notamment être utilisées pour signaler la réception d'une nouvelle commande.

Pour les clients, les notifications peuvent notamment être utilisées pour informer de l'évolution du statut d'une commande.

Le token FCM n'est pas utilisé pour vous envoyer de la publicité personnalisée.

Lorsque le token n'est plus nécessaire ou devient invalide, Nou Link peut le supprimer de ses bases de données.

Les notifications peuvent être désactivées à tout moment depuis les paramètres de votre appareil, selon les fonctionnalités proposées par le système d'exploitation.`,
    },

    {
      title: "4. Finalités des traitements",
      content: `Les données personnelles sont collectées et utilisées uniquement pour les finalités nécessaires au fonctionnement de Nou Link, notamment :

• Création et gestion des comptes utilisateurs ;
• Création, publication et gestion des profils de restaurants ;
• Recherche et consultation des restaurants et spécialités ;
• Gestion des commandes passées par les clients ;
• Transmission des informations nécessaires au traitement des commandes aux restaurants concernés ;
• Gestion des statuts des commandes ;
• Envoi de notifications relatives aux commandes ;
• Gestion des abonnements des restaurants ;
• Gestion de la sécurité des comptes et de la plateforme ;
• Prévention des utilisations frauduleuses ou abusives ;
• Assistance et communication avec les utilisateurs ;
• Respect des obligations légales et réglementaires.

Les données sont traitées uniquement dans la mesure nécessaire à ces finalités, conformément au principe de minimisation des données.`,
    },

    {
      title: "5. Commandes et relation entre clients et restaurants",
      content: `Nou Link permet aux clients de préparer et transmettre des commandes aux restaurants présents sur la plateforme.

Lorsqu'une commande est passée, les informations nécessaires à son traitement sont transmises au restaurant concerné.

Le restaurant peut ainsi accéder aux informations nécessaires à la préparation de la commande et, lorsque le client demande une livraison, aux informations nécessaires à celle-ci.

Les données relatives à une commande peuvent notamment comprendre les articles commandés, les quantités, les prix, le montant total, le choix de livraison ainsi que certaines informations de contact ou de livraison renseignées par le client.

Nou Link conserve également les informations nécessaires au suivi et à l'historique des commandes.

Nou Link agit en tant que plateforme de mise en relation et de gestion technique des commandes. Le restaurant reste responsable du traitement de la commande, de la préparation des repas, de leur conformité et de la relation avec le client dans le cadre de la commande.`,
    },

    {
      title: "6. Paiement des abonnements restaurants",
      content: `Les restaurants doivent disposer d'un abonnement payant pour bénéficier de la visibilité et des fonctionnalités associées à leur profil, selon les conditions et tarifs en vigueur.

La souscription et le paiement de cet abonnement sont effectués sur le site web de Nou Link et non directement dans l'application mobile.

Les paiements sont traités par le prestataire de paiement utilisé par Nou Link.

Nou Link ne stocke pas les données complètes de carte bancaire des utilisateurs.

Les informations nécessaires au suivi de l'abonnement, telles que l'identification du compte, la période d'abonnement, le statut du paiement ou les informations de facturation nécessaires, peuvent être conservées afin d'assurer la gestion du service et de respecter les obligations légales et comptables applicables.`,
    },

    {
      title: "7. Base légale des traitements",
      content: `Selon le traitement concerné, les données personnelles sont traitées sur différentes bases légales prévues par le RGPD.

Notamment :

• L'exécution du contrat : pour la création et la gestion du compte, la gestion des commandes et l'utilisation des fonctionnalités de la plateforme ;

• L'exécution de mesures précontractuelles : lorsque cela est nécessaire avant la souscription d'un abonnement ou l'utilisation d'un service ;

• Le consentement : notamment lorsque celui-ci est nécessaire pour certaines permissions ou fonctionnalités, telles que les notifications ou certains traceurs ;

• Le respect d'une obligation légale : notamment pour certaines obligations comptables, fiscales ou administratives ;

• L'intérêt légitime de Nou Link : notamment pour assurer la sécurité de la plateforme, prévenir les abus et améliorer le fonctionnement du service, dans le respect des droits et libertés des personnes concernées.`,
    },

    {
      title: "8. Géolocalisation",
      content: `Nou Link peut utiliser des informations relatives à la ville ou à la localisation approximative afin de proposer des contenus pertinents en fonction de la zone géographique de l'utilisateur.

Nou Link ne conserve pas d'historique de déplacements ni de position GPS précise lorsque ces données ne sont pas nécessaires au fonctionnement du service.

Lorsque l'application demande une autorisation d'accès à la localisation, celle-ci peut être refusée ou modifiée à tout moment depuis les paramètres du téléphone.

Nou Link limite la collecte des données de localisation aux informations nécessaires aux fonctionnalités proposées.`,
    },

    {
      title: "9. Google Analytics et mesure d'audience",
      content: `Le site web de Nou Link peut utiliser Google Analytics afin de mesurer l'audience et de comprendre l'utilisation générale du site.

Lorsque des traceurs nécessitant un consentement sont utilisés, ils sont soumis aux règles applicables en matière de consentement aux cookies et autres traceurs.

Les données collectées peuvent notamment concerner les pages consultées, les interactions avec le site, le type de terminal utilisé et certaines informations techniques.

Les données de mesure d'audience ne sont utilisées que pour les finalités indiquées lors de leur collecte et ne sont pas utilisées par Nou Link pour vendre les données personnelles des utilisateurs.`,
    },

    {
      title: "10. Cookies et traceurs",
      content: `Le site web de Nou Link peut utiliser des cookies ou autres traceurs nécessaires à son fonctionnement et, lorsque cela est applicable, des traceurs destinés à mesurer l'audience.

Les traceurs strictement nécessaires au fonctionnement du service peuvent être utilisés sans consentement lorsqu'ils répondent aux conditions prévues par la réglementation.

Les traceurs nécessitant le consentement de l'utilisateur ne sont activés qu'après obtention de celui-ci.

L'utilisateur peut gérer ou retirer son consentement lorsque cette possibilité est proposée par Nou Link.

Les paramètres du navigateur permettent également de gérer certains cookies.`,
    },

    {
      title: "11. Destinataires et prestataires",
      content: `Les données personnelles peuvent être accessibles uniquement aux personnes ou prestataires qui en ont besoin pour assurer le fonctionnement de Nou Link.

Selon les fonctionnalités utilisées, les catégories de destinataires peuvent notamment comprendre :

• Nou Link / Loryum ;
• Les restaurants concernés par une commande ;
• Les prestataires d'hébergement et d'infrastructure technique ;
• Les prestataires de paiement ;
• Les prestataires nécessaires à l'envoi des emails et notifications ;
• Les prestataires techniques nécessaires au fonctionnement de la plateforme ;
• Les autorités administratives ou judiciaires lorsque la loi l'exige.

Les prestataires auxquels Nou Link fait appel sont sélectionnés en fonction des services fournis et des exigences applicables en matière de protection et de sécurité des données.`,
    },

    {
      title: "12. Durée de conservation",
      content: `Nou Link ne conserve pas les données personnelles indéfiniment.

Les données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées.

Les données liées au compte et au profil sont conservées aussi longtemps que le compte ou le profil reste actif, sous réserve des obligations légales applicables.

Les données relatives aux commandes peuvent être conservées pendant la durée nécessaire au suivi du service, à la gestion des éventuels litiges et au respect des obligations légales.

Les données liées à la facturation et aux paiements peuvent être conservées pendant les durées imposées par les obligations comptables, fiscales ou légales.

Les tokens FCM sont conservés aussi longtemps qu'ils sont nécessaires à l'envoi des notifications. Lorsqu'un token devient invalide ou n'est plus nécessaire, il peut être supprimé.

Lorsque les données ne sont plus nécessaires, elles sont supprimées ou, lorsque cela est approprié, anonymisées conformément aux obligations applicables.`,
    },

    {
      title: "13. Sécurité",
      content: `Nou Link met en œuvre des mesures techniques et organisationnelles destinées à protéger les données personnelles contre les accès non autorisés, la perte, l'altération, la divulgation ou la destruction.

Les communications avec les serveurs sont sécurisées par des mécanismes adaptés.

L'accès aux données est limité aux personnes et services qui en ont besoin pour assurer le fonctionnement de la plateforme.

Malgré les mesures mises en œuvre, aucun système informatique ne peut garantir une sécurité absolue.

En cas d'incident de sécurité susceptible d'engendrer un risque pour les personnes concernées, Nou Link prendra les mesures nécessaires conformément à la réglementation applicable.`,
    },

    {
      title: "14. Droits des utilisateurs",
      content: `Conformément au RGPD, vous disposez notamment des droits suivants :

• Droit d'accès à vos données personnelles ;

• Droit de rectification des données inexactes ou incomplètes ;

• Droit à l'effacement de vos données dans les conditions prévues par la réglementation ;

• Droit à la limitation du traitement ;

• Droit d'opposition à certains traitements ;

• Droit à la portabilité de certaines données ;

• Droit de retirer votre consentement lorsque le traitement est fondé sur celui-ci.

Pour exercer vos droits, vous pouvez contacter Nou Link à l'adresse :

dev.frenchlod@gmail.com

Vous pouvez également modifier ou retirer certaines autorisations directement depuis les paramètres de votre appareil, notamment concernant les notifications et, lorsque cela est applicable, la localisation.`,
    },

    {
      title: "15. Réclamation auprès de la CNIL",
      content: `Si vous estimez, après avoir contacté Nou Link, que vos droits concernant vos données personnelles ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL), autorité française de protection des données.`,
    },

    {
      title: "16. Modifications de la politique de confidentialité",
      content: `Nou Link peut modifier la présente Politique de confidentialité afin de tenir compte de l'évolution de ses services, de ses fonctionnalités ou de la réglementation applicable.

En cas de modification importante affectant les droits ou les conditions de traitement des données personnelles, Nou Link pourra en informer les utilisateurs par les moyens appropriés.

La date indiquée en haut de cette politique permet de connaître sa dernière mise à jour.

Pour toute question concernant cette politique :

dev.frenchlod@gmail.com`,
    },
  ];

  return (
    <StyledPolitiqueConfidentialite>
      <div className="legal-content">
        <h1>Politique de confidentialité</h1>

        <span className="date">Dernière mise à jour : 12 août 2026</span>

        <p className="intro">
          Merci d'utiliser Nou Link, la plateforme qui permet de découvrir des
          restaurants et spécialités culinaires de l'Outre-mer et, lorsque cette
          fonctionnalité est disponible, de préparer et transmettre des
          commandes aux restaurants présents sur la plateforme. Cette politique
          explique quelles données personnelles sont collectées, pourquoi elles
          sont utilisées, avec qui elles peuvent être partagées et pendant
          combien de temps elles sont conservées.
        </p>

        {privacySections.map((section, index) => (
          <div className="section" key={index}>
            <h2>{section.title}</h2>

            <p className="paragraph">{section.content}</p>
          </div>
        ))}
      </div>
    </StyledPolitiqueConfidentialite>
  );
};

export default PolitiqueConfidentialite;

const StyledPolitiqueConfidentialite = styled.section`
  background: #fff;
  min-height: calc(100vh - 112px);
  padding: 40px 20px 80px;
  width: 100%;
  box-sizing: border-box;

  .legal-content {
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${COLORS.main};
    margin: 0 0 8px;
  }

  .date {
    display: block;
    color: ${COLORS.second};
    font-weight: 600;
    margin-bottom: 20px;
  }

  .intro,
  .paragraph {
    font-size: 15px;
    line-height: 25px;
    color: ${COLORS.black};
    white-space: pre-line;
    margin: 0;
  }

  .intro {
    margin-bottom: 30px;
  }

  .section {
    margin-bottom: 24px;
  }

  .section h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${COLORS.main};
    margin: 0 0 10px;
  }

  @media (max-width: 768px) {
    padding: 30px 15px 60px;

    .legal-content {
      width: 100%;
    }

    h1 {
      font-size: 22px;
    }

    .section h2 {
      font-size: 17px;
    }

    .intro,
    .paragraph {
      font-size: 15px;
      line-height: 24px;
    }
  }
`;
