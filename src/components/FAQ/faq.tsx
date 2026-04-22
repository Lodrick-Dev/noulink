import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };
  return (
    <StyledFaq>
      <div className="first">
        <h3>FAQ - Nou Link</h3>
      </div>
      <div className="second">
        <h4
          onClick={() => toggleFAQ(0)}
          className={activeIndex === 0 ? "active" : ""}
        >
          Q1 : Qu’est-ce que Nou Link ?
        </h4>
        <p className={activeIndex === 0 ? "show" : ""}>
          Un annuaire gratuit qui recense les personnes qui cuisinent des plats
          antillais, guyanais et ultramarins en France métropole. Tu cherches,
          tu trouves, tu contactes directement.
        </p>
      </div>
      <div className="second">
        <h4
          onClick={() => toggleFAQ(1)}
          className={activeIndex === 1 ? "active" : ""}
        >
          Q2 : La consultation est-elle gratuite ?
        </h4>
        <p className={activeIndex === 1 ? "show" : ""}>
          Oui, chercher et consulter les profils est 100% gratuit. Aucun compte
          nécessaire pour trouver des repas près de toi.
        </p>
      </div>
      <div className="second">
        <h4
          onClick={() => toggleFAQ(2)}
          className={activeIndex === 2 ? "active" : ""}
        >
          Q3 : Je cuisine chez moi, puis-je m'inscrire ?
        </h4>
        <p className={activeIndex === 2 ? "show" : ""}>
          Absolument. Particulier ou professionnel, tu peux créer un profil et
          être visible auprès de toute la communauté en France.
        </p>
      </div>
      <div className="second">
        <h4
          onClick={() => toggleFAQ(3)}
          className={activeIndex === 3 ? "active" : ""}
        >
          Q4 : Que comprend l’abonnement ?
        </h4>
        <p className={activeIndex === 3 ? "show" : ""}>
          L’abonnement annuel permet de créer et gérer un profil public avec
          pseudo, description, images et liste de spécialités culinaires.
        </p>
      </div>
      <div className="second">
        <h4
          onClick={() => toggleFAQ(4)}
          className={activeIndex === 4 ? "active" : ""}
        >
          Q5 : Puis-je arrêter mon abonnement ou supprimer mon profil ?
        </h4>
        <p className={activeIndex === 4 ? "show" : ""}>
          Oui, vous pouvez supprimer votre profil et résilier votre abonnement à
          tout moment. Pas de renouvellement automatique de l'abonnement.
        </p>
      </div>
    </StyledFaq>
  );
};

export default Faq;
const StyledFaq = styled.section`
  width: 90%;
  padding: 10px;
  border-top: 1px solid white;
  border-radius: 3px;
  margin: 30px auto;
  .first {
    h3 {
      font-size: 1.5em;
    }
  }
  .second {
    margin-top: 10px;
    h4 {
      font-size: 1.3em;
      color: ${COLORS.grey};
      cursor: pointer;
      transition: 1s;
    }
    h4:hover {
      color: ${COLORS.yellow};
    }
    .active {
      color: ${COLORS.yellow};
    }
    p {
      display: none;
      transition: 1s;
      margin-left: 0px;
    }
    .show {
      display: block;
      padding: 10px;
      border: 3px solid ${COLORS.yellow};
      border-radius: 25px;
      transition: 1s;
      animation: animPara 0.8s ease-in-out forwards;
    }
    @keyframes animPara {
      0% {
        opacity: 0;
        margin-left: 0px;
      }
      100% {
        opacity: 1;
        margin-left: 40px;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .second {
      h4 {
        font-size: 1em;
      }
    }
  }
`;
