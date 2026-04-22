import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Slide } from "react-awesome-reveal";

const StorySection = styled.section`
  /* background-color: ${COLORS.white}; */
  width: 60%;
  border-radius: 18px;
  margin: 0 auto;
  backdrop-filter: blur(5px);
  color: ${COLORS.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  height: 90%;
  .em-eyebrow {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${COLORS.second};
    margin-bottom: 14px;
  }
  .em-title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(1.8rem, 5vw, 3.2rem);
    font-weight: 700;
    color: ${COLORS.main};
    line-height: 1.2;
    margin-bottom: 22px;
  }
  .em-title em {
    font-style: italic;
    color: ${COLORS.second};
  }
  .em-body {
    margin: 0 auto;
    width: 60%;
    color: ${COLORS.white};
  }
  .plats-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    max-width: 600px;
    margin: 10px auto 44px;
    .plat-chip {
      background: ${COLORS.grey};
      color: ${COLORS.main};
      font-weight: 600;
      font-size: 0.88rem;
      padding: 8px 18px;
      border-radius: 9999px;
      border: 2px solid transparent;
      transition: all 0.2s ease;
      cursor: default;
    }
    .plat-chip:hover {
      background: ${COLORS.main};
      color: ${COLORS.yellow};
      transform: scale(1.06);
    }
  }
  .story-quote {
    max-width: 500px;
    margin: 0 auto;
    font-size: 0.93rem;
    color: #edf470;
    line-height: 1.75;
    font-style: italic;
    border-left: 4px solid ${COLORS.yellow};
    padding-left: 20px;
    text-align: left;
  }
  @media (max-width: 450px) {
    width: 90%;
    .em-body {
      width: 90%;
    }
    .plats-grid h2 {
      font-size: 1.2em;
    }
    h3 {
      font-size: 1.8em;
    }
    .text-story {
      width: 100%;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

const Story = () => {
  const PLATS = [
    "🥩 Colombo",
    "🥐 Bokit",
    "🍲 Blaff",
    "🍛 Bami",
    "🌿 Accras",
    "🍌 Banane Pesé",
    "🥘 Boudin",
    "🍚 Nasi",
  ];
  return (
    <StorySection>
      <Slide direction="up" triggerOnce>
        <p className="em-eyebrow">Pourquoi Nou Link existe</p>
        <h2 className="em-title">
          <em>
            "Recherche un bon restaurant
            <br />
            créole sur paris, des idées ?"
          </em>
        </h2>
        <p className="em-body">
          Loin du péyi, le manque est réel. Pas juste la nourriture —{" "}
          <strong>les odeurs, les saveurs, les souvenirs.</strong> Sauf que ces
          plats existent déjà en métropole. Des gens comme toi les cuisinent. Il
          manquait juste un endroit pour les trouver.
        </p>
      </Slide>

      <Slide direction="up" delay={0.1} triggerOnce>
        <div className="plats-grid stagger">
          {PLATS.map((p) => (
            <div key={p} className="plat-chip">
              {p}
            </div>
          ))}
        </div>
      </Slide>

      <Slide direction="up" delay={0.2} triggerOnce>
        <blockquote className="story-quote">
          Nou Link est né d'une envie simple et personnelle. En cherchant autour
          de moi, j'ai réalisé que plein d'autres ressentaient la même chose.
          Alors on a créé un endroit pour ça.
        </blockquote>
      </Slide>
    </StorySection>
  );
};

export default Story;
