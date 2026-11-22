import styled from "styled-components";
import { ArrowRight, MapPin, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../Styles/Styles";

const LandingHero = () => {
  const navigate = useNavigate();

  return (
    <Hero>
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>🇬🇫</span>
            <span>🇬🇵</span>
            <span>🇲🇶</span>
            <span>🇾🇹</span>
            <span className="eyebrow-dot" />
          </div>
          <h1>
            Tes spécialités, <em>plus visibles.</em>
          </h1>
          <p className="intro">
            Présente ton activité, tes plats et tes photos sur Nou Link. Ton
            profil aide les personnes qui recherchent des saveurs ultramarines
            près de chez elles à te découvrir et à te contacter.
          </p>
          <p className="seller-audience">
            Restaurant, traiteur, food truck ou cuisine à domicile : présente
            ton savoir-faire à celles et ceux qui cherchent ces saveurs.
          </p>
          <div className="actions">
            <button className="primary" onClick={() => navigate("/auth")}>
              Référencer mon activité <ArrowRight size={18} />
            </button>
            <button className="secondary" onClick={() => navigate("/home")}>
              Je cherche un plat
            </button>
          </div>
          <div className="reassurance">
            <span>
              <MapPin size={16} /> Découverte par ville
            </span>
            <span>
              <Utensils size={16} /> Profil, photos et spécialités
            </span>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Spécialités culinaires d’Outre-mer"
        >
          <img
            src="/assets/repas.jpg"
            alt="Un repas préparé avec des saveurs créoles"
          />
          <div className="visual-caption">
            <span className="caption-icon">
              <Utensils size={18} />
            </span>
            <span>
              <strong>Ta vitrine Nou Link</strong>
              <small>plats, photos et spécialités</small>
            </span>
          </div>
          <div className="visual-stamp">Fais découvrir ton savoir-faire</div>
        </div>
      </div>
      <a
        className="scroll-cue"
        href="#decouvrir"
        aria-label="Découvrir Nou Link"
      >
        <span />
      </a>
    </Hero>
  );
};

export default LandingHero;

const Hero = styled.section`
  position: relative;
  min-height: min(760px, calc(100svh - 82px));
  display: flex;
  align-items: center;
  padding: 76px clamp(22px, 8vw, 120px) 90px;
  overflow: hidden;
  background:
    linear-gradient(
      110deg,
      rgba(20, 43, 69, 0.97) 0%,
      rgba(31, 64, 104, 0.91) 54%,
      rgba(31, 64, 104, 0.58) 100%
    ),
    url("/assets/imgland.png") center / cover no-repeat;
  color: ${COLORS.white};

  .hero-inner {
    position: relative;
    z-index: 1;
    width: min(1180px, 100%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(290px, 0.78fr);
    align-items: center;
    gap: clamp(42px, 8vw, 110px);
  }

  .hero-copy {
    max-width: 630px;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 9px 14px;
    border: 1px solid rgba(244, 211, 94, 0.34);
    border-radius: 999px;
    background: rgba(244, 211, 94, 0.1);
    color: ${COLORS.yellow};
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    span {
      font-size: 1.5rem;
    }
  }

  .eyebrow-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${COLORS.green};
    box-shadow: 0 0 0 4px rgba(33, 191, 115, 0.16);
  }

  h1 {
    max-width: 660px;
    margin: 25px 0 18px;
    color: ${COLORS.white};
    font-family: Georgia, serif;
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 700;
    letter-spacing: -0.055em;
    line-height: 1.02;
  }

  h1 em {
    color: ${COLORS.yellow};
    font-weight: 500;
  }

  .intro {
    max-width: 530px;
    color: rgba(253, 253, 253, 0.82);
    font-size: clamp(1rem, 1.5vw, 1.16rem);
    line-height: 1.8;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 30px;
  }

  .actions button {
    min-height: 52px;
    padding: 0 21px;
    border-radius: 999px;
    font-size: 0.92rem;
    font-weight: 700;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      background 0.2s ease;
  }

  .actions button:hover {
    transform: translateY(-3px);
  }

  .primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 0;
    background: ${COLORS.yellow};
    color: ${COLORS.main};
    box-shadow: 0 10px 26px rgba(244, 211, 94, 0.2);
  }

  .primary:hover {
    box-shadow: 0 14px 30px rgba(244, 211, 94, 0.3);
  }

  .secondary {
    border: 1px solid rgba(253, 253, 253, 0.45);
    background: rgba(253, 253, 253, 0.06);
    color: ${COLORS.white};
  }

  .secondary:hover {
    background: rgba(253, 253, 253, 0.14);
  }

  .reassurance {
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    margin-top: 30px;
    color: rgba(253, 253, 253, 0.76);
    font-size: 0.82rem;
  }

  .reassurance span {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }

  .reassurance svg {
    color: ${COLORS.yellow};
  }

  .seller-audience {
    margin-top: 15px;
    color: rgba(253, 253, 253, 0.62);
    font-size: 0.76rem;
    line-height: 1.6;
  }

  .hero-visual {
    position: relative;
    width: 100%;
    max-width: 430px;
    justify-self: center;
    transform: rotate(2deg);
  }

  .hero-visual::before {
    position: absolute;
    inset: 18px -15px -15px 18px;
    border: 1px solid rgba(244, 211, 94, 0.62);
    border-radius: 31px;
    content: "";
  }

  .hero-visual > img {
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: 0.91;
    border: 7px solid rgba(253, 253, 253, 0.92);
    border-radius: 30px;
    object-fit: cover;
    box-shadow: 0 26px 70px rgba(0, 0, 0, 0.28);
  }

  .visual-caption {
    position: absolute;
    right: -25px;
    bottom: 32px;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 13px 17px;
    border: 1px solid rgba(223, 230, 233, 0.7);
    border-radius: 16px;
    background: ${COLORS.white};
    color: ${COLORS.main};
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.17);
    transform: rotate(-2deg);
  }

  .caption-icon {
    display: grid;
    width: 39px;
    height: 39px;
    place-items: center;
    border-radius: 12px;
    background: rgba(39, 142, 165, 0.12);
    color: ${COLORS.second};
  }

  .visual-caption strong,
  .visual-caption small {
    display: block;
  }

  .visual-caption strong {
    font-size: 0.84rem;
  }

  .visual-caption small {
    margin-top: 3px;
    color: ${COLORS.TexteSecondaire};
    font-size: 0.74rem;
  }

  .visual-stamp {
    position: absolute;
    top: 24px;
    right: -26px;
    display: grid;
    width: 86px;
    height: 86px;
    padding: 10px;
    place-items: center;
    border-radius: 50%;
    background: ${COLORS.red};
    color: ${COLORS.white};
    font-family: Georgia, serif;
    font-size: 0.84rem;
    font-weight: 700;
    line-height: 1.1;
    text-align: center;
    transform: rotate(9deg);
  }

  .scroll-cue {
    position: absolute;
    bottom: 24px;
    left: 50%;
    width: 24px;
    height: 38px;
    border: 1px solid rgba(253, 253, 253, 0.5);
    border-radius: 99px;
    transform: translateX(-50%);
  }

  .scroll-cue span {
    position: absolute;
    top: 7px;
    left: 50%;
    width: 4px;
    height: 7px;
    border-radius: 99px;
    background: ${COLORS.yellow};
    animation: scroll 1.6s ease infinite;
  }

  @keyframes scroll {
    to {
      opacity: 0;
      transform: translate(-50%, 10px);
    }
  }

  @media (max-width: 800px) {
    min-height: auto;
    padding: 76px 24px 82px;

    .hero-inner {
      grid-template-columns: 1fr;
      gap: 55px;
    }

    .hero-copy {
      margin: 0 auto;
      text-align: center;
    }

    .intro {
      margin: 0 auto;
    }

    .actions,
    .reassurance {
      justify-content: center;
    }

    .seller-audience {
      max-width: 470px;
      margin-right: auto;
      margin-left: auto;
    }

    .hero-visual {
      width: min(75%, 370px);
    }
  }

  @media (max-width: 480px) {
    padding: 60px 20px 76px;

    .eyebrow {
      font-size: 0.68rem;
    }

    h1 {
      font-size: clamp(2.65rem, 13vw, 4rem);
    }

    .actions {
      flex-direction: column;
    }

    .actions button {
      width: 100%;
    }

    .reassurance {
      gap: 12px;
      font-size: 0.75rem;
    }

    .hero-visual {
      width: calc(100% - 24px);
      margin-right: 12px;
    }

    .visual-caption {
      right: -13px;
    }

    .visual-stamp {
      right: -15px;
      width: 72px;
      height: 72px;
      font-size: 0.72rem;
    }
  }
`;
