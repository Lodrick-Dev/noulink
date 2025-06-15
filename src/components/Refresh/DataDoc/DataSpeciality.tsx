import styled from "styled-components";
import { capitalizeFirstLetter } from "../../utils/fonctions";
import COLORS from "../../../Styles/Styles";
import { SquarePlus, Trash2 } from "lucide-react";
import { useState } from "react";

const DataSpeciality = ({ speciality }: { speciality: string[] }) => {
  const [updateEdit, setUpdateEdit] = useState(false);
  const [specialityLocal, setSpecialityLocal] = useState<string[]>(
    speciality.length > 0 ? speciality : []
  );
  const deleteEl = (url: string) => {
    setSpecialityLocal((prev) => prev.filter((m) => m !== url));
  };
  return (
    <StyledDataSpeciality>
      <div className="specility-box">
        <span>Spécialité(s)</span>
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
          <input type="text" placeholder="Ajouter une spécialité" />
          <SquarePlus className="icon-add-plat" size={25} />
        </div>
      )}
    </StyledDataSpeciality>
  );
};

export default DataSpeciality;
const StyledDataSpeciality = styled.div`
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
`;
