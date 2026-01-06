import COLORS from '../../Styles/Styles';
import styled from 'styled-components';
import { saveurs } from '../MainHome/SaveurSelector/SaveurSelector';

const ListCountry = () => {
  return (
    <ListeCountryStryle>
        <div className="liste">
                {saveurs.map((item) => (
                  <div
                    key={item.name}
                  >
                    <img src={item.flag} alt={item.name} />
                  </div>
                ))}
              </div>
    </ListeCountryStryle>
  )
}

export default ListCountry

const ListeCountryStryle = styled.div`
width: 100%;
  background: linear-gradient(135deg, ${COLORS.main}, ${COLORS.second});
  border-radius: 18px;
   /* background: ${COLORS.main}; */
  padding: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
   display: flex;
   flex-direction: column;

  .liste {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    background: ${COLORS.white};
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;
    transition: all 0.25s ease;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    img {
      width: 55px;
      height: 55px;
    }
  }
`;