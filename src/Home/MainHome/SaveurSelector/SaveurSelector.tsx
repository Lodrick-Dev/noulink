import styled from "styled-components";
import COLORS from "../../../Styles/Styles";

export const saveurs = [
  { name: "Guyane", flag: "https://flagcdn.com/w80/gf.png" },
  { name: "Guadeloupe", flag: "https://flagcdn.com/w80/gp.png" },
  { name: "Martinique", flag: "https://flagcdn.com/w80/mq.png" },
  { name: "Mayotte", flag: "https://flagcdn.com/w80/yt.png" },
  // { name: "Madagascar", flag: "https://flagcdn.com/w80/mg.png" },
];

const SaveurSelector = ({
  saveur,
  setSaveur,
}: {
  saveur: string;
  setSaveur: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <ListeCountry>
      <p>Saveurs :</p>
      <div className="liste">
        {saveurs.map((item) => (
          <div
            key={item.name}
            className={`bulle ${saveur === item.name ? "actif" : ""}`}
            onClick={() =>
              setSaveur((prev) => (prev === item.name ? "" : item.name))
            }
          >
            <img src={item.flag} alt={item.name} />
            {/* <span>{item.name}</span> */}
          </div>
        ))}
      </div>
    </ListeCountry>
  );
};

export default SaveurSelector;
const ListeCountry = styled.div`
  width: 50%;
  /* background: linear-gradient(135deg, ${COLORS.main}, ${COLORS.second}); */
  background: rgba(70, 224, 255, 0.12); //rgb(244 211 94 / 53%)
  border: 1px solid rgba(4, 97, 125, 0.575);
  backdrop-filter: blur(3px);
  border-radius: 18px;
  /* background: ${COLORS.main}; */
  padding: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;

  p {
    color: ${COLORS.white};
    font-weight: 600;
    font-size: 0.9em;
    margin-bottom: 12px;
  }

  .liste {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .bulle {
    width: 70px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    transition: all 0.25s ease;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      object-fit: cover;
      background: ${COLORS.white};
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
      border: 2px solid transparent;
      transition: all 0.25s ease;
    }

    span {
      font-size: 0.75em;
      color: ${COLORS.white};
      font-weight: 500;
      text-align: center;
    }

    &:hover img {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.35);
    }
  }

  .actif img {
    border-color: ${COLORS.yellow};
    box-shadow:
      0 0 0 3px rgba(244, 211, 94, 0.6),
      0 7px 10px rgba(244, 211, 94, 0.5);
    transform: scale(1.05);
  }

  .actif span {
    color: ${COLORS.yellow};
    font-weight: 600;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    .bulle {
      width: 60px;
    }
  }
`;
