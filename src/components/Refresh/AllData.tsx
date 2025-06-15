import styled from "styled-components";
import DataGlobale from "./DataDoc/DataGlobale";
import DataSpeciality from "./DataDoc/DataSpeciality";
import DataGalerie from "./DataDoc/DataGalerie";
import type { TypeDoc, TypeGalerie, TypeSpecility } from "./Refresh";
import COLORS from "../../Styles/Styles";
type PropsAllData = {
  restaurant: TypeDoc;
  galerie: TypeGalerie[];
  speciality: TypeSpecility[];
};
const AllData = ({ restaurant, galerie, speciality }: PropsAllData) => {
  console.log(restaurant);
  console.log(galerie);
  console.log(speciality);

  return (
    <StyledAllData>
      <DataGlobale restaurant={restaurant} />
      <DataSpeciality speciality={speciality} />
      <DataGalerie galerie={galerie} />
    </StyledAllData>
  );
};

export default AllData;
const StyledAllData = styled.div`
  background: ${COLORS.second};
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 10px;
  }
`;
