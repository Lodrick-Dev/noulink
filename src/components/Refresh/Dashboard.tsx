import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import COLORS from "../../Styles/Styles";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../Loading/Loading";
import FormSpeciality from "./DataDoc/Forms/FormSpeciality";
import FormProfil from "./DataDoc/Forms/FormProfil";
import FormGalerie from "./DataDoc/Forms/FormGalerie";
import LoadingBlue from "../Loading/LoadingBlue";
import FormGlobale from "./DataDoc/Forms/FormGlobale";
import ManagerAccount from "./ManagerAccount";
import { Dynamic } from "../../Context/ContextDynamique";
import SkeletonLoader from "../utils/SkeletonLoader";
import Resto from "../ListesHome/Resto";
import { Eye, LockKeyholeOpen } from "lucide-react";
// import Loading from "../utils/Loading";
export type TypeDoc = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  pseudo?: string;
  ville?: string;
  saveur?: string;
  statut?: number;
  profil?: string;
  galerie?: string[];
  description?: string;
  speciality: string[];
};
export type TypeGalerie = string;
export type TypeSpecility = string;
const Dashboard = () => {
  const { loadingUser, userAuth, setPopToPay } = Dynamic();
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const [imgProfilUploaded, setImgProfilUploaded] = useState<
    string | undefined
  >();
  const [idLoading, setIdLoading] = useState(false);
  const [restaurant, setRestaurant] = useState<TypeDoc | null>(null);
  const [galerie, setGalerie] = useState<TypeGalerie[]>([]);
  const [speciality, setSpeciality] = useState<TypeSpecility[]>([]);

  //scroll preview :
  const previewRef = useRef<HTMLDivElement>(null);

  const handleScrollToPreview = () => {
    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  //getOne on va prendre id de userAuth
  const getOne = async () => {
    if (!userAuth?.id) return toast.error("Un identifiant est nécessaire");
    setIdLoading(true);
    try {
      const res = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API}restaurant/one/${userAuth?.id}`,
        withCredentials: true,
      });
      console.log(res);

      if (res.data) {
        setId(res.data.idsupabase);
        setImgProfilUploaded(res.data.profil);
        setRestaurant(res.data);
        setGalerie(res.data.galerie);
        setSpeciality(res.data.speciality);
        setIdLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      if (
        !error.response.data.error.includes("Aucun élément trouvé avec ce ID")
      ) {
        return toast.error("Un erreur est survenue");
      }
    }
  };

  //useffet
  useEffect(() => {
    if (userAuth?.id) {
      setId(userAuth?.id);
      getOne();
    }
  }, [userAuth?.id, restaurant?._id]);
  return (
    <StyledDashboard>
      <h3>Votre compte</h3>
      <div className="the-forms">
        <span className="email">
          Votre email (non public) :{" "}
          {loadingUser ? <Loading /> : userAuth?.email}
        </span>
        <span className="visible">
          Public : {restaurant?.statut === 1 ? "Oui" : "Non"}
        </span>
        {restaurant?._id && (
          <span className="preview">
            <Eye className="i" onClick={handleScrollToPreview} size={40} />
            <LockKeyholeOpen
              className="i-pay"
              onClick={() => setPopToPay(true)}
              size={40}
            />
          </span>
        )}
        {/* <SkeletonLoader /> */}
        <FormProfil
          imgProfilUploaded={imgProfilUploaded}
          email={userAuth?.email}
        />
        <FormSpeciality speciality={speciality} id={id} />
        <FormGalerie galerie={galerie} id={id} />
        <FormGlobale
          name={restaurant?.pseudo}
          saveur={restaurant?.saveur}
          villebase={restaurant?.ville}
          description={restaurant?.description}
          setUpdate={setUpdate}
          id={id}
          setRestaurant={setRestaurant}
        />
      </div>
      {id && restaurant?._id && (
        <div className="box-preview" ref={previewRef}>
          <Resto
            pseudo={restaurant?.pseudo}
            ville={restaurant?.ville}
            saveur={restaurant?.saveur}
            profil={restaurant?.profil}
            galerie={restaurant?.galerie}
            description={restaurant?.description}
            speciality={restaurant?.speciality}
            setGetOne={setRestaurant}
          />
        </div>
      )}
      <ManagerAccount />
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
      margin-bottom: 0px;
      font-size: 0.8em;
      align-items: center;
    }
    .visible {
      width: 100%;
      display: flex;
      opacity: 0.5;
      font-size: 0.8em;
    }
    .preview {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 5px;
      .i {
        cursor: pointer;
        color: ${COLORS.main};
        border-bottom: solid 1px ${COLORS.main};
        padding: 3px;
        margin-right: 50px;
      }
      .i-pay {
        padding: 3px;
        cursor: pointer;
        color: ${COLORS.green};
        border-bottom: solid 1px ${COLORS.green};
      }
    }
  }
  .box-preview {
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    border-top: solid 3px ${COLORS.grey};
  }
  @media screen and (max-width: 450px) {
    .the-forms {
      width: 100%;
      .email,
      .visible {
        padding-left: 5px;
        font-size: 0.7em;
      }
    }
  }
`;
