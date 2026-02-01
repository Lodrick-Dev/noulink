import styled from "styled-components";
import COLORS from "../../Styles/Styles";

const StorySection = styled.section`
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  padding: 5rem 1.5rem;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  .text-story{
  width: 80%;
  margin: 0 auto;}
  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${COLORS.main};
  }
  h3{
     font-size: 2.4rem;
    font-weight: 700;
    color: ${COLORS.main};
    margin-bottom: 2rem;
    span{color:${COLORS.yellow}}
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  strong {
    color: ${COLORS.second};
  }

  em {
    font-style: italic;
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 1.2em;
    }
    h3{
      font-size: 1.8em;}
    .text-story{width: 100%;}
    p {
      font-size: 1.2rem;
    }
  }
`;

const Story = () => {
  return (
    <StorySection>
      <h2>Tu cherches ou tu cuisines des plats de chez toi ?</h2>
      <h3><span>Nou Link</span> est là pour ça.</h3>
      <div className="text-story">

      <p>
        Tu viens de <strong>Guyane</strong>, des <strong>Antilles</strong>, de{" "}
        <strong>Mayotte</strong> ou d’ailleurs ?
      </p>

      <p>
        Et parfois, tu te dis :
        <br />
        <em>“J’aimerais bien manger un plat de chez moi…”</em>
        <br />
        <em>
          “Un vrai bokit, un colombo, un bami… comme là-bas.”
        </em>
      </p>

      <p>
        Quand on vit en France, ce n’est pas toujours simple de savoir où trouver
        ces repas. On cherche sur les réseaux, on demande autour de soi, souvent
        par connaissance.
      </p>

      <p>
        Pourtant, il y a des personnes qui cuisinent déjà ces plats.
        <br />
        Des gens comme toi, installés ici, qui préparent des repas de chez eux
        pour partager.
      </p>

      <p>
        <strong>Nou Link est là pour ça.</strong>
      </p>

      <p>
        Ici, on retrouve <strong>les repas de chez nous</strong>.
        <br />
        Tu peux découvrir des personnes qui proposent des plats traditionnels,
        des recettes de chez eux, des saveurs que tu connais déjà.
      </p>

      <p>
        Pas besoin de chercher partout.
        <br />
        Sur Nou Link, tu peux voir les profils, découvrir les spécialités et
        trouver des repas <strong>près de chez toi</strong>.
        <br />
        Tout est au même endroit.
      </p>

      <p>
        Que tu cherches à manger comme chez toi, ou que tu cuisines ces plats,
        <br />
        Nou Link met simplement les bonnes personnes en relation.
      </p>

      <p>
        Tu ne cherches pas “n’importe quoi”.
        <br />
        Tu cherches <strong>les saveurs de chez toi</strong>.
      </p>

      <p>
        👉 <strong>Nou Link, c’est pour ça que ça existe.</strong>
      </p>

      <p>
        <em>
          Nou Link est né d’une simple envie personnelle : j’avais juste
          envie de manger un plat de chez moi. En cherchant autour de moi, je me
          suis rendu compte que cette situation était partagée par beaucoup
          d’autres.
        </em>
      </p>
      </div>
    </StorySection>
  );
};

export default Story;


// import styled from "styled-components";
// import COLORS from "../../Styles/Styles";

// const StorySection = styled.section`
//   background-color: ${COLORS.white};
//   color: ${COLORS.black};
//   padding: 5rem 1.5rem;
//   text-align: center;
//   max-width: 100%;
//   margin: 0 auto;

//   h2 {
//     font-size: 2rem;
//     font-weight: 700;
//     color: ${COLORS.main};
//     margin-bottom: 2rem;
//   }

//   p {
//     font-size: 1.1rem;
//     line-height: 1.8;
//     margin-bottom: 1.5rem;
//   }

//   strong {
//     color: ${COLORS.second};
//   }

//   @media (min-width: 768px) {
//     h2 {
//       font-size: 2.5rem;
//     }
//     p {
//       font-size: 1.2rem;
//     }
//   }
// `;

// const Story = () => {
//   return (
//     <StorySection>
//       <h2>L’histoire de Nou Link</h2>
//       <p>
//         Originaire de <strong>Guyane 🇬🇫</strong>, je suis arrivé en France, puis
//         une envie : retrouver les saveurs de chez moi.
//       </p>
//       <p>
//         Un jour, je cherchais simplement où acheter un <strong>bami</strong> ou
//         un <strong>nasi</strong>. J’ai fouillé Facebook, Instagram… mais c’était
//         la galère
//       </p>
//       <p>
//         Finalement, c’est un <strong>pote qui connaît un pote</strong> qui m’a
//         dépanné — et c’est comme ça que j’ai découvert un super{" "}
//         <strong>#Bokit</strong>👌🏼
//       </p>
//       <p>
//         Ce jour-là, je me suis dit :
//         <br />
//         <em>
//           “Je ne dois pas être le seul à galérer à trouver nos plats
//           ultramarins”
//         </em>
//       </p>
//       <p>
//         Alors j’ai décidé de créer <strong>Nou Link</strong> : une plateforme
//         pour <strong>connecter les passionnés de cuisine ultramarine</strong> et{" "}
//         <strong>rendre visibles nos talents culinaires</strong>, partout où nous
//         y sommes. 🌍
//       </p>
//     </StorySection>
//   );
// };

// export default Story;
