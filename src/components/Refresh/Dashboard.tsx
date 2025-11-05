import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import COLORS from "../../Styles/Styles";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../Loading/Loading";
import FormSpeciality from "./DataDoc/Forms/FormSpeciality";
import FormProfil from "./DataDoc/Forms/FormProfil";
import FormGalerie from "./DataDoc/Forms/FormGalerie";
import FormGlobale from "./DataDoc/Forms/FormGlobale";
import ManagerAccount from "./ManagerAccount";
import { Dynamic } from "../../Context/ContextDynamique";
// import SkeletonLoader from "../utils/SkeletonLoader";
import Resto from "../ListesHome/Resto";
import { Eye, EyeOff, Fullscreen, LockKeyholeOpen } from "lucide-react";
import { getExpirationMessage } from "../utils/fonctions";
import { useNavigate } from "react-router-dom";
// import Loading from "../utils/Loading";
export type TypeDocDashboard = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  pseudo?: string;
  ville?: string;
  saveur?: string;
  statut?: number;
  isPremium?: boolean;
  profil?: string;
  galerie?: string[];
  description?: string;
  speciality?: string[];
  premiumExpiresAt?: string;
};
export type TypeGalerie = string;
export type TypeSpecility = string;
const Dashboard = () => {
  const { loadingUser, userAuth, setPopToPay, token } = Dynamic();
  const [id, setId] = useState("");
  const [imgProfilUploaded, setImgProfilUploaded] = useState<
    string | undefined
  >();
  const [restaurant, setRestaurant] = useState<TypeDocDashboard | null>(null);
  const [galerie, setGalerie] = useState<TypeGalerie[]>([]);
  const [speciality, setSpeciality] = useState<TypeSpecility[]>([]);
  const [callA, setCallA] = useState(false);
  const navigate = useNavigate();

  //scroll preview :
  const previewRef = useRef<HTMLDivElement>(null);

  const handleScrollToPreview = () => {
    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  //getOne on va prendre id de userAuth
  const getOne = async () => {
    console.log("je joue");

    if (!userAuth?.id) return toast.error("Un identifiant est nécessaire");
    try {
      const res = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API}restaurant/one/${userAuth?.id}`,
        withCredentials: true,
      });

      if (res.data) {
        setId(res.data.idsupabase);
        setImgProfilUploaded(res.data.profil);
        setRestaurant(res.data);
        setGalerie(res.data.galerie);
        setSpeciality(res.data.speciality);
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

  //rendre le profil visbile ou pas
  const visibilityProfil = async () => {
    if (!restaurant?._id) return toast.error("Un identifiant est nécessaire");
    if (!token) return toast.error("Token absent");
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/visible/${
          restaurant?._id
        }`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data) {
        if (res.data.data) {
          setRestaurant(res.data.data);
        }
        return toast.success(res.data.message);
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.data.message) {
        return toast.error(error.response.data.message);
      }
      return toast.error("Un erreur est survenue");
    }
  };

  //useffet
  useEffect(() => {
    if (!userAuth?.id) return;
    setId(userAuth.id);
    getOne();
  }, [userAuth?.id, callA]);

  const checkIfPayOrNot = async () => {
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status");

    if (status === "succes") {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API}stripe/check-payment`,
          {
            params: { userId: userAuth?.id },
            withCredentials: true,
          }
        );
        console.log(res);

        if (res.data.paid) {
          toast.success("Paiement confirmé !");
          navigate("/dashboard");
        } else {
          toast.error("Paiement non confirmé. Veuillez contacter le support.");
          navigate("/dashboard");
        }
      } catch (err) {
        console.error(err);
        toast.error("Erreur lors de la vérification du paiement.");
      }
    } else if (status === "cancel") {
      toast.warning("Paiement annulé ou non finalisé.");
      navigate("/dashboard");
    }
  };
  const eyesIcons = () => {
    return restaurant?.statut === 1 ? (
      <Eye
        className="visible-public"
        size={40}
        onClick={() => visibilityProfil()}
      />
    ) : (
      <EyeOff
        className="visible-public"
        size={40}
        onClick={() => visibilityProfil()}
      />
    );
  };
  const checkIfAllreadyPayed = () => {
    if (restaurant?.isPremium) {
      return null;
    } else {
      return (
        <LockKeyholeOpen
          className="i-pay"
          onClick={() => setPopToPay(true)}
          size={40}
        />
      );
    }
  };
  useEffect(() => {
    if (userAuth?.id) {
      checkIfPayOrNot();
    }
  }, [userAuth?.id]);
  return (
    <StyledDashboard>
      <h3>Votre compte</h3>
      <div className="the-forms">
        <span className="email">
          Votre email (non public) :{" "}
          {loadingUser ? <Loading /> : userAuth?.email}
        </span>
        <span className="visible">
          Bloqué : {!restaurant?.isPremium ? "Oui" : "Non"}
        </span>
        <span className="visible">
          Visible : {restaurant?.statut === 1 ? "Oui" : "Non"}
        </span>
        {restaurant?.isPremium && (
          <span className="info-date">
            {getExpirationMessage(restaurant?.premiumExpiresAt)}
          </span>
        )}
        {restaurant?._id && (
          <div className="preview">
            <Fullscreen
              className="i"
              onClick={handleScrollToPreview}
              size={40}
            />
            {/* <LockKeyholeOpen
              className="i-pay"
              onClick={() => setPopToPay(true)}
              size={40}
            /> */}
            {checkIfAllreadyPayed()}
            {restaurant?.isPremium && eyesIcons()}
          </div>
        )}
        {/* <SkeletonLoader /> */}
        <FormProfil
          imgProfilUploaded={imgProfilUploaded}
          email={userAuth?.email}
          setCallA={setCallA}
        />
        <FormSpeciality speciality={speciality} id={id} setCallA={setCallA} />
        <FormGalerie galerie={galerie} id={id} setCallA={setCallA} />
        <FormGlobale
          name={restaurant?.pseudo}
          saveur={restaurant?.saveur}
          villebase={restaurant?.ville}
          description={restaurant?.description}
          id={id}
          setCallA={setCallA}
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
    .info-date {
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
        margin-right: 50px;
      }
      .visible-public {
        padding: 3px;
        cursor: pointer;
        color: ${COLORS.yellow};
        border-bottom: solid 1px ${COLORS.yellow};
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
