import styled from "styled-components";
import { useEffect, useState } from "react";
import COLORS from "../../Styles/Styles";
import Actualisation from "./Actualisation";
import CheckedCodeNumber from "./CheckedCodeNumber";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../Loading/Loading";
import AllData from "./AllData";
import FormSpeciality from "./DataDoc/Forms/FormSpeciality";
import FormProfil from "./DataDoc/Forms/FormProfil";
import FormGalerie from "./DataDoc/Forms/FormGalerie";
import LoadingBlue from "../Loading/LoadingBlue";
import FormGlobale from "./DataDoc/Forms/FormGlobale";
import ManagerAccount from "./ManagerAccount";
import { Dynamic } from "../../Context/ContextDynamique";
import SkeletonLoader from "../utils/SkeletonLoader";
// import Loading from "../utils/Loading";
export type TypeDoc = {
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
export type TypeGalerie = string;
export type TypeSpecility = string;
const Dashboard = () => {
  const { loadingUser, userAuth } = Dynamic();
  const [actualised, setActualised] = useState(false);
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const [idLoading, setIdLoading] = useState(false);
  const [restaurant, setRestaurant] = useState<TypeDoc | null>(null);
  const [galerie, setGalerie] = useState<TypeGalerie[]>([]);
  const [speciality, setSpeciality] = useState<TypeSpecility[]>([]);

  //getOne on va prendre id de userAuth
  const getOne = async () => {
    if (!id) return toast.error("Un identifiant est nécessaire");
    setIdLoading(true);
    try {
      const res = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API}restaurant/one/${id}`,
        withCredentials: true,
      });
      if (res.data) {
        setRestaurant(res.data);
        setGalerie(res.data.galerie);
        setSpeciality(res.data.speciality);
        setIdLoading(false);
      }
    } catch (error) {
      console.log(error);
      return toast.error("Un erreur est survenue");
    }
  };

  //useffet
  useEffect(() => {
    if (id) {
      getOne();
    }
  }, [id]);
  return (
    <StyledDashboard>
      {!actualised && <h3>Tableau de bord</h3>}
      <div className="the-forms">
        <span className="email">
          Votre email (non public) :{" "}
          {loadingUser ? <Loading /> : userAuth?.email}
        </span>
        {/* <SkeletonLoader /> */}
        <FormProfil />
        <FormSpeciality speciality={[]} id={"yoinp"} />
        <FormGalerie galerie={[]} id={"ouobo"} />
        <FormGlobale
          name={userAuth?.user_metadata?.name}
          saveur={"Guyane"}
          villebase={"Paris"}
          description={"Ma ptn descriptiotn"}
          setUpdate={setUpdate}
          id={"mon id bro"}
          setRestaurant={setRestaurant}
        />
      </div>
      <ManagerAccount />
      {restaurant && !idLoading && (
        <AllData
          restaurant={restaurant}
          setRestaurant={setRestaurant}
          galerie={galerie}
          speciality={speciality}
        />
      )}
    </StyledDashboard>
  );
};

export default Dashboard;
const StyledDashboard = styled.section`
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
  padding: 50px 0px;
  h3 {
    text-align: center;
    font-size: 2.8em;
  }
  .the-forms {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    margin: 0px auto;
    .email {
      width: 100%;
      display: flex;
      opacity: 0.5;
      margin-bottom: 10px;
      font-size: 0.8em;
    }
  }
  @media screen and (max-width: 450px) {
    .the-forms {
      width: 100%;
    }
  }
`;
