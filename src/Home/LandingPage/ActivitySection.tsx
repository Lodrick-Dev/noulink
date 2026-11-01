import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const ActivitySection = () => {
  const nav = useNavigate();

  const benefits = [
    {
      icon: "🍽️",
      title: "Présente tes spécialités",
      desc: "Mets en avant les plats et les saveurs que tu proposes à tes clients.",
    },
    {
      icon: "📸",
      title: "Valorise ton activité",
      desc: "Ajoute tes photos, une description et tes informations pour donner envie de découvrir tes spécialités.",
    },
    {
      icon: "🌍",
      title: "Gagne en visibilité",
      desc: "Fais découvrir ton activité aux personnes qui recherchent des spécialités près de chez elles.",
    },
    {
      icon: "🔔",
      title: "Reçois des commandes",
      desc: "Permets aux clients de découvrir tes plats et de te contacter directement pour commander.",
    },
  ];

  return (
    <ActivitySectionStyled>
      <div className="activity-container">
        <Slide direction="up" triggerOnce>
          <div className="section-header">
            <p className="section-label">
              Tu proposes des spécialités de chez nous ?
            </p>

            <h2 className="section-title">
              Fais découvrir ton activité
              <span> avec Nou Link !</span>
            </h2>

            <p className="section-description">
              Restaurant, snack, food truck, traiteur, vente ambulante ou à
              emporter... Quel que soit ton mode de vente, donne de la
              visibilité à tes spécialités et fais découvrir ton savoir-faire.
            </p>
          </div>
        </Slide>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <Slide
              key={benefit.title}
              direction="up"
              triggerOnce
              delay={index * 0.12}
            >
              <div className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </Slide>
          ))}
        </div>

        <Slide direction="up" triggerOnce>
          <div className="activity-cta">
            <h3>Et si tu rejoignais l'aventure Nou Link ?</h3>

            <p>
              Fais connaître tes spécialités et permets à ceux qui recherchent
              les saveurs de chez eux de te retrouver.
            </p>

            <button className="activity-button" onClick={() => nav("/auth")}>
              🍽️ Référencer mon activité
              <span>→</span>
            </button>

            <small>Simple et rapide · Ton activité sur Nou Link</small>
          </div>
        </Slide>
      </div>
    </ActivitySectionStyled>
  );
};

export default ActivitySection;

const ActivitySectionStyled = styled.section`
  padding: 100px 24px;
  background: ${COLORS.Fond};
  overflow: hidden;

  .activity-container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    max-width: 750px;
    margin: 0 auto 55px;
  }

  .section-label {
    color: ${COLORS.second};
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .section-title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.2;
    color: ${COLORS.main};
    margin-bottom: 20px;
  }

  .section-title span {
    color: ${COLORS.yellow};
  }

  .section-description {
    font-size: 1.05rem;
    line-height: 1.8;
    color: ${COLORS.TexteSecondaire};
    max-width: 680px;
    margin: 0 auto;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .benefit-card {
    height: 100%;
    box-sizing: border-box;
    padding: 30px 23px;
    background: ${COLORS.white};
    border: 1px solid ${COLORS.Bordure};
    border-radius: 22px;
    transition: all 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-7px);
    border-color: ${COLORS.second};
    box-shadow: 0 12px 30px rgba(31, 64, 104, 0.09);
  }

  .benefit-icon {
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(39, 142, 165, 0.1);
    border-radius: 17px;
    font-size: 1.9rem;
    margin-bottom: 22px;
  }

  .benefit-card h3 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.12rem;
    font-weight: 700;
    color: ${COLORS.main};
    margin-bottom: 12px;
  }

  .benefit-card p {
    font-size: 0.88rem;
    line-height: 1.7;
    color: ${COLORS.TexteSecondaire};
  }

  .activity-cta {
    margin-top: 55px;
    padding: 45px 25px;
    text-align: center;
    border-radius: 28px;
    background: ${COLORS.main};
    color: ${COLORS.white};
  }

  .activity-cta h3 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: 14px;
    color: ${COLORS.white};
  }

  .activity-cta p {
    max-width: 600px;
    margin: 0 auto 25px;
    font-size: 0.95rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.75);
  }

  .activity-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: ${COLORS.green};
    color: ${COLORS.white};
    font-family: "DM Sans", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    padding: 15px 30px;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .activity-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(33, 191, 115, 0.3);
  }

  .activity-button span {
    font-size: 1.2rem;
  }

  .activity-cta small {
    display: block;
    margin-top: 17px;
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.55);
  }

  @media (max-width: 900px) {
    .benefits-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 580px) {
    padding: 70px 18px;

    .section-header {
      margin-bottom: 35px;
    }

    .section-description {
      font-size: 0.95rem;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .benefit-card {
      padding: 25px 22px;
    }

    .benefit-icon {
      margin-bottom: 15px;
    }

    .activity-cta {
      margin-top: 35px;
      padding: 35px 20px;
    }

    .activity-button {
      width: 100%;
      padding: 15px 12px;
      font-size: 0.9rem;
    }
  }
`;
