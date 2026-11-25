import styled from "styled-components";
import { Sparkles } from "lucide-react";
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
          Fais découvrir tes spécialités aux personnes qui les recherchent près
          de chez elles. Elles peuvent consulter tes plats et passer commande
          depuis Nou Link.
        </p>
        <p className="payment-context">
          Pour les commandes, le règlement se fait directement entre toi et ton
          client, avec les moyens que tu proposes. Nou Link ne l’encaisse pas :
          tu gardes la main.
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

  .pricing-copy > .payment-context {
    max-width: 500px;
    margin: 15px 0 0;
    padding: 12px 14px;
    border-radius: 12px;
    background: rgba(39, 142, 165, 0.08);
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

    .pricing-copy > .payment-context {
      margin-right: auto;
      margin-left: auto;
      text-align: left;
    }
  }
`;
