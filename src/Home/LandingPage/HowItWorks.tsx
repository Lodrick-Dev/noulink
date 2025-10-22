import styled from "styled-components";
import { CheckCircle } from "lucide-react";
import COLORS from "../../Styles/Styles";

const Section = styled.section`
  width: 100%;
  padding: 6rem 1.5rem;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: ${COLORS.main};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: ${COLORS.grey};
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.main};
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const CheckWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Crée ton profil",
      description: "Présente-toi et partage tes spécialités culinaires.",
      icon: "👩🏽‍🍳",
    },
    {
      id: 2,
      title: "Ajoute tes plats",
      description: "Publie tes meilleures créations avec de belles photos.",
      icon: "🍲",
    },
    {
      id: 3,
      title: "Sois découvert",
      description: "Les utilisateurs te trouvent près de chez eux 🌍.",
      icon: "📍",
    },
  ];

  return (
    <Section>
      <Title>Comment ça marche ?</Title>
      <Grid>
        {steps.map((step) => (
          <Card key={step.id}>
            <Icon>{step.icon}</Icon>
            <StepTitle>{step.title}</StepTitle>
            <Description>{step.description}</Description>
            <CheckWrapper>
              <CheckCircle size={24} color={COLORS.green} strokeWidth={2.5} />
            </CheckWrapper>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default HowItWorks;
