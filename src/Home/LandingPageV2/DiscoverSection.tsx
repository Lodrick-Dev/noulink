import styled from "styled-components";
import { Compass, Heart, MapPin } from "lucide-react";
import COLORS from "../../Styles/Styles";

const highlights = [
  {
    icon: MapPin,
    title: "Autour de toi",
    description:
      "Choisis ta ville pour parcourir les profils et les plats proposés près de chez toi.",
  },
  {
    icon: Compass,
    title: "Des saveurs à découvrir",
    description:
      "Parcours les spécialités et les univers culinaires des Antilles, de la Guyane et d’ailleurs.",
  },
  {
    icon: Heart,
    title: "Contact ou commande",
    description:
      "Échange directement avec la personne ou passe commande sur Nou Link, selon les plats proposés.",
  },
];

const DiscoverSection = () => (
  <Section id="decouvrir">
    <div className="section-heading">
      <span className="eyebrow">Plus qu’une envie, une rencontre</span>
      <h2>
        Tes saveurs préférées,
        <br />
        <em>à deux pas de toi.</em>
      </h2>
      <p>
        Nou Link rapproche celles et ceux qui cherchent les goûts de chez eux
        des personnes qui les font vivre.
      </p>
    </div>
    <div className="cards">
      {highlights.map(({ icon: Icon, title, description }, index) => (
        <article className="card" key={title}>
          <div className={`icon icon-${index}`}>
            <Icon size={22} strokeWidth={2} aria-hidden="true" />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  </Section>
);

export default DiscoverSection;

const Section = styled.section`
  padding: 112px 24px;
  background: ${COLORS.Fond};

  .section-heading {
    max-width: 690px;
    margin: 0 auto 54px;
    text-align: center;
  }

  .eyebrow {
    color: ${COLORS.second};
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  h2 {
    margin: 16px 0;
    color: ${COLORS.main};
    font-family: Georgia, serif;
    font-size: clamp(2.2rem, 5vw, 3.7rem);
    letter-spacing: -0.045em;
    line-height: 1.1;
  }

  h2 em {
    color: ${COLORS.second};
    font-weight: 500;
  }

  .section-heading > p {
    max-width: 570px;
    margin: 0 auto;
    color: ${COLORS.TexteSecondaire};
    font-size: 1rem;
    line-height: 1.8;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    max-width: 1120px;
    margin: 0 auto;
  }

  .card {
    min-height: 226px;
    padding: 30px;
    border: 1px solid ${COLORS.Bordure};
    border-radius: 22px;
    background: ${COLORS.Carte};
    box-shadow: 0 8px 26px rgba(31, 64, 104, 0.035);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 38px rgba(31, 64, 104, 0.1);
  }

  .icon {
    display: grid;
    width: 50px;
    height: 50px;
    margin-bottom: 22px;
    place-items: center;
    border-radius: 16px;
    background: rgba(39, 142, 165, 0.12);
    color: ${COLORS.second};
  }

  .icon-1 {
    background: rgba(244, 211, 94, 0.2);
    color: ${COLORS.main};
  }

  .icon-2 {
    background: rgba(33, 191, 115, 0.12);
    color: ${COLORS.green};
  }

  h3 {
    margin-bottom: 10px;
    color: ${COLORS.main};
    font-size: 1.12rem;
  }

  .card p {
    color: ${COLORS.TexteSecondaire};
    font-size: 0.9rem;
    line-height: 1.75;
  }

  @media (max-width: 760px) {
    padding: 82px 20px;

    .cards {
      max-width: 520px;
      grid-template-columns: 1fr;
    }

    .card {
      min-height: 0;
      padding: 25px;
    }
  }
`;
