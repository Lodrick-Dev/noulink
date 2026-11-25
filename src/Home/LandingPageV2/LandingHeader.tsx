import styled from "styled-components";
import { ArrowUpRight, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../Styles/Styles";

const LandingHeader = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <a className="brand" href="/" aria-label="Nou Link, accueil">
        <img src="/svglogo.svg" alt="" />
        <span>
          <span className="nou">nou</span>
          <span className="nk">l</span>
          <span className="ii">i</span>
          <span className="nk">nk</span>
        </span>
      </a>
      <nav aria-label="Navigation principale">
        <a href="#vendeurs">Pour les vendeurs</a>
        <a href="#comment-ca-marche">Comment ça marche</a>
        <a href="#offre">L’offre</a>
        <a href="#decouvrir">Découvrir</a>
      </nav>
      <button className="header-cta" onClick={() => navigate("/auth")}>
        Référencer mon activité <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <a
        className="mobile-menu"
        href="#vendeurs"
        aria-label="Voir les avantages pour les vendeurs"
      >
        <Menu size={23} aria-hidden="true" />
      </a>
    </Header>
  );
};

export default LandingHeader;

const Header = styled.header`
  min-height: 82px;
  padding: 0 clamp(20px, 6vw, 88px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: ${COLORS.black};

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: ${COLORS.main};
    font-size: 1.35rem;
    font-weight: 800;
    letter-spacing: -0.07em;
    text-decoration: none;
    white-space: nowrap;
  }

  .brand img {
    width: 39px;
    height: 39px;
    object-fit: contain;
  }
  .brand span.nou {
    color: ${COLORS.redlogo};
  }
  .brand span.ii {
    color: ${COLORS.green};
  }
  .brand span.nk {
    color: ${COLORS.white};
  }
  .brand span span {
    color: ${COLORS.second};
  }

  nav {
    display: flex;
    align-items: center;
    gap: clamp(18px, 3vw, 42px);
  }

  nav a {
    color: ${COLORS.TexteSecondaire};
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  nav a:hover {
    color: ${COLORS.main};
  }

  .header-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 19px;
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

  .header-cta:hover {
    background: ${COLORS.second};
    transform: translateY(-2px);
  }

  .mobile-menu {
    display: none;
    color: ${COLORS.main};
  }

  @media (max-width: 720px) {
    min-height: 70px;
    padding: 0 20px;

    nav {
      display: none;
    }

    .header-cta {
      margin-left: auto;
      padding: 10px 14px;
      font-size: 0.8rem;
    }

    .mobile-menu {
      display: inline-flex;
      align-items: center;
    }
  }
`;
