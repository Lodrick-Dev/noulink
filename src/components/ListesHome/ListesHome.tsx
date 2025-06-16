import styled from "styled-components";
import One from "./One";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Dynamic } from "../../Context/ContextDynamique";
import COLORS from "../../Styles/Styles";
import { useNavigate } from "react-router-dom";
import Resto from "./Resto";
import LoadingBlue from "../Loading/LoadingBlue";
export type TypeDocProps = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  pseudo?: string;
  ville?: string;
  saveur?: string;
  profil?: string;
  galerie?: string[];
  description?: string;
  speciality: string[];
};
const ListesHome = ({ saveur }: { saveur: string }) => {
  const [restaurants, setRestaurant] = useState<TypeDocProps[]>([]);
  const [getOne, setGetOne] = useState<TypeDocProps | null>(null);
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();
  const { ville } = Dynamic();
  // const [ville, setVille] = useState(""); // facultatif
  // const [saveur, setSaveur] = useState(""); // facultatif

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "get",
        url: `${
          import.meta.env.VITE_APP_API
        }restaurant/all?ville=${ville}&saveur=${saveur}`,
        withCredentials: true,
      });
      if (res.data) {
        setRestaurant(res.data);
      }
    } catch (error: any) {
      console.log(error);

      console.error("Erreur lors de la récupération des restaurants :", error);
      if (error.response.data.error) {
        toast.info(error.response.data.error);
        setRestaurant([]);
      } else {
        toast.error("Oups, une erreur !");
      }
    } finally {
      setLoading(false); // fin du chargement
    }
  };

  const getOneById = (id: string) => {
    for (const resto of restaurants) {
      if (resto._id === id) {
        setGetOne(resto);
        break; // On arrête la boucle dès qu'on a trouvé
      }
    }
  };

  useEffect(() => {
    fetchRestaurants();
    if (getOne) {
      setGetOne(null);
    }
  }, [ville, saveur]);
  return (
    <StyledListesHome>
      {loading ? (
        <div className="loading-blue">
          <LoadingBlue />
        </div>
      ) : (
        <>
          {!getOne && <span className="legend-sub">Inscrits: </span>}
          <div className="list-one">
            {getOne && (
              <Resto
                updatedAt={getOne.updatedAt}
                pseudo={getOne.pseudo}
                ville={getOne.ville}
                saveur={getOne.saveur}
                profil={getOne.profil}
                galerie={getOne.galerie}
                description={getOne.description}
                speciality={getOne.speciality}
                setGetOne={setGetOne}
              />
            )}
            {restaurants &&
              restaurants.length > 0 &&
              !getOne &&
              restaurants.map((resto) => (
                <One
                  key={resto._id}
                  profil={resto.profil}
                  name={resto.pseudo}
                  saveur={resto.saveur}
                  id={resto._id}
                  actionClick={getOneById}
                />
              ))}
            {restaurants && restaurants.length < 0 && !getOne && (
              <button onClick={() => nav("/inscription")}>Commencer</button>
            )}
          </div>
        </>
      )}
    </StyledListesHome>
  );
};

export default ListesHome;
const StyledListesHome = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  .loading-blue {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .legend-sub {
    width: 100%;
  }
  .list-one {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    button {
      padding: 5px 25px;
      border: none;
      outline: none;
      border-radius: 5px;
      margin: 10px auto;
      background: ${COLORS.green};
      color: ${COLORS.white};
      box-shadow: 1px 1px 5px ${COLORS.green};
      transition: 1s;
    }
    button:hover {
      transition: 1s;
      transform: scale(1.1);
      background: ${COLORS.yellow};
    }
  }
  @media screen and (max-width: 450px) {
    padding: 5px;
    .list-one {
      padding: 0px;
    }
  }
`;
