// DownloadApp.tsx

import styled from "styled-components";

const COLORS = {
  main: "#1f4068",
  second: "#278ea5",
  green: "#21bf73",
  yellow: "#f4d35e",
  red: "#ee6c4d",
  white: "#fdfdfd",
  black: "#1a1a1a",
  grey: "#dfe6e9",
  purple: "#8c45cf",
};

export default function DownloadApp() {
  return (
    <Container>
      <Content>
        <Left>
          <Badge>📱 Application mobile</Badge>

          <Title>
            Téléchargez <span>Nou Link</span>
          </Title>

          <Description>
            Découvrez les meilleurs restaurants autour de vous directement
            depuis votre iPhone.
          </Description>

          {/* <Features>
            <Feature>✓ Gratuit</Feature>
            <Feature>✓ Rapide</Feature>
            <Feature>✓ Restaurants vérifiés</Feature>
          </Features> */}

          <Button
            href="https://apps.apple.com/fr/app/nou-link/id6785300539"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger sur l'App Store
          </Button>
        </Left>

        <Right>
          <Phone src="/assets/screen1.png" alt="Nou Link" />
        </Right>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 70px 20px;
  background: linear-gradient(135deg, ${COLORS.main} 0%, ${COLORS.second} 100%);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Badge = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: white;
  font-size: 52px;
  margin: 0;

  span {
    color: ${COLORS.yellow};
  }

  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  line-height: 1.6;
  margin: 25px 0;
`;

const Features = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 35px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Feature = styled.div`
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 10px 18px;
  border-radius: 30px;
  font-size: 15px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.green};
  color: white;
  text-decoration: none;
  padding: 18px 34px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  transition: 0.25s;

  &:hover {
    transform: translateY(-3px);
    background: #18a863;
  }
`;

const Phone = styled.img`
  width: 230px;
  max-width: 100%;
  border-radius: 30px;
  filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.35));

  @media (max-width: 450px) {
    width: 70px;
    border-radius: 10px;
  }
`;
