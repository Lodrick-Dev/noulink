import styled from "styled-components";
import { useEffect, useState } from "react";
import COLORS from "../../Styles/Styles";
import Actualisation from "./Actualisation";
import CheckedCodeNumber from "./CheckedCodeNumber";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../Loading/Loading";
import AllData from "./AllData";
export type TypeDoc = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  pseudo?: string;
  ville?: string;
  saveur?: string;
  numero?: string; //a retirer
  profil?: string;
  galerie?: string[];
  description?: string;
  speciality: string[];
};
export type TypeGalerie = string;
export type TypeSpecility = string;
const Refresh = () => {
  const [actualised, setActualised] = useState(false);
  const [id, setId] = useState("");
  const [idLoading, setIdLoading] = useState(false);
  const [restaurant, setRestaurant] = useState<TypeDoc | null>(null);
  const [galerie, setGalerie] = useState<TypeGalerie[]>([]);
  const [speciality, setSpeciality] = useState<TypeSpecility[]>([]);

  //getOne
  const getOne = async () => {
    if (!id) return toast.error("Un identifiant est nécessaire");
    setIdLoading(true);
    try {
      const res = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API}restaurant/one/${id}`,
        withCredentials: true,
      });
      console.log(res);
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
    <StyledRefresh>
      {!actualised && <h3>Votre compte</h3>}
      <div className="box-check-account">
        {!actualised && <p>Pour vous actualiser</p>}
        {actualised ? (
          <CheckedCodeNumber />
        ) : (
          <Actualisation setActualised={setActualised} setId={setId} />
        )}
      </div>
      {idLoading && (
        <div className="loading-data">
          <div className="box">
            {" "}
            <Loading />{" "}
          </div>
          <div className="box">
            {" "}
            <Loading />{" "}
          </div>
          <div className="box">
            {" "}
            <Loading />{" "}
          </div>
        </div>
      )}
      {restaurant && !idLoading && (
        <AllData
          restaurant={restaurant}
          setRestaurant={setRestaurant}
          galerie={galerie}
          speciality={speciality}
        />
      )}
    </StyledRefresh>
  );
};

export default Refresh;
const StyledRefresh = styled.section`
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
  padding: 50px 0px;
  h3 {
    text-align: center;
    font-size: 2.8em;
  }
  .box-check-account {
    width: 40%;
    margin: 15px auto;
    padding: 50px;
    border-radius: 10px;
    background: ${COLORS.second};
    p {
      text-align: center;
      color: ${COLORS.white};
      font-size: 1.5em;
      margin: 10px 0px;
    }
  }
  .loading-data {
    background: ${COLORS.second};
    /* height: 30svh; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    .box {
      background: ${COLORS.main};
      min-width: 35%;
      min-height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin: 20px;
    }
  }
  @media screen and (max-width: 450px) {
    .box-check-account {
      width: 90%;
      padding: 20px;
    }
    .loading-data {
      align-items: baseline;
      justify-content: flex-start;
      .box {
        margin: 15px;
      }
    }
  }
`;
