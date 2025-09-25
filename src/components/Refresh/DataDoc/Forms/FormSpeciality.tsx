import styled from "styled-components";
import { SquarePlus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import COLORS from "../../../../Styles/Styles";
import { capitalizeFirstLetter } from "../../../utils/fonctions";
import Loading from "../../../utils/Loading";
type TypeProps = {
  speciality: string[];
  id: string;
};
const FormSpeciality = ({ speciality, id }: TypeProps) => {
  const [updating, setUpdating] = useState(false);
  const [newSpeciality, setNewSpeciality] = useState<string>("");
  const [specialityLocal, setSpecialityLocal] = useState<string[]>(
    speciality.length > 0 ? speciality : []
  );

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

    if (specialityLocal.length >= 5) {
      return toast.info("Maximum 5 spécialités.");
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
      });
      if (res) {
        if (res.data.succes) {
          setSpecialityLocal(res.data.speciality);
          setNewSpeciality("");
          return;
          //toast.error(res.data.succes);
        }
      }
    } catch (error) {
      setUpdating(false);
      console.log(error);
      return toast.error("Une erreur est survenue");
    }
  };
  return (
    <StyledFormSpeciality>
      <div className="specility-box">
        <span>Spécialité(s) 5 max</span>
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
      {specialityLocal && specialityLocal.length < 5 && (
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
  margin: 10px;
  border-radius: 10px;
  width: 40%;
  display: flex;
  flex-direction: column;
  .specility-box {
    padding: 10px;
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
    margin-top: 20px;
    padding: 10px;
    input {
      width: 30%;
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
    width: 100%;
    margin: 50px 0px;
    .add-speciality {
      input {
        width: 60%;
      }
    }
  }
`;
