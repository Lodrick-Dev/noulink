import styled from "styled-components";
import COLORS from "../../../Styles/Styles";

const DataGalerie = ({ galerie }: { galerie: string[] }) => {
  return (
    <StyledDataGalerie>
      <div className="galerie-box">
        <span>Galerie</span>
        {Array.isArray(galerie) &&
          galerie.map((el, i) => (
            <img src={el} alt={`img-galerie-${i}`} key={i} />
          ))}
      </div>
    </StyledDataGalerie>
  );
};

export default DataGalerie;
const StyledDataGalerie = styled.div`
  background: ${COLORS.main};
  margin: 10px;
  border-radius: 10px;
  width: 40%;
  .galerie-box {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    span {
      display: block;
      width: 100%;
      text-align: center;
      text-align: center;
      color: ${COLORS.yellow};
      font-size: 1.2em;
    }
    img {
      display: block;
      width: 30%;
      border-radius: 10px;
      margin: 10px;
    }
  }
`;
