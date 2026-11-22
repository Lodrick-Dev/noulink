import styled from "styled-components";
import { Check, Sparkles } from "lucide-react";
import AbonnementCard from "../../components/AbonnementCard/AbonnementCard";
import COLORS from "../../Styles/Styles";

const PricingSection = () => (
  <Section id="offre">
    <div className="pricing-inner">
      <div className="pricing-copy">
        <span className="eyebrow">
          <Sparkles size={15} aria-hidden="true" />
          Pour celles et ceux qui cuisinent
        </span>
        <h2>
          Fais connaître
          <br />
          tes spécialités.
        </h2>
        <p>
          Présente ton activité aux personnes qui recherchent les saveurs
          ultramarines près de chez elles. Ton profil réunit tes informations,
          tes spécialités et tes photos au même endroit.
        </p>
        <ul>
          <li>
            <Check size={18} aria-hidden="true" />
            Un profil visible sur web et mobile
          </li>
          <li>
            <Check size={18} aria-hidden="true" />
            Tes spécialités et ta galerie photos
          </li>
          <li>
            <Check size={18} aria-hidden="true" />
            Les commandes et notifications réunies
          </li>
          <li>
            <Check size={18} aria-hidden="true" />
            Pas de renouvellement automatique
          </li>
        </ul>
        <p className="price-context">
          Le montant affiché par mois est une moyenne : le règlement se fait en
          une seule fois pour l’année.
        </p>
      </div>
      <AbonnementCard />
    </div>
  </Section>
);

export default PricingSection;

const Section = styled.section`
  padding: 104px 24px;
  background:
    radial-gradient(circle at 8% 15%, rgba(39, 142, 165, 0.08), transparent 28%),
    ${COLORS.Fond};

  .pricing-inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 410px);
    align-items: center;
    gap: clamp(40px, 8vw, 100px);
    max-width: 1080px;
    margin: 0 auto;
  }

  .pricing-copy {
    max-width: 560px;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${COLORS.second};
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  .eyebrow svg {
    color: ${COLORS.red};
  }

  h2 {
    margin: 18px 0 15px;
    color: ${COLORS.main};
    font-family: Georgia, serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    letter-spacing: -0.055em;
    line-height: 1.05;
  }

  .pricing-copy > p {
    color: ${COLORS.TexteSecondaire};
    font-size: 0.96rem;
    line-height: 1.8;
  }

  ul {
    display: grid;
    gap: 14px;
    margin: 25px 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: ${COLORS.main};
    font-size: 0.89rem;
    font-weight: 600;
  }

  li svg {
    flex: 0 0 auto;
    color: ${COLORS.green};
  }

  .pricing-copy > .price-context {
    max-width: 470px;
    padding-left: 14px;
    border-left: 3px solid ${COLORS.yellow};
    color: ${COLORS.TexteSecondaire};
    font-size: 0.8rem;
    line-height: 1.65;
  }

  @media (max-width: 800px) {
    padding: 78px 20px;

    .pricing-inner {
      grid-template-columns: 1fr;
      gap: 35px;
      max-width: 520px;
    }

    .pricing-copy {
      text-align: center;
    }

    ul {
      width: fit-content;
      max-width: 100%;
      margin-right: auto;
      margin-left: auto;
      text-align: left;
    }

    .pricing-copy > .price-context {
      margin-right: auto;
      margin-left: auto;
      text-align: left;
    }
  }
`;
