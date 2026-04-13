import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useNavigate } from "react-router-dom";

const PromoBanner = () => {
  const nav = useNavigate();

  return (
    <Banner>
      <p>
        🎉 Offre qui tue Nou Link : <strong>25,00 € au lieu de 160 €</strong>
        {/* jusqu’au 31 janvier ! */}
      </p>
      <Button onClick={() => nav("/auth")}>Go !</Button>
    </Banner>
  );
};

export default PromoBanner;

// Styled Components
const Banner = styled.div`
  background-color: ${COLORS.second};
  color: ${COLORS.white};
  font-weight: 600;
  text-align: center;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  width: 50%;
  strong {
    color: ${COLORS.yellow}; // Montre le prix promo
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0px;
    justify-content: center;
  }
`;

const Button = styled.button`
  background-color: ${COLORS.green};
  color: ${COLORS.white};
  border: none;
  /* border-radius: 9999px; */
  border-radius: 10px;
  padding: 0.6rem 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px ${COLORS.green};
  }
`;
