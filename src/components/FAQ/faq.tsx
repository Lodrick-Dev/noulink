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
          Nou Link est une plateforme qui met en avant les spécialités
          culinaires de l’Outre-mer. Vous pouvez rechercher et découvrir des
          repas gratuitement.
        </p>
      </div>
      <div className="second">
        <h4
          onClick={() => toggleFAQ(1)}
          className={activeIndex === 1 ? "active" : ""}
        >
          Q2 : Qui peut publier un profil ?
        </h4>
        <p className={activeIndex === 1 ? "show" : ""}>
          Toute personne souhaitant présenter ses repas peut créer un profil,
          qu’il s’agisse d’un particulier ou d’un établissement.
        </p>
      </div>
      <div className="second">
        <h4
          onClick={() => toggleFAQ(2)}
          className={activeIndex === 2 ? "active" : ""}
        >
          Q3 : Un investissement pour publier un profil ?
        </h4>
        <p className={activeIndex === 2 ? "show" : ""}>
          {" "}
          Oui, la création et la gestion d’un profil sont soumises à un
          abonnement annuel payant. La consultation reste gratuite.{" "}
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
          tout moment. Les abonnements ne sont pas remboursables.
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
      color: ${COLORS.main};
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
