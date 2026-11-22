import styled from "styled-components";
import { ChevronDown } from "lucide-react";
import COLORS from "../../Styles/Styles";

const questions = [
  {
    question: "Qu’est-ce que Nou Link ?",
    answer:
      "Un annuaire qui recense les personnes qui cuisinent des plats antillais, guyanais et ultramarins en France métropolitaine. Tu cherches, tu trouves, tu contactes directement.",
  },
  {
    question: "La consultation des profils est-elle gratuite ?",
    answer:
      "Oui, chercher et consulter les profils est gratuit. Aucun compte n’est nécessaire pour trouver des spécialités près de toi.",
  },
  {
    question: "Je cuisine chez moi, puis-je m’inscrire ?",
    answer:
      "Oui. Particulier ou professionnel, tu peux créer un profil et présenter tes spécialités à la communauté.",
  },
  {
    question: "Comment les personnes intéressées me contactent-elles ?",
    answer:
      "Les personnes découvrent ton profil et prennent contact directement avec toi pour échanger sur tes spécialités.",
  },
];

const QuestionsSection = () => (
  <Section id="questions">
    <div className="heading">
      <span>Les réponses à tes questions</span>
      <h2>Tu veux en savoir plus ?</h2>
    </div>
    <div className="questions">
      {questions.map(({ question, answer }) => (
        <details key={question}>
          <summary>
            {question}
            <ChevronDown size={19} aria-hidden="true" />
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  </Section>
);

export default QuestionsSection;

const Section = styled.section`
  padding: 94px 24px 105px;
  background: ${COLORS.Fond};

  .heading {
    margin: 0 auto 36px;
    text-align: center;
  }

  .heading span {
    color: ${COLORS.second};
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  h2 {
    margin-top: 12px;
    color: ${COLORS.main};
    font-family: Georgia, serif;
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: -0.04em;
  }

  .questions {
    display: grid;
    gap: 12px;
    max-width: 780px;
    margin: 0 auto;
  }

  details {
    overflow: hidden;
    border: 1px solid ${COLORS.Bordure};
    border-radius: 15px;
    background: ${COLORS.Carte};
    transition: border-color 0.2s ease;
  }

  details[open] {
    border-color: ${COLORS.second};
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 22px;
    color: ${COLORS.main};
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary svg {
    flex: 0 0 auto;
    color: ${COLORS.second};
    transition: transform 0.2s ease;
  }

  details[open] summary svg {
    transform: rotate(180deg);
  }

  details p {
    padding: 0 22px 21px;
    color: ${COLORS.TexteSecondaire};
    font-size: 0.88rem;
    line-height: 1.75;
  }

  @media (max-width: 480px) {
    padding: 76px 18px;

    summary {
      padding: 17px;
      font-size: 0.87rem;
    }

    details p {
      padding: 0 17px 17px;
      font-size: 0.84rem;
    }
  }
`;
