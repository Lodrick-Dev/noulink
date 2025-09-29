import styled from "styled-components";
import { SquarePlus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import COLORS from "../../../../Styles/Styles";
import { capitalizeFirstLetter } from "../../../utils/fonctions";
import Loading from "../../../utils/Loading";
import { Dynamic } from "../../../../Context/ContextDynamique";
type TypeProps = {
  speciality: string[];
  id: string;
};
const FormSpeciality = ({ speciality, id }: TypeProps) => {
  const { token } = Dynamic();
  const [updating, setUpdating] = useState(false);
  const [newSpeciality, setNewSpeciality] = useState<string>("");
  const [specialityLocal, setSpecialityLocal] = useState<string[]>([]);

  //delete
  const deleteEl = async (valueToDelete: string) => {
    const updated = specialityLocal.filter((m) => m !== valueToDelete);
    setSpecialityLocal(updated);
    await handleUpdate(updated);
  };

  const addEl = async () => {
    const trimmed = newSpeciality.trim().toLowerCase();
    if (!trimmed) {
      return toast.warning("Spécialité vide !");
    }

    if (specialityLocal.includes(trimmed)) {
      return toast.info("Cette spécialité est déjà ajoutée.");
    }

    if (specialityLocal.length >= 7) {
      return toast.info("Maximum 7 spécialités.");
    }
    setUpdating(true);
    const updated = [...specialityLocal, trimmed];
    setSpecialityLocal(updated);
    setNewSpeciality(""); // vider le champ
    await handleUpdate(updated);
    setUpdating(false);
  };

  //speciality api
  const handleUpdate = async (array: string[]) => {
    try {
      const res = await axios({
        method: "post",
        url: `${
          import.meta.env.VITE_APP_API
        }restaurant/update-speciality/${id}`,
        data: { speciality: array },
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        if (res.data.succes) {
          setSpecialityLocal(res.data.speciality);
          setNewSpeciality("");
          return;
          //toast.error(res.data.succes);
        }
      }
    } catch (error: any) {
      setUpdating(false);
      console.log(error);
      setSpecialityLocal([]);
      if (error.response.data.message) {
        return toast.error(error.response.data.message);
      }
      return toast.error("Une erreur est survenue");
    }
  };
  useEffect(() => {
    if (speciality && speciality.length > 0) {
      setSpecialityLocal(speciality);
    }
  }, [speciality]);
  return (
    <StyledFormSpeciality>
      <div className="specility-box">
        <span>7 spécialités max</span>
        {Array.isArray(specialityLocal) &&
          specialityLocal.map((el, i) => (
            <div className="box-specia" key={i}>
              <p>{capitalizeFirstLetter(el)}</p>
              <Trash2
                className="delete"
                size={20}
                onClick={() => deleteEl(el)}
              />
            </div>
          ))}
      </div>
      {specialityLocal && specialityLocal.length < 7 && (
        <div className="add-speciality">
          <input
            type="text"
            value={newSpeciality ? newSpeciality : ""}
            placeholder="Ajouter une spécialité"
            onChange={(e) => setNewSpeciality(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addEl()}
          />
          {updating && <Loading />}
          {!updating && (
            <SquarePlus
              className="icon-add-plat"
              size={25}
              onClick={() => addEl()}
            />
          )}
        </div>
      )}
    </StyledFormSpeciality>
  );
};

export default FormSpeciality;
const StyledFormSpeciality = styled.div`
  background: ${COLORS.main};
  margin: 10px 0px;
  border-radius: 10px;
  width: 40%;
  max-height: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  .specility-box {
    padding: 10px 10px 0px 10px;
    min-height: 80%;
    max-height: 80%;
    /* background: #4c4c98; */
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .box-specia {
      margin-top: 20px;
      display: flex;
      border-bottom: solid 1px ${COLORS.white};
      justify-content: space-between;
      p {
        color: ${COLORS.white};
        margin-bottom: 0px;
      }
      .delete {
        font-size: 0.5em;
        margin-left: 10px;
        color: ${COLORS.red};
        cursor: pointer;
      }
    }
    span {
      display: block;
      color: ${COLORS.yellow};
      font-size: 1.2em;
      text-align: center;
    }
  }
  .add-speciality {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: solid 1px ${COLORS.second};
    min-height: 20%;
    max-height: 20%;
    input {
      width: 50%;
      outline: none;
      border: none;
      padding: 5px;
      border-radius: 5px;
    }
    .icon-add-plat {
      cursor: pointer;
      margin-left: 10px;
      color: ${COLORS.green};
    }
  }
  @media screen and (max-width: 450px) {
    width: 80%;
    .add-speciality {
      margin: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 80%;
      }
    }
  }
`;
