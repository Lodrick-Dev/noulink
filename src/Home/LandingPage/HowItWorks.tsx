import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const nav = useNavigate();
  const find = [
    {
      icon: "📍",
      step: "Étape 1",
      title: "Entre ta ville",
      desc: "Indique où tu es pour voir les cuisiniers près de chez toi.",
    },
    {
      icon: "👀",
      step: "Étape 2",
      title: "Explore les profils",
      desc: "Découvre leurs spécialités, photos et plats du moment.",
    },
  ];
  const sell = [
    {
      icon: "👩🏽‍🍳",
      step: "Étape 1",
      title: "Crée ton profil",
      desc: "Présente-toi et liste tes spécialités avec de belles photos.",
      accent: true,
    },
    {
      icon: "🌍",
      step: "Étape 2",
      title: "Sois visible partout",
      desc: "Les gens de ta ville — et de toute la France — te trouvent.",
      accent: true,
    },
  ];
  return (
    <HowItWorksSection className="section-how">
      <Slide direction="up" triggerOnce>
        <p className="section-label">Simple &amp; rapide</p>
        <h2 className="section-title">Comment ça marche&nbsp;?</h2>
      </Slide>
      <div className="how-grid">
        <div className="full">
          <Slide direction="up" triggerOnce>
            <div className="how-divider">
              <span>🍽️ Tu cherches un repas</span>
            </div>
          </Slide>
        </div>
        {find.map((s, i) => (
          <Slide key={s.title} direction="up" triggerOnce delay={i * 0.12}>
            <div className="how-card">
              <span className="how-icon">{s.icon}</span>
              <p className="how-step">{s.step}</p>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </Slide>
        ))}
        <div className="full">
          <Slide direction="up" triggerOnce>
            <div className="how-divider">
              <span>👨‍🍳 Tu cuisines &amp; vends</span>
            </div>
          </Slide>
        </div>
        {sell.map((s, i) => (
          <Slide key={s.title} direction="up" triggerOnce delay={i * 0.12}>
            <div className={`how-card ${s.accent ? "accent" : ""}`}>
              <span className="how-icon">{s.icon}</span>
              <p className="how-step">{s.step}</p>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </Slide>
        ))}
        <div className="full" style={{ textAlign: "center", marginTop: 8 }}>
          <Slide direction="up" triggerOnce>
            <button className="btn-green" onClick={() => nav("/auth")}>
              🍽️ Publier mes spécialités
            </button>
          </Slide>
        </div>
      </div>
    </HowItWorksSection>
  );
};

export default HowItWorks;
const HowItWorksSection = styled.section`
  padding: 90px 24px;
  .section-how {
    background: ${COLORS.main};
    padding: 90px 24px;
    color: ${COLORS.white};
  }
  .section-label {
    text-align: center;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${COLORS.yellow};
    margin-bottom: 12px;
  }
  .section-title {
    font-family: "Playfair Display", Georgia, serif;
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 700;
    color: ${COLORS.white};
    margin-bottom: 60px;
  }

  .how-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 16px 0 24px;
  }
  .how-divider::before,
  .how-divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.14);
  }
  .how-divider span {
    font-size: 0.73rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.38);
    white-space: nowrap;
  }

  .how-grid {
    max-width: 860px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }
  @media (max-width: 580px) {
    .how-grid {
      grid-template-columns: 1fr;
    }
  }
  .how-grid .full {
    grid-column: 1 / -1;
  }

  .how-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 22px;
    padding: 28px 24px;
    transition: all 0.3s ease;
  }
  .how-card:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(244, 211, 94, 0.35);
    transform: translateY(-5px);
  }
  .how-card.accent {
    border-color: rgba(244, 211, 94, 0.38);
    background: rgba(244, 211, 94, 0.04);
  }
  .how-icon {
    font-size: 2.4rem;
    margin-bottom: 14px;
    display: block;
  }
  .how-step {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${COLORS.yellow};
    margin-bottom: 6px;
  }
  .how-card h3 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.18rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${COLORS.white};
  }
  .how-card p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.62);
    line-height: 1.6;
  }

  .btn-green {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: ${COLORS.green};
    color: ${COLORS.white};
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    padding: 14px 36px;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
  }
  .btn-green:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 28px rgba(33, 191, 115, 0.38);
  }
`;
