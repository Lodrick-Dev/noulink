import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const StorySection = styled.section`
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  padding: 5rem 1.5rem;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${COLORS.main};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  strong {
    color: ${COLORS.second};
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

const Story = () => {
  return (
    <StorySection>
      <h2>L’histoire de Nou Link</h2>
      <p>
        Originaire de <strong>Guyane 🇬🇫</strong>, je suis arrivé en France, puis
        une envie : retrouver les saveurs de chez moi.
      </p>
      <p>
        Un jour, je cherchais simplement où acheter un <strong>bami</strong> ou
        un <strong>nasi</strong>. J’ai fouillé Facebook, Instagram… mais c’était
        la galère 😅
      </p>
      <p>
        Finalement, c’est un <strong>pote qui connaît un pote</strong> qui m’a
        dépanné — et c’est comme ça que j’ai découvert un super{" "}
        <strong>#Bokit</strong> 🤣👌🏼
      </p>
      <p>
        Ce jour-là, je me suis dit :
        <br />
        <em>
          “Je ne dois pas être le seul à galérer à trouver nos plats
          ultramarins”
        </em>
      </p>
      <p>
        Alors j’ai décidé de créer <strong>Nou Link</strong> : une plateforme
        pour <strong>connecter les passionnés de cuisine ultramarine</strong> et{" "}
        <strong>rendre visibles nos talents culinaires</strong>, partout où nous
        y sommes. 🌍
      </p>
    </StorySection>
  );
};

export default Story;
