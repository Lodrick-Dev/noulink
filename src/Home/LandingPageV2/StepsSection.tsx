import styled from "styled-components";
import { ArrowRight, Search, UserRound, UtensilsCrossed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../Styles/Styles";

const StepsSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="comment-ca-marche">
      <div className="heading">
        <span>Simple comme bonjour</span>
        <h2>À chacun son Nou Link.</h2>
        <p>Tu cherches une spécialité ou tu veux la faire connaître ?</p>
      </div>
      <div className="pathways">
        <article className="pathway">
          <div className="pathway-top">
            <span className="round-icon"><Search size={23} /></span>
            <span className="path-label">Tu cherches un plat</span>
          </div>
          <ol>
            <li><span>01</span><div><strong>Choisis ta ville</strong><small>Commence près de chez toi.</small></div></li>
            <li><span>02</span><div><strong>Explore les profils</strong><small>Découvre plats, spécialités et photos.</small></div></li>
            <li><span>03</span><div><strong>Prends contact</strong><small>Échange directement avec la personne.</small></div></li>
          </ol>
          <button onClick={() => navigate("/home")}>
            Explorer les plats <ArrowRight size={17} />
          </button>
        </article>
        <article className="pathway provider">
          <div className="pathway-top">
            <span className="round-icon"><UtensilsCrossed size={23} /></span>
            <span className="path-label">Tu cuisines et tu proposes</span>
          </div>
          <ol>
            <li><span>01</span><div><strong>Crée ton profil</strong><small>Présente ton activité et ton univers.</small></div></li>
            <li><span>02</span><div><strong>Ajoute tes spécialités</strong><small>Partage tes plats et de belles photos.</small></div></li>
            <li><span>03</span><div><strong>Fais-toi découvrir</strong><small>Les personnes près de toi te trouvent.</small></div></li>
          </ol>
          <button onClick={() => navigate("/auth")}>
            Référencer mon activité <ArrowRight size={17} />
          </button>
        </article>
      </div>
      <div className="note">
        <UserRound size={17} aria-hidden="true" />
        <span>La consultation des profils est gratuite et sans compte.</span>
      </div>
    </Section>
  );
};

export default StepsSection;

const Section = styled.section`
  padding: 105px 24px 100px;
  background: ${COLORS.main};
  color: ${COLORS.white};

  .heading {
    margin: 0 auto 46px;
    text-align: center;
  }

  .heading > span {
    color: ${COLORS.yellow};
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .heading h2 {
    margin: 14px 0 10px;
    font-family: Georgia, serif;
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    letter-spacing: -0.04em;
  }

  .heading p {
    color: rgba(253, 253, 253, 0.7);
    font-size: 0.98rem;
  }

  .pathways {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    max-width: 1030px;
    margin: 0 auto;
  }

  .pathway {
    padding: clamp(24px, 4vw, 38px);
    border: 1px solid rgba(253, 253, 253, 0.15);
    border-radius: 24px;
    background: rgba(253, 253, 253, 0.065);
  }

  .pathway.provider {
    border-color: rgba(244, 211, 94, 0.35);
    background: rgba(244, 211, 94, 0.06);
  }

  .pathway-top {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-bottom: 28px;
  }

  .round-icon {
    display: grid;
    width: 48px;
    height: 48px;
    flex: 0 0 auto;
    place-items: center;
    border-radius: 15px;
    background: rgba(39, 142, 165, 0.22);
    color: ${COLORS.white};
  }

  .provider .round-icon {
    background: rgba(244, 211, 94, 0.18);
    color: ${COLORS.yellow};
  }

  .path-label {
    color: ${COLORS.white};
    font-size: 1.12rem;
    font-weight: 700;
  }

  ol {
    display: grid;
    gap: 20px;
    margin: 0 0 28px;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 13px;
  }

  li > span {
    display: grid;
    width: 28px;
    height: 28px;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid rgba(253, 253, 253, 0.2);
    border-radius: 50%;
    color: ${COLORS.yellow};
    font-size: 0.68rem;
    font-weight: 800;
  }

  li strong,
  li small {
    display: block;
  }

  li strong {
    margin: 2px 0 4px;
    font-size: 0.9rem;
  }

  li small {
    color: rgba(253, 253, 253, 0.66);
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .pathway button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    min-height: 45px;
    padding: 0 17px;
    border: 0;
    border-radius: 999px;
    background: ${COLORS.second};
    color: ${COLORS.white};
    font-size: 0.84rem;
    font-weight: 700;
    cursor: pointer;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .pathway button:hover {
    background: ${COLORS.green};
    transform: translateY(-2px);
  }

  .provider button {
    background: ${COLORS.yellow};
    color: ${COLORS.main};
  }

  .provider button:hover {
    background: ${COLORS.green};
    color: ${COLORS.white};
  }

  .note {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 28px;
    color: rgba(253, 253, 253, 0.7);
    font-size: 0.8rem;
  }

  .note svg {
    color: ${COLORS.yellow};
  }

  @media (max-width: 700px) {
    padding: 82px 20px;

    .pathways {
      max-width: 500px;
      grid-template-columns: 1fr;
    }
  }
`;
