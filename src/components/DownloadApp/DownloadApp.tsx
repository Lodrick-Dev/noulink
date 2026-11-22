import styled from "styled-components";
import { ArrowUpRight, MapPin, Smartphone } from "lucide-react";
import COLORS from "../../Styles/Styles";

export default function DownloadApp() {
  return (
    <Container id="application" aria-labelledby="download-app-title">
      <Content>
        <Copy>
          <Badge>
            <Smartphone size={16} aria-hidden="true" />
            Application iPhone
          </Badge>

          <Title id="download-app-title">
            Les saveurs de chez toi,
            <span> dans ta poche.</span>
          </Title>

          <Description>
            Retrouve les spécialités, les profils et les adresses ultramarines
            près de toi, directement depuis ton iPhone.
          </Description>

          <Benefits>
            <span>
              <MapPin size={17} aria-hidden="true" />
              Découvre autour de toi
            </span>
            <span>
              <Smartphone size={17} aria-hidden="true" />
              Sur iPhone
            </span>
          </Benefits>

          <Button
            href="https://apps.apple.com/fr/app/nou-link/id6785300539"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger sur l’App Store
            <ArrowUpRight size={18} aria-hidden="true" />
          </Button>

          <Availability>L’application Nou Link est disponible sur l’App Store.</Availability>
        </Copy>

        <Visual>
          <PhoneFrame>
            <Phone
              src="/assets/screen1.png"
              alt="Écran de l’application Nou Link"
              loading="lazy"
            />
          </PhoneFrame>
          <VisualNote>
            <span />
            Nou Link, partout avec toi
          </VisualNote>
        </Visual>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  padding: 88px 24px;
  background: ${COLORS.white};

  @media (max-width: 600px) {
    padding: 68px 18px;
  }
`;

const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(250px, 0.72fr);
  align-items: center;
  gap: clamp(32px, 7vw, 90px);
  max-width: 1160px;
  min-height: 490px;
  margin: 0 auto;
  padding: clamp(35px, 7vw, 78px);
  overflow: hidden;
  border-radius: 32px;
  background: linear-gradient(120deg, ${COLORS.main}, ${COLORS.second});
  box-shadow: 0 25px 65px rgba(31, 64, 104, 0.2);
  color: ${COLORS.white};

  &::before,
  &::after {
    position: absolute;
    border: 1px solid rgba(253, 253, 253, 0.14);
    border-radius: 50%;
    content: "";
    pointer-events: none;
  }

  &::before {
    top: -190px;
    right: -120px;
    width: 430px;
    height: 430px;
  }

  &::after {
    right: 6%;
    bottom: -240px;
    width: 390px;
    height: 390px;
    border-color: rgba(244, 211, 94, 0.25);
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 42px;
    max-width: 560px;
    min-height: 0;
    padding: 48px 28px;
  }

  @media (max-width: 420px) {
    padding: 38px 21px;
    border-radius: 24px;
  }
`;

const Copy = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;

  @media (max-width: 760px) {
    text-align: center;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 13px;
  border: 1px solid rgba(253, 253, 253, 0.24);
  border-radius: 999px;
  background: rgba(253, 253, 253, 0.1);
  color: ${COLORS.yellow};
  font-size: 0.78rem;
  font-weight: 700;
`;

const Title = styled.h2`
  margin: 22px 0 16px;
  color: ${COLORS.white};
  font-family: Georgia, serif;
  font-size: clamp(2.5rem, 5vw, 4.2rem);
  letter-spacing: -0.055em;
  line-height: 1.05;

  span {
    display: block;
    color: ${COLORS.yellow};
    font-weight: 500;
  }
`;

const Description = styled.p`
  max-width: 520px;
  color: rgba(253, 253, 253, 0.82);
  font-size: 1rem;
  line-height: 1.8;

  @media (max-width: 760px) {
    margin: 0 auto;
  }
`;

const Benefits = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin: 24px 0 29px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(253, 253, 253, 0.88);
    font-size: 0.82rem;
    font-weight: 600;
  }

  svg {
    color: ${COLORS.yellow};
  }

  @media (max-width: 760px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 54px;
  padding: 0 22px;
  border-radius: 999px;
  background: ${COLORS.green};
  box-shadow: 0 10px 24px rgba(10, 39, 61, 0.18);
  color: ${COLORS.white};
  font-size: 0.92rem;
  font-weight: 800;
  text-decoration: none;
  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    background: ${COLORS.main};
    box-shadow: 0 14px 28px rgba(10, 39, 61, 0.24);
  }

  &:focus-visible {
    outline: 3px solid ${COLORS.yellow};
    outline-offset: 4px;
  }

  @media (max-width: 420px) {
    width: 100%;
    padding: 0 12px;
    font-size: 0.85rem;
  }
`;

const Availability = styled.p`
  margin-top: 13px;
  color: rgba(253, 253, 253, 0.65);
  font-size: 0.73rem;

  @media (max-width: 760px) {
    line-height: 1.5;
  }
`;

const Visual = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;

  @media (max-width: 760px) {
    min-height: 0;
  }
`;

const PhoneFrame = styled.div`
  width: min(100%, 255px);
  padding: 8px;
  border: 1px solid rgba(253, 253, 253, 0.45);
  border-radius: 34px;
  background: rgba(253, 253, 253, 0.18);
  box-shadow: 0 26px 52px rgba(10, 39, 61, 0.3);
  transform: rotate(3deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(0) translateY(-5px);
  }

  @media (max-width: 760px) {
    width: min(65%, 230px);
  }
`;

const Phone = styled.img`
  display: block;
  width: 100%;
  max-height: 445px;
  aspect-ratio: 9 / 17;
  border-radius: 26px;
  background: ${COLORS.white};
  object-fit: cover;
  object-position: top;
`;

const VisualNote = styled.div`
  position: absolute;
  right: -12px;
  bottom: 34px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 12px 15px;
  border: 1px solid rgba(223, 230, 233, 0.7);
  border-radius: 14px;
  background: ${COLORS.white};
  box-shadow: 0 12px 30px rgba(10, 39, 61, 0.2);
  color: ${COLORS.main};
  font-size: 0.78rem;
  font-weight: 700;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${COLORS.green};
    box-shadow: 0 0 0 4px rgba(33, 191, 115, 0.14);
  }

  @media (max-width: 760px) {
    right: 2%;
    bottom: 16px;
  }

  @media (max-width: 420px) {
    right: -4px;
    bottom: 10px;
    padding: 10px 12px;
    font-size: 0.7rem;
  }
`;
