import styled from "styled-components";
import { ArrowRight, BellRing, MapPinned, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../Styles/Styles";

const benefits = [
  {
    icon: Store,
    title: "Ton activité bien présentée",
    description:
      "Un profil web et mobile pour partager tes informations, tes spécialités et tes photos.",
  },
  {
    icon: MapPinned,
    title: "Une découverte par ville",
    description:
      "Les personnes choisissent leur ville pour parcourir les profils et les plats proposés près de chez elles.",
  },
  {
    icon: BellRing,
    title: "Tes commandes suivies",
    description:
      "Reçois les commandes envoyées sur Nou Link et suis leur statut depuis ton espace vendeur.",
  },
];

const BusinessBenefitsSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="vendeurs">
      <div className="heading">
        <span className="eyebrow">Pour celles et ceux qui proposent des plats</span>
        <h2>Tout pour présenter ton activité et tes spécialités.</h2>
        <p>
          Une vitrine pour faire découvrir ton savoir-faire, et des outils pour
          suivre les commandes passées sur Nou Link.
        </p>
      </div>
      <div className="benefits">
        {benefits.map(({ icon: Icon, title, description }) => (
          <article className="benefit" key={title}>
            <span className="icon">
              <Icon size={22} aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <button className="cta" onClick={() => navigate("/auth")}>
        Référencer mon activité <ArrowRight size={18} aria-hidden="true" />
      </button>
    </Section>
  );
};

export default BusinessBenefitsSection;

const Section = styled.section`
  padding: 100px 24px;
  background: ${COLORS.Fond};

  .heading {
    max-width: 700px;
    margin: 0 auto 46px;
    text-align: center;
  }

  .eyebrow {
    color: ${COLORS.second};
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  h2 {
    margin: 15px 0 12px;
    color: ${COLORS.main};
    font-family: Georgia, serif;
    font-size: clamp(2.1rem, 4.5vw, 3.35rem);
    letter-spacing: -0.045em;
    line-height: 1.12;
  }

  .heading p {
    max-width: 590px;
    margin: 0 auto;
    color: ${COLORS.TexteSecondaire};
    font-size: 0.96rem;
    line-height: 1.8;
  }

  .benefits {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    max-width: 1120px;
    margin: 0 auto;
  }

  .benefit {
    padding: 28px;
    border: 1px solid ${COLORS.Bordure};
    border-radius: 21px;
    background: ${COLORS.Carte};
    box-shadow: 0 9px 28px rgba(31, 64, 104, 0.045);
  }

  .icon {
    display: grid;
    width: 48px;
    height: 48px;
    margin-bottom: 20px;
    place-items: center;
    border-radius: 15px;
    background: rgba(39, 142, 165, 0.12);
    color: ${COLORS.second};
  }

  .benefit:nth-child(2) .icon {
    background: rgba(244, 211, 94, 0.22);
    color: ${COLORS.main};
  }

  .benefit:nth-child(3) .icon {
    background: rgba(33, 191, 115, 0.12);
    color: ${COLORS.green};
  }

  h3 {
    margin: 0 0 9px;
    color: ${COLORS.main};
    font-size: 1.05rem;
  }

  .benefit p {
    margin: 0;
    color: ${COLORS.TexteSecondaire};
    font-size: 0.88rem;
    line-height: 1.75;
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-height: 49px;
    margin: 32px auto 0;
    padding: 0 20px;
    border: 0;
    border-radius: 999px;
    background: ${COLORS.main};
    color: ${COLORS.white};
    font-size: 0.88rem;
    font-weight: 700;
    cursor: pointer;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .cta:hover {
    transform: translateY(-2px);
    background: ${COLORS.second};
  }

  @media (max-width: 760px) {
    padding: 78px 20px;

    .benefits {
      max-width: 520px;
      grid-template-columns: 1fr;
    }

    .benefit {
      padding: 24px;
    }
  }
`;
