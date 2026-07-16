import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import styled, { keyframes } from "styled-components";

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const getAll = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_API}feedback/all`,
      );

      if (res.data.message) {
        setMessage(res.data.message);
      }

      if (res.data.galerie) {
        setFeedback(res.data.galerie);
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Impossible de récupérer les feedbacks.",
      );
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  if (feedback.length === 0) {
    return null;
  }

  return (
    <Section>
      <Container>
        <Header>
          <Title>Ce que les gens disent</Title>

          <Subtitle>
            Quelques retours reçus en message privé Instagram.
          </Subtitle>
        </Header>

        <Grid>
          <Track>
            {[...feedback, ...feedback].map((image, index) => (
              <Card key={`${image}-${index}`}>
                <ImageWrapper>
                  <Image
                    src={image}
                    alt={`Feedback Instagram ${index + 1}`}
                    loading="lazy"
                  />
                </ImageWrapper>
              </Card>
            ))}
          </Track>
        </Grid>

        {message && feedback.length === 0 && <NoFeedback>{message}</NoFeedback>}
      </Container>
    </Section>
  );
};

export default Feedback;

const Section = styled.section`
  width: 100%;
  padding: 100px 20px;
  background: #0f0f0f;
  color: white;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  color: #a1a1aa;
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const scroll = keyframes`
  0%{
    transform:translateX(0);
  }

  100%{
    transform:translateX(-50%);
  }
`;

const Grid = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 20px;
`;

const Track = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 320px;
  padding: 10px;

  background: #18181b;
  border: 1px solid #27272a;
  border-radius: 24px;

  transition:
    transform 0.35s ease,
    border-color 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: #3f3f46;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;

  overflow: hidden;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const NoFeedback = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #a1a1aa;
`;
