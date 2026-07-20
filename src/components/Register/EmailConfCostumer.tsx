import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Dynamic } from "../../Context/ContextDynamique";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const EmailConfCostumer = () => {
  const { token } = Dynamic();
  const nav = useNavigate();
  const createCustomer = async () => {
    if (!token) return toast.error("Token absent");
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}customer/create`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data) {
        toast.success(res.data.message);
        return true;
      }
    } catch (error: any) {
      console.log(error);
      if (error.response?.data?.message) {
        return toast.error(error.response.data.message);
      }
      return toast.error("Une erreur est survenue");
    }
  };
  useEffect(() => {
    if (token) {
      createCustomer();
    }
  }, [token]);
  return (
    <StyledEmailConfCostumer>
      <h1>Email confirmer !</h1>
      <button onClick={() => nav("/auth")}>Connectez-vous</button>
    </StyledEmailConfCostumer>
  );
};

const StyledEmailConfCostumer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  width: 60%;
  h1 {
    font-size: 2em;
    color: ${COLORS.green};
    margin-bottom: 10px;
    text-align: center;
  }
  button {
    width: 30%;
    margin: 10px auto;
    padding: 7px 20px;
    border: none;
    border-radius: 10px;
    font-size: 1em;
    cursor: pointer;
    background: ${COLORS.yellow};
  }

  @media screen and (max-width: 450px) {
    padding-top: 20px;
    width: 100%;
    button {
      width: 50%;
    }
  }
`;
