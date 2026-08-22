import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const Cgv = () => {
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const cgvSections = [
    {
      title: "1. Objet",
      content: `Les présentes Conditions Générales de Vente (CGV) définissent les conditions applicables à la souscription et à l’utilisation des abonnements payants proposés aux restaurants souhaitant créer, publier et gérer un profil sur la plateforme Nou Link, service exploité sous le nom commercial Loryum.

L’abonnement permet notamment au restaurant de disposer d’un profil public destiné à présenter son activité, ses informations, ses spécialités culinaires, ses images et, lorsque les fonctionnalités sont disponibles, de permettre aux utilisateurs de consulter son offre et de lui transmettre des commandes.

L’accès à l’application et la consultation des profils restent gratuits pour les utilisateurs.

Les présentes CGV concernent exclusivement les prestations et abonnements commercialisés par Nou Link auprès des restaurants.

Les commandes de repas passées par les clients auprès des restaurants constituent une relation distincte entre le client et le restaurant concerné et ne constituent pas une vente de repas par Nou Link.`,
    },

    {
      title: "2. Éditeur et contact",
      content: `Nom commercial : Loryum

Entreprise Individuelle de : JEAN-JACQUES Lodrick

Numéro SIRET : 992 781 260 00011

Adresse : 16 BIS Avenue de l’Europe, 51100 Reims, France

Email : dev.frenchlod@gmail.com

Hébergement : OVH, France`,
    },

    {
      title: "3. Souscription de l’abonnement",
      content: `La création, la publication et la gestion d’un profil restaurant nécessitent la souscription d’un abonnement payant.

L’abonnement est conclu pour une durée de 12 mois à compter de sa souscription ou de son activation.

Le restaurant doit fournir les informations nécessaires à la création de son profil et s’assurer qu’elles sont exactes, complètes et à jour.

La souscription est considérée comme effective après validation du paiement et activation du service par Nou Link.

Une confirmation de souscription et, le cas échéant, une facture sont transmises au restaurant selon les coordonnées communiquées lors de la souscription.`,
    },

    {
      title: "4. Tarif et paiement",
      content: `Le tarif de l’abonnement est celui indiqué sur le site web de Nou Link au moment de la souscription.

Les tarifs peuvent être modifiés à tout moment pour les nouvelles souscriptions. Toute modification de tarif n’affecte pas la période d’abonnement déjà payée.

Le paiement de l’abonnement restaurant est effectué sur le site web de Nou Link au moyen des solutions de paiement proposées lors de la souscription.

Le paiement de l’abonnement n’est pas effectué directement dans l’application mobile.

L’abonnement permettant au restaurant d’être référencé sur Nou Link est distinct du paiement des commandes passées par les clients.

Nou Link n’encaisse pas, dans le cadre de cet abonnement, le prix des repas commandés auprès des restaurants.

Les modalités de paiement des commandes alimentaires sont déterminées directement entre le restaurant et le client, selon les moyens de paiement proposés par le restaurant.`,
    },

    {
      title: "5. Durée et renouvellement",
      content: `L’abonnement est conclu pour une durée de 12 mois.

Aucun renouvellement automatique n’est effectué.

À l’expiration de l’abonnement, le restaurant peut souscrire une nouvelle période de 12 mois selon les tarifs et conditions en vigueur au moment du renouvellement.

Le renouvellement constitue une nouvelle souscription et nécessite une action volontaire du restaurant ainsi qu’un nouveau paiement.

En l’absence de renouvellement, le profil et les fonctionnalités réservées aux restaurants abonnés peuvent être désactivés ou ne plus être accessibles à l’expiration de la période souscrite.`,
    },

    {
      title: "6. Services inclus dans l’abonnement",
      content: `Selon les fonctionnalités proposées par Nou Link au moment de la souscription, l’abonnement peut notamment permettre au restaurant :

• de créer et publier un profil restaurant ;

• de présenter son activité et ses informations ;

• de publier des spécialités culinaires ;

• d’ajouter des descriptions et des images ;

• de gérer les informations de son profil ;

• de recevoir des commandes transmises par les clients lorsque cette fonctionnalité est disponible ;

• de suivre et gérer le statut des commandes reçues ;

• de recevoir des notifications relatives aux commandes.

Les fonctionnalités proposées peuvent évoluer au cours du temps afin d’améliorer le service.

L’abonnement ne constitue pas une garantie de visibilité, de nombre de visiteurs, de nombre de commandes, de chiffre d’affaires ou de résultats commerciaux.`,
    },

    {
      title: "7. Commandes des clients",
      content: `Lorsque la fonctionnalité de commande est disponible, les utilisateurs peuvent transmettre des commandes au restaurant depuis Nou Link.

Nou Link fournit les outils techniques permettant notamment la transmission de la commande et le suivi de son statut.

Le restaurant reste seul responsable :

• de l’acceptation ou du refus des commandes ;

• de la disponibilité des spécialités proposées ;

• de la préparation des repas ;

• de la qualité et de la conformité des produits ;

• du respect des règles d’hygiène et de sécurité alimentaire ;

• de l’exécution de la commande ;

• de la livraison lorsqu’il propose ce service ;

• des modalités de paiement proposées au client ;

• du respect de la réglementation applicable à son activité.

Nou Link n’est pas le vendeur des repas proposés par les restaurants et n’est pas responsable de leur préparation ou de leur livraison.

Tout litige relatif à une commande alimentaire doit être traité directement entre le restaurant et le client, sous réserve des droits légaux applicables.`,
    },

    {
      title: "8. Obligations du restaurant",
      content: `Le restaurant s’engage à utiliser Nou Link conformément aux présentes CGV, aux CGU et à la réglementation applicable à son activité.

Le restaurant garantit notamment :

• l’exactitude des informations publiées ;

• disposer des droits nécessaires sur les textes et images utilisés ;

• la conformité de son activité avec la réglementation applicable ;

• le respect des règles d’hygiène et de sécurité alimentaire ;

• l’exactitude des informations relatives aux spécialités, prix et disponibilités ;

• la mise à jour régulière de son profil ;

• le traitement des commandes reçues par l’intermédiaire de Nou Link ;

• le respect de ses obligations fiscales, sociales, sanitaires et commerciales.

Le restaurant doit notamment informer Nou Link de toute modification importante concernant son activité ou les informations affichées sur son profil.`,
    },

    {
      title: "9. Contenus et conformité du profil",
      content: `Le restaurant peut publier sur son profil des textes, images, spécialités, descriptions et informations relatives à son activité.

Le restaurant garantit qu’il dispose des droits nécessaires pour publier ces contenus.

Les contenus doivent être conformes à la réglementation applicable et à la thématique de Nou Link.

Tout contenu trompeur, illégal, offensant, discriminatoire, sans rapport avec l’objet de la plateforme ou portant atteinte aux droits de tiers pourra être retiré.

Nou Link peut également suspendre ou supprimer un profil en cas de manquement grave ou répété aux présentes CGV ou aux CGU.

La suspension ou la suppression peut notamment intervenir en cas de fraude, de publication de contenus interdits, de fausses informations ou d’utilisation abusive de la plateforme.

Les conséquences financières d’une suspension ou d’une suppression sont déterminées conformément aux présentes CGV et à la réglementation applicable.`,
    },

    {
      title: "10. Suspension ou suppression du profil",
      content: `Nou Link peut suspendre temporairement ou supprimer un profil lorsque cela est nécessaire notamment en cas :

• de non-paiement de l’abonnement ;

• de fraude ou tentative de fraude ;

• de violation des présentes CGV ou des CGU ;

• de publication de contenus illégaux ou trompeurs ;

• d’utilisation abusive de la plateforme ;

• de non-respect répété des règles applicables ;

• de comportement susceptible de porter atteinte à Nou Link, à ses utilisateurs ou à d’autres restaurants.

Lorsque les circonstances le permettent, Nou Link peut informer le restaurant du motif de la suspension ou de la suppression.

La suspension ou la suppression pour un motif imputable au restaurant ne constitue pas automatiquement un droit à remboursement de la période d’abonnement restante, sous réserve des dispositions légales impératives applicables.`,
    },

    {
      title: "11. Résiliation et demande de suppression",
      content: `Le restaurant peut demander la suppression de son profil et la fin de son utilisation du service en contactant Nou Link à l’adresse :

dev.frenchlod@gmail.com

La suppression du profil ne transforme pas automatiquement une période d’abonnement déjà payée en période remboursable.

En cas de résiliation anticipée à l’initiative du restaurant, aucun remboursement de la période restante n’est prévu, sous réserve des droits légaux applicables.

À l’expiration de l’abonnement, le restaurant doit procéder à une nouvelle souscription s’il souhaite continuer à bénéficier des fonctionnalités réservées aux restaurants abonnés.`,
    },

    {
      title: "12. Propriété intellectuelle",
      content: `Les éléments créés par Nou Link, notamment le logo, la charte graphique, les textes, interfaces et éléments graphiques, restent la propriété de Nou Link ou de leurs titulaires respectifs.

Le restaurant conserve ses droits sur les contenus qu’il publie.

En publiant un contenu sur Nou Link, le restaurant accorde à Nou Link une licence non exclusive, mondiale et gratuite permettant notamment son hébergement, sa reproduction, son affichage et sa diffusion dans le cadre du fonctionnement et de la promotion de la plateforme.

Cette licence peut notamment permettre la mise en avant d’un profil, d’une spécialité ou d’une image sur la plateforme ou sur les supports de communication de Nou Link.`,
    },

    {
      title: "13. Données personnelles",
      content: `Les données nécessaires à la souscription et à l’utilisation du service sont traitées conformément à la Politique de Confidentialité de Nou Link.

Les données peuvent notamment comprendre les informations nécessaires à la création et à la gestion du compte et du profil restaurant ainsi que les données nécessaires à la gestion de l’abonnement et aux communications liées au service.

Les données relatives aux commandes et aux notifications peuvent également être traitées lorsque ces fonctionnalités sont utilisées.

Les données sont conservées pendant les durées nécessaires au fonctionnement du service et au respect des obligations légales applicables.

Le restaurant dispose des droits prévus par la réglementation applicable en matière de protection des données personnelles, notamment les droits d’accès, de rectification, d’effacement, de limitation et, lorsque les conditions sont réunies, d’opposition.

Les modalités d’exercice de ces droits sont détaillées dans la Politique de Confidentialité.`,
    },

    {
      title: "14. Absence de garantie de résultats",
      content: `La souscription d’un abonnement Nou Link permet au restaurant d’accéder aux services et fonctionnalités prévus pour la période souscrite.

Elle ne constitue toutefois pas une garantie de résultat commercial.

Nou Link ne garantit notamment :

• aucun nombre minimum de visiteurs ;

• aucun nombre minimum de commandes ;

• aucun chiffre d’affaires minimum ;

• aucun classement particulier dans les résultats de recherche ;

• aucune visibilité permanente ;

• aucun nombre minimum de contacts avec les clients.

Les résultats peuvent dépendre notamment de l’activité du restaurant, des informations publiées, de la demande des utilisateurs, de la concurrence et du fonctionnement général de la plateforme.`,
    },

    {
      title: "15. Responsabilité",
      content: `Nou Link met en œuvre les moyens raisonnables permettant d’assurer le fonctionnement du service.

Toutefois, des interruptions temporaires, erreurs techniques, indisponibilités ou problèmes de connexion peuvent survenir.

Nou Link ne peut être tenue responsable des conséquences résultant d’un événement indépendant de sa volonté ou d’un cas de force majeure.

Nou Link n’est notamment pas responsable :

• des contenus publiés par les restaurants ;

• de l’activité commerciale du restaurant ;

• de la qualité ou de la sécurité des repas ;

• de la préparation ou de la livraison des commandes ;

• des modalités de paiement convenues entre le restaurant et ses clients ;

• des informations erronées communiquées par le restaurant ;

• des pertes commerciales résultant de l’utilisation ou de l’absence d’utilisation de la plateforme ;

• des interruptions temporaires du service ne résultant pas d’une faute de Nou Link.

Le restaurant demeure seul responsable du respect des réglementations applicables à son activité.`,
    },

    {
      title: "16. Droit de rétractation",
      content: `Lorsque le restaurant souscrit à distance en qualité de consommateur ou de non-professionnel, les dispositions légales relatives au droit de rétractation peuvent être applicables.

Lorsque le restaurant demande expressément que l’exécution du service commence avant l’expiration du délai légal de rétractation, les conditions et conséquences prévues par la réglementation applicable lui seront présentées au moment de la souscription.

Lorsque le restaurant agit en qualité de professionnel dans le cadre de son activité professionnelle, les règles relatives au droit de rétractation du consommateur ne s’appliquent pas automatiquement.

Les conditions applicables sont déterminées en fonction de la qualité du souscripteur et des dispositions légales en vigueur au moment de la souscription.`,
    },

    {
      title: "17. Réclamations et résolution amiable",
      content: `Pour toute question ou réclamation concernant l’abonnement, le restaurant peut contacter Nou Link à l’adresse :

dev.frenchlod@gmail.com

Nou Link s’efforcera de rechercher une solution amiable avec le restaurant avant toute procédure contentieuse.

Les réclamations relatives à une commande alimentaire, à la préparation d’un repas, à sa qualité, à sa livraison ou à son paiement doivent être adressées au restaurant concerné.`,
    },

    {
      title: "18. Modification des CGV",
      content: `Nou Link peut modifier les présentes CGV afin de tenir compte notamment de l’évolution de ses services, de ses fonctionnalités ou de la réglementation applicable.

Les nouvelles conditions sont applicables aux nouvelles souscriptions à compter de leur entrée en vigueur.

Pour les abonnements déjà souscrits, les modifications ne peuvent avoir pour effet de modifier rétroactivement les conditions essentielles de la période déjà payée, sous réserve des dispositions légales applicables.`,
    },

    {
      title: "19. Droit applicable et litiges",
      content: `Les présentes CGV sont régies par le droit français.

En cas de litige, les parties sont invitées à rechercher en priorité une solution amiable.

À défaut de résolution amiable, le litige sera soumis aux juridictions compétentes conformément aux règles de compétence applicables.

Lorsque le restaurant agit en qualité de consommateur ou de non-professionnel, les règles légales protectrices qui lui sont applicables demeurent préservées.`,
    },
  ];

  return (
    <StyledCgv>
      <BackButton onClick={() => nav(-1)}>←</BackButton>

      <Content>
        <MainTitle>Conditions Générales de Vente</MainTitle>

        <DateText>Dernière mise à jour : 12 août 2026</DateText>

        {cgvSections.map((section, index) => (
          <Section key={index}>
            <SectionTitle>{section.title}</SectionTitle>

            <Paragraph>{section.content}</Paragraph>
          </Section>
        ))}
      </Content>
    </StyledCgv>
  );
};

export default Cgv;

const StyledCgv = styled.section`
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 56px;

  background: #fff;
  padding: 20px;
  overflow-y: auto;
`;

const BackButton = styled.button`
  border: none;
  background: transparent;
  color: ${COLORS.second};
  font-size: 28px;
  cursor: pointer;
  padding: 0;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

const Content = styled.div`
  padding: 20px;
  padding-bottom: 60px;
  max-width: 1000px;
  margin: 0 auto;
`;

const MainTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${COLORS.main};
  margin: 0 0 8px;
`;

const DateText = styled.p`
  color: ${COLORS.second};
  font-weight: 600;
  margin: 0 0 20px;
`;

const Section = styled.section`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${COLORS.main};
  margin: 0 0 10px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: ${COLORS.black};
  white-space: pre-line;
  margin: 0;
`;
