import styled from "styled-components";
import { CheckCircle } from "lucide-react";
import COLORS from "../../Styles/Styles";

const Card = styled.div`
  max-width: 350px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  padding: 24px;
  text-align: center;
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
  opacity: 0.8;
  margin: 5px 0 0;
`;

const Price = styled.div`
  margin: 20px 0;
  font-size: 36px;
  font-weight: 800;
  color: ${COLORS.second};
`;

const PerYear = styled.span`
  display: block;
  font-size: 14px;
  opacity: 0.7;
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
  margin-bottom: 12px;
  font-size: 15px;
`;

const SubscribeButton = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
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
  return (
    <Card>
      <Header>
        <Title>Pack Découverte</Title>
        <Subtitle>Accédez à toutes les fonctionnalités</Subtitle>
      </Header>

      <Price>39,99 €</Price>
      <PerYear>/ an</PerYear>

      <Features>
        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Création de profil public</span>
        </FeatureItem>
        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Mise en avant de vos spécialités</span>
        </FeatureItem>
        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Galerie photos et description</span>
        </FeatureItem>
        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Faites découvrir vos spécialités</span>
        </FeatureItem>
      </Features>

      <SubscribeButton>Je rejoins</SubscribeButton>
    </Card>
  );
}
