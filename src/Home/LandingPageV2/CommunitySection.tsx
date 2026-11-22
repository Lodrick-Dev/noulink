import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import COLORS from "../../Styles/Styles";

const dishes = [
  "Colombo",
  "Bokit",
  "Accras",
  "Blaff",
  "Bami",
  "Boudin créole",
  "Banane pesée",
  "Nasi",
];

const CommunitySection = () => {
  const navigate = useNavigate();

  return (
    <Section id="histoire">
      <div className="story-card">
        <div className="story-image">
          <img src="/assets/imglanding.jpg" alt="Un moment de partage autour des saveurs d’Outre-mer" loading="lazy" />
          <span className="image-label">Le goût de chez nous</span>
        </div>
        <div className="story-copy">
          <span className="eyebrow">Pourquoi Nou Link existe</span>
          <h2>
            Parce qu’un plat,
            <br />
            c’est aussi <em>un souvenir.</em>
          </h2>
          <p>
            Loin du péyi, les saveurs familières nous rapprochent. Nou Link est
            né d’une envie simple : retrouver ces plats, découvrir celles et
            ceux qui les cuisinent, et créer du lien autour de la table.
          </p>
          <div className="dishes" aria-label="Quelques spécialités">
            {dishes.map((dish) => <span key={dish}>{dish}</span>)}
          </div>
          <button onClick={() => navigate("/home")}>
            Partir à la découverte <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default CommunitySection;

const Section = styled.section`
  padding: 110px 24px;
  background: ${COLORS.white};

  .story-card {
    display: grid;
    grid-template-columns: 0.86fr 1fr;
    align-items: center;
    gap: clamp(35px, 7vw, 90px);
    max-width: 1100px;
    margin: 0 auto;
  }

  .story-image {
    position: relative;
    min-height: 460px;
  }

  .story-image::before {
    position: absolute;
    inset: 18px -16px -16px 18px;
    border: 1px solid ${COLORS.second};
    border-radius: 25px;
    content: "";
  }

  .story-image img {
    position: relative;
    width: 100%;
    height: 460px;
    border-radius: 25px;
    object-fit: cover;
  }

  .image-label {
    position: absolute;
    right: -10px;
    bottom: 25px;
    padding: 12px 17px;
    border-radius: 999px;
    background: ${COLORS.yellow};
    color: ${COLORS.main};
    font-size: 0.81rem;
    font-weight: 800;
    box-shadow: 0 7px 20px rgba(31, 64, 104, 0.16);
  }

  .eyebrow {
    color: ${COLORS.second};
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h2 {
    margin: 17px 0;
    color: ${COLORS.main};
    font-family: Georgia, serif;
    font-size: clamp(2.2rem, 4.5vw, 3.5rem);
    letter-spacing: -0.05em;
    line-height: 1.1;
  }

  h2 em {
    color: ${COLORS.second};
    font-weight: 500;
  }

  .story-copy > p {
    color: ${COLORS.TexteSecondaire};
    font-size: 0.96rem;
    line-height: 1.85;
  }

  .dishes {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 22px 0 27px;
  }

  .dishes span {
    padding: 8px 12px;
    border: 1px solid ${COLORS.Bordure};
    border-radius: 999px;
    background: ${COLORS.Fond};
    color: ${COLORS.main};
    font-size: 0.77rem;
    font-weight: 700;
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    min-height: 48px;
    padding: 0 19px;
    border: 0;
    border-radius: 999px;
    background: ${COLORS.main};
    color: ${COLORS.white};
    font-size: 0.86rem;
    font-weight: 700;
    cursor: pointer;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  button:hover {
    background: ${COLORS.second};
    transform: translateY(-2px);
  }

  @media (max-width: 760px) {
    padding: 80px 24px;

    .story-card {
      max-width: 550px;
      grid-template-columns: 1fr;
    }

    .story-image,
    .story-image img {
      min-height: 0;
      height: 340px;
    }
  }

  @media (max-width: 450px) {
    .story-image,
    .story-image img {
      height: 280px;
    }
  }
`;
