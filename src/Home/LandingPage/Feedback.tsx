import React from "react";
import styled, { keyframes } from "styled-components";

type FeedbackItem = {
  id: number;
  image: string;
  alt: string;
};

const feedbacks: FeedbackItem[] = [
  {
    id: 1,
    image: "assets/feedbacks/feed01.jpeg",
    alt: "Feedback Instagram 1",
  },
  {
    id: 2,
    image: "assets/feedbacks/feed02.jpeg",
    alt: "Feedback Instagram 2",
  },
  {
    id: 3,
    image: "assets/feedbacks/feed03.jpeg",
    alt: "Feedback Instagram 3",
  },
  {
    id: 4,
    image: "assets/feedbacks/feed04.jpeg",
    alt: "Feedback Instagram 4",
  },
  {
    id: 5,
    image: "assets/feedbacks/feed05.jpeg",
    alt: "Feedback Instagram 5",
  },
];

const Feedback: React.FC = () => {
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
            {[...feedbacks, ...feedbacks].map((item, index) => (
              <Card key={`${item.id}-${index}`}>
                <ImageWrapper>
                  <Image src={item.image} alt={item.alt} />
                </ImageWrapper>
              </Card>
            ))}
          </Track>
        </Grid>
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
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px);
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
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
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
  width: max-content;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Card = styled.div`
  /* background: pink; */
  padding: 10px;
  flex: 0 0 auto;
  margin: 0px;
  width: 320px;
  background: #18181b;
  border: 1px solid #27272a;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease;
  border-radius: 24px;
  &:hover {
    transform: translateY(-6px);
    border-color: #3f3f46;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
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
