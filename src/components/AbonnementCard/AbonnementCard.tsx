import styled from "styled-components";
import { CheckCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import COLORS from "../../Styles/Styles";

const Card = styled.div`
  max-width: 350px;
  min-width: 350px;
  margin: 20px auto;

  border-radius: 20px;

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  background-color: ${COLORS.white};
  color: ${COLORS.black};

  padding: 24px;

  text-align: center;

  .offre-badge {
    display: inline-block;

    background: ${COLORS.yellow};
    color: ${COLORS.main};

    font-weight: 800;
    font-size: 0.76rem;

    letter-spacing: 1px;
    text-transform: uppercase;

    padding: 7px 18px;

    border-radius: 9999px;

    margin-bottom: 24px;
  }

  em {
    display: block;

    margin-top: 16px;

    font-size: 10px;

    opacity: 0.8;
  }
`;

const Header = styled.div`
  background-color: ${COLORS.main};

  color: ${COLORS.white};

  border-radius: 16px;

  padding: 16px;

  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;

  opacity: 0.85;

  margin: 5px 0 0;
`;

const Price = styled.div`
  margin: 20px 0;

  font-size: 36px;

  font-weight: 800;

  color: ${COLORS.second};

  display: flex;

  flex-direction: column;
`;

const PriceLine = styled.div`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;
`;

const OldPrice = styled.span`
  font-size: 18px;

  color: #888;

  text-decoration: line-through;
`;

const PerYear = styled.span`
  display: block;

  font-size: 14px;

  font-weight: 500;

  opacity: 0.7;
`;

const PromoInfo = styled.p`
  font-size: 13px;

  color: ${COLORS.main};

  margin-top: -10px;

  margin-bottom: 20px;

  font-style: italic;
`;

const Features = styled.ul`
  list-style: none;

  padding: 0;

  margin: 20px 0;

  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 13px;

  font-size: 15px;

  line-height: 1.3;

  svg {
    flex-shrink: 0;
  }
`;

const SubscribeButton = styled.button`
  width: 100%;

  padding: 14px;

  border: none;

  border-radius: 9999px;

  font-weight: 600;

  font-size: 16px;

  background-color: ${COLORS.second};

  color: ${COLORS.white};

  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${COLORS.main};
  }
`;

export default function AbonnementCard() {
  const nav = useNavigate();
  const loc = useLocation();

  return (
    <Card>
      <div className="offre-badge">🔥 Offre lancement</div>

      <Header>
        <Title>Pack Découverte</Title>

        <Subtitle>Faites découvrir votre restaurant sur Nou Link</Subtitle>
      </Header>

      <Price>
        <PriceLine>
          <OldPrice>160,00 €</OldPrice>

          <span>65,00 €</span>
        </PriceLine>

        <PerYear>pour 1 an</PerYear>
      </Price>

      <PromoInfo>Offre limitée · valable jusqu'au 20/09/2026</PromoInfo>

      <Features>
        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Profil restaurant web & mobile</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Présentation de vos spécialités</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Galerie photos & description</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Réception et gestion des commandes</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Notifications des nouvelles commandes</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Sans renouvellement automatique</span>
        </FeatureItem>
      </Features>

      {loc.pathname !== "/dashboard" && (
        <SubscribeButton onClick={() => nav("/auth")}>
          Je découvre
        </SubscribeButton>
      )}

      <em>✅ Paiement sécurisé · Sans engagement</em>
    </Card>
  );
}
