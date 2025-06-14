import styled from "styled-components";
import { capitalizeFirstLetter } from "../../utils/fonctions";
import COLORS from "../../../Styles/Styles";

const DataSpeciality = ({ speciality }: { speciality: string[] }) => {
  return (
    <StyledDataSpeciality>
      <div className="specility-box">
        <span>Spécialité(s)</span>
        {Array.isArray(speciality) &&
          speciality.map((el, i) => <p key={i}>{capitalizeFirstLetter(el)}</p>)}
      </div>
    </StyledDataSpeciality>
  );
};

export default DataSpeciality;
const StyledDataSpeciality = styled.div`
  background: ${COLORS.main};
  margin: 10px;
  border-radius: 10px;
  width: 40%;
  .specility-box {
    padding: 10px;
    span {
      display: block;
      color: ${COLORS.yellow};
      font-size: 1.2em;
      text-align: center;
    }
    p {
      color: ${COLORS.white};
      margin-bottom: 10px;
    }
  }
`;
