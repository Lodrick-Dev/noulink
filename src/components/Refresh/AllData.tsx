import styled from "styled-components";
import DataGlobale from "./DataDoc/DataGlobale";
import DataSpeciality from "./DataDoc/DataSpeciality";
import DataGalerie from "./DataDoc/DataGalerie";
import type { TypeDoc, TypeGalerie, TypeSpecility } from "./Dashboard";
import COLORS from "../../Styles/Styles";
type PropsAllData = {
  restaurant: TypeDoc;
  setRestaurant: React.Dispatch<React.SetStateAction<TypeDoc | null>>;
  galerie: TypeGalerie[];
  speciality: TypeSpecility[];
  id?: string;
};
const AllData = ({
  restaurant,
  galerie,
  speciality,
  setRestaurant,
}: PropsAllData) => {
  return (
    <StyledAllData>
      <DataGlobale restaurant={restaurant} setRestaurant={setRestaurant} />
      <DataSpeciality speciality={speciality} id={restaurant._id} />
      <DataGalerie galerie={galerie} id={restaurant._id} />
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
