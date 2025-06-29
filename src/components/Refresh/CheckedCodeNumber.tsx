import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../Loading/Loading";

const CheckedCodeNumber = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const deleteAccount = async () => {
    if (window.confirm("Supprimer votre compte ? ")) {
      setLoading(true);
      try {
        const res = await axios({
          method: "delete",
          url: `${import.meta.env.VITE_APP_API}restaurant/delete/${id}`,
          withCredentials: true,
        });
        console.log(res);
        if (res.data) {
          setLoading(false);
          if (res.data.succes) {
            nav("/");
          }
          return toast.success(res.data.succes);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        return toast.error("Une erreur est survenue");
      }
    }
  };
  return (
    <StyledCheckedCodeNumber>
      <h3 className="hh-3">Votre compte a été actualisé 👌</h3>
      {loading && <Loading />}
      <span className="delete-btn-compte" onClick={() => deleteAccount()}>
        Supprimer mon compte
      </span>
    </StyledCheckedCodeNumber>
  );
};

export default CheckedCodeNumber;
const StyledCheckedCodeNumber = styled.div`
  .hh-3 {
    font-size: 1.3em;
  }
  .delete-btn-compte {
    display: block;
    margin-top: 15px;
    text-align: center;
    background: ${COLORS.red};
    border-radius: 5px;
    color: aliceblue;
    cursor: pointer;
    text-decoration: underline;
  }
`;
