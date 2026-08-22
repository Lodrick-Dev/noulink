import { useEffect } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";

type CguSection = {
  title: string;
  content: string;
};

const cguSections: CguSection[] = [
  {
    title: "1. Présentation du service",
    content: `Nou Link (service exploité sous le nom commercial Loryum) est une plateforme destinée à mettre en avant les spécialités culinaires de l’Outre-mer et à faciliter la mise en relation entre les clients et les restaurants référencés sur la plateforme.

L’application permet notamment aux utilisateurs de rechercher et consulter des restaurants, leurs spécialités, leurs informations, leurs photos et leurs coordonnées.

Les utilisateurs peuvent également, lorsque la fonctionnalité est disponible chez un restaurant, constituer un panier et transmettre une commande au restaurant concerné.

La création, la publication et la gestion d’un profil restaurant permettant de présenter une offre de repas sont soumises à un abonnement payant. Le tarif applicable est celui en vigueur au moment de la souscription.

Le paiement de l’abonnement du restaurant est effectué sur le site web de Nou Link et non directement dans l’application mobile. Les modalités, tarifs, durée et conditions de l’abonnement sont précisés dans les Conditions Générales de Vente (CGV).

Un profil restaurant peut notamment contenir un pseudo, une description, une liste de spécialités, des images, une localisation ainsi que des coordonnées de contact.

Chaque restaurant est responsable de l’exactitude, de la mise à jour et de la légalité des informations et contenus qu’il publie.

Nom commercial : Loryum

Entreprise Individuelle de : JEAN-JACQUES Lodrick

Numéro SIRET : 992 781 260 00011

Adresse : 16 BIS Avenue de l’Europe, 51100 Reims, France

Email : dev.frenchlod@gmail.com

Hébergement :

Fournisseur : OVH

Pays : France

Site web : www.ovh.com`,
  },

  {
    title: "2. Accès et utilisation du service",
    content: `L’accès à Nou Link est gratuit pour les utilisateurs souhaitant consulter les restaurants et leurs offres.

La création, la publication et la gestion d’un profil restaurant nécessitent la souscription d’un abonnement payant selon les conditions prévues dans les Conditions Générales de Vente.

L’utilisateur déclare :

• avoir au moins 18 ans, ou être autorisé par un représentant légal ;

• fournir des informations exactes et à jour ;

• ne pas utiliser Nou Link à des fins frauduleuses ou illégales ;

• ne pas publier de contenu trompeur, inapproprié, illégal ou contraire aux présentes conditions.

L’utilisateur est responsable de l’exactitude et de la mise à jour des informations qu’il fournit.

En cas d’informations trompeuses, inappropriées, illégales ou contraires aux règles de Nou Link, notamment en cas de fraude ou de contenu sans rapport avec l’objet de la plateforme, Nou Link se réserve le droit de suspendre ou supprimer le compte ou le profil concerné, dans les conditions prévues par les CGU et les CGV.

L’inscription et l’utilisation des fonctionnalités de Nou Link impliquent l’acceptation pleine et entière des présentes CGU et, lorsqu’elles sont applicables, des CGV.`,
  },

  {
    title: "3. Commandes passées auprès des restaurants",
    content: `Nou Link permet aux utilisateurs de transmettre une commande à un restaurant référencé lorsque celui-ci propose cette fonctionnalité.

Lorsqu’un client valide une commande, celle-ci est transmise au restaurant concerné afin qu’il puisse la traiter.

Nou Link agit comme intermédiaire technique permettant notamment la présentation de l’offre, la transmission de la commande et le suivi de son statut.

Le restaurant reste responsable de l’exécution de la commande, notamment :

• de l’acceptation ou du refus de la commande ;

• de la préparation des repas ;

• de la conformité des produits et spécialités proposés ;

• de la qualité et de la sécurité des repas ;

• du respect des règles d’hygiène et de sécurité alimentaire ;

• du respect des informations communiquées au client ;

• de la disponibilité réelle des produits proposés.

Les informations affichées concernant les spécialités, leurs prix, leur disponibilité ou les conditions de livraison sont fournies par les restaurants et peuvent évoluer.

Le client doit vérifier les informations de sa commande avant sa validation.

Nou Link ne prépare pas les repas et n’est pas le vendeur des produits proposés par les restaurants référencés.`,
  },

  {
    title: "4. Paiement des commandes",
    content: `La fonctionnalité de commande disponible dans l’application permet actuellement au client de transmettre sa commande au restaurant.

Nou Link n’encaisse pas le paiement de la commande alimentaire dans l’application.

Les modalités de paiement de la commande sont déterminées directement entre le client et le restaurant concerné, selon les moyens de paiement proposés par celui-ci.

Le restaurant est responsable de communiquer au client les conditions applicables au paiement de sa commande ainsi que, le cas échéant, les informations nécessaires à son règlement.

L’abonnement permettant au restaurant d’être référencé et de bénéficier des fonctionnalités associées est distinct du paiement des commandes passées par les clients.

Le paiement de l’abonnement restaurant est effectué sur le site web de Nou Link et non dans l’application mobile.`,
  },

  {
    title: "5. Livraison et retrait des commandes",
    content: `Lorsqu’un restaurant propose une option de livraison, celle-ci peut être sélectionnée par le client lors de la commande.

La disponibilité de la livraison dépend du restaurant concerné et des conditions qu’il applique.

Le restaurant est responsable de l’organisation et de l’exécution de la livraison lorsqu’il propose ce service.

Nou Link ne garantit pas les délais de préparation ou de livraison indiqués par le restaurant et ne peut être tenue responsable d’un retard, d’une impossibilité de livraison ou d’un problème lié à l’exécution de celle-ci, lorsque celui-ci relève du restaurant ou d’un événement indépendant de Nou Link.

Lorsque la commande est prévue pour un retrait, le client doit respecter les indications communiquées par le restaurant.`,
  },

  {
    title: "6. Suivi des commandes et notifications",
    content: `Nou Link permet au client de suivre l’évolution du statut de ses commandes depuis l’application.

Le client peut notamment être informé de changements de statut tels que l’attente, la préparation, la disponibilité ou la livraison de la commande, selon les fonctionnalités disponibles.

Des notifications peuvent être envoyées sur l’appareil de l’utilisateur afin de l’informer de l’évolution d’une commande.

Le fonctionnement des notifications dépend notamment des autorisations accordées par l’utilisateur, de la connexion Internet, du fonctionnement du système d’exploitation de l’appareil et des services de notification utilisés.

Nou Link ne garantit donc pas la réception immédiate ou systématique de chaque notification.

L’utilisateur peut gérer les autorisations de notification depuis les réglages de son appareil.`,
  },

  {
    title: "7. Données personnelles",
    content: `L’utilisation de Nou Link implique la collecte de certaines données nécessaires au fonctionnement du service.

Dans le cadre des commandes, certaines informations peuvent notamment être nécessaires afin de permettre au restaurant de traiter la commande, telles que le pseudo, la ville et les coordonnées de contact du client.

Les informations nécessaires à l’exécution d’une commande peuvent être transmises au restaurant concerné.

Les données relatives aux notifications peuvent également inclure des informations techniques nécessaires à l’envoi de notifications sur l’appareil de l’utilisateur, notamment un identifiant technique de notification.

Ces données sont traitées conformément à notre Politique de Confidentialité et au Règlement Général sur la Protection des Données (RGPD).

Conformément à la réglementation applicable, l’utilisateur dispose de droits sur ses données, notamment des droits d’accès, de rectification, d’effacement et, lorsque les conditions sont réunies, d’opposition ou de limitation du traitement.

Ces droits peuvent être exercés en contactant Nou Link à l’adresse indiquée à l’article 12.`,
  },

  {
    title: "8. Contenus publiés",
    content: `Les restaurants peuvent publier des textes, images, descriptions et spécialités culinaires.

En publiant du contenu, vous déclarez que :

• vous disposez des droits nécessaires sur les images et textes publiés ;

• le contenu ne viole pas les lois en vigueur ;

• le contenu ne contient pas de propos haineux, discriminatoires, violents ou illicites ;

• les informations relatives aux produits et spécialités proposés sont exactes.

Nou Link se réserve le droit de suspendre ou supprimer tout contenu ou profil en cas de non-respect de la loi, des présentes CGU ou de tout signalement légitime, dans les conditions prévues par les présentes.

Les contenus publiés sur Nou Link doivent être en lien avec la thématique de la plateforme, à savoir la mise en avant des spécialités culinaires et des saveurs issues notamment des départements et territoires de l’Outre-mer.

Tout profil publiant des contenus sans rapport avec cette thématique pourra être désactivé ou supprimé, y compris lorsqu’un abonnement a été souscrit, dans les conditions prévues par les CGV.`,
  },

  {
    title: "9. Propriété intellectuelle",
    content: `Nou Link est propriétaire de son logo, de sa charte graphique, de ses textes, éléments graphiques et de ses développements, sous réserve des droits appartenant à leurs auteurs ou titulaires respectifs.

Toute reproduction, totale ou partielle, de ces éléments sans autorisation préalable est interdite.

Les utilisateurs et restaurants conservent leurs droits sur les contenus qu’ils publient.

En publiant du contenu sur Nou Link, ils accordent à Nou Link une licence non exclusive, mondiale et gratuite permettant d’héberger, reproduire, afficher et présenter ces contenus dans le cadre du fonctionnement et de la promotion de la plateforme.

Cette licence peut notamment permettre la mise en avant d’un profil, d’une spécialité ou d’une photographie sur la plateforme ou sur les supports de communication de Nou Link.`,
  },

  {
    title: "10. Responsabilité",
    content: `Nou Link met tout en œuvre pour assurer le bon fonctionnement de la plateforme.

Toutefois, des interruptions temporaires, erreurs techniques, indisponibilités ou pertes de données peuvent survenir.

Bien que des mesures de sécurité soient mises en œuvre, aucun service accessible sur Internet ne peut garantir une sécurité absolue contre les défaillances ou attaques informatiques.

Les restaurants sont seuls responsables :

• de leurs publications ;

• des informations communiquées aux clients ;

• de la préparation des repas ;

• de la qualité et de la sécurité des repas proposés ;

• du respect des réglementations applicables à leur activité ;

• de l’hygiène et de la sécurité alimentaire ;

• de l’exécution des commandes et, le cas échéant, de leur livraison ;

• des modalités de paiement qu’ils proposent aux clients.

Nou Link décline toute responsabilité concernant notamment :

• les informations fausses, illégales ou trompeuses publiées par un utilisateur ou un restaurant ;

• la qualité, la composition ou la sécurité des repas proposés par un restaurant ;

• l’annulation, le refus, le retard ou la mauvaise exécution d’une commande imputable au restaurant ;

• les litiges entre un client et un restaurant ;

• l’indisponibilité réelle d’un restaurant ou d’une spécialité ;

• les problèmes liés au paiement directement effectué auprès du restaurant ;

• les interruptions temporaires du service.

Nou Link ne garantit pas la disponibilité permanente des restaurants ni l’exécution d’une commande.

Les utilisateurs doivent contacter directement le restaurant concerné pour toute question ou réclamation relative à la préparation, au contenu, au paiement ou à l’exécution d’une commande, sans préjudice de leurs droits légaux.`,
  },

  {
    title: "11. Modification des CGU",
    content: `Les présentes conditions peuvent être modifiées à tout moment afin de tenir compte de l’évolution de Nou Link, de ses fonctionnalités ou de la réglementation applicable.

Toute modification substantielle sera portée à la connaissance des utilisateurs par les moyens appropriés.

La version applicable est celle publiée au moment de l’utilisation du service.`,
  },

  {
    title: "12. Contact",
    content: `Pour toute question, demande ou signalement concernant Nou Link :

dev.frenchlod@gmail.com`,
  },
];

const Cgu = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <StyledCgu>
      <Content>
        <MainTitle>Conditions Générales d'Utilisation</MainTitle>

        <Date>Dernière mise à jour : 12 août 2026</Date>

        <Paragraph>
          Bienvenue sur Nou Link ! En accédant ou en utilisant notre application
          ou notre site web, vous reconnaissez avoir pris connaissance des
          présentes Conditions Générales d'Utilisation et acceptez de vous y
          conformer.
        </Paragraph>

        {cguSections.map((section, index) => (
          <Section key={index}>
            <SectionTitle>{section.title}</SectionTitle>

            <Paragraph>{section.content}</Paragraph>
          </Section>
        ))}
      </Content>
    </StyledCgu>
  );
};

export default Cgu;

const StyledCgu = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${COLORS.main};
  padding: 100px 20px;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 95%;
    padding: 25px 20px;
  }
`;

const MainTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${COLORS.main};
  margin: 0 0 8px;
`;

const Date = styled.p`
  color: ${COLORS.second};
  font-weight: 600;
  margin: 0 0 25px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.main};
  margin: 0 0 12px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${COLORS.black};
  white-space: pre-line;
  margin: 0;
`;
