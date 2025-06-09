import styled from "styled-components";
import One from "./One";

const ListesHome = () => {
  return (
    <StyledListesHome>
      <span className="legend">Inscrits: </span>
      <div className="list-one">
        <One />
        <One />
        <One />
        <One />
        <One />
      </div>
    </StyledListesHome>
  );
};

export default ListesHome;
const StyledListesHome = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  .legend {
    width: 100%;
  }
  .list-one {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
  }
  @media screen and (max-width: 450px) {
    padding: 5px;
    .list-one {
      padding: 0px;
    }
  }
`;
