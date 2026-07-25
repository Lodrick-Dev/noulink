import styled from "styled-components";
import { MapPin, Home, ShoppingBag, LogOut } from "lucide-react";
import COLORS from "../../Styles/Styles";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dynamic } from "../../Context/ContextDynamique";
import { LoadingHorizontal } from "../Loading/LoadingHorizontal";
import { useAccount } from "../../Context/AccountContext";
import { FormInfoCustomer } from "../GestionCustomer/FormInfoCustomer";

export const DashboardCustomer = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const { signOut, token } = Dynamic();
  const { account } = useAccount();

  const deleteAccount = async () => {
    if (window.confirm("Supprimer votre compte ? ")) {
      setLoading(true);
      try {
        const res = await axios({
          method: "delete",
          url: `${import.meta.env.VITE_APP_API}customer/delete/${account._id}`,
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
        if (res.data) {
          setLoading(false);
          if (res.data.success) {
            toast.warning(res.data.message);
            signOut();
            nav("/auth");
          }
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        return toast.error("Une erreur est survenue");
      }
    }
  };
  const logoutUser = async () => {
    await signOut();
    nav("/auth");
  };
  return (
    <StyledDashboardCustomer>
      <Header>
        <div>
          <h1>Bonjour 👋</h1>
          <p>Bienvenue sur votre espace client.</p>
          <p className="dev">⚠️En cours de développement ⚠️</p>
          <LogOut className="i" onClick={logoutUser} />
        </div>

        <div className="btns">
          {loading ? (
            <LoadingHorizontal />
          ) : (
            <DeleteAccountButton onClick={deleteAccount}>
              Supprimer mon compte
            </DeleteAccountButton>
          )}
        </div>
      </Header>
      {account && <span>{account.email}</span>}
      <Content>
        <FormInfoCustomer />
        <Right>
          <Stats>
            <StatCard>
              <ShoppingBag size={26} />
              <h2>0</h2>
              <span>Commandes</span>
            </StatCard>

            <StatCard>
              <MapPin size={26} />
              <h2>0</h2>
              <span>Livraisons</span>
            </StatCard>

            <StatCard>
              <Home size={26} />
              <h2>0</h2>
              <span>À récupérer</span>
            </StatCard>
          </Stats>

          <Card>
            <Title>
              <ShoppingBag size={20} />
              Historique
            </Title>

            <Empty>Aucune commande pour le moment.</Empty>
          </Card>
        </Right>
      </Content>
    </StyledDashboardCustomer>
  );
};

const StyledDashboardCustomer = styled.section`
  min-height: 100vh;
  background: ${COLORS.grey};
  padding: 35px;
  span {
    display: block;
    text-align: center;
    opacity: 0.3;
    font-size: 0.7em;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h1 {
    margin: 0;
    color: ${COLORS.black};
  }
  div {
    .i {
      margin-top: 10px;
      cursor: pointer;
    }
  }
  p {
    margin-top: 8px;
    color: #666;
  }
  .dev {
    background: ${COLORS.red};
    color: white;
  }
  .btns {
    width: 30%;
    display: flex;
    justify-content: space-around;
    button:first-child {
      background: ${COLORS.red};
    }
    button {
      margin: 0px 5px;
    }
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    .btns {
      margin: 0px auto;
      width: 80%;
      flex-direction: column;
      button:first-child {
        margin-bottom: 10px;
      }
      button:last-child {
        margin-top: 10px;
      }
    }
  }
`;

const DeleteAccountButton = styled.button`
  border: none;
  cursor: pointer;
  background: ${COLORS.green};
  color: white;
  padding: 14px 24px;
  border-radius: 10px;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
  width: 60%;
  margin: 0px auto;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 50px 0px;
  }
`;

const Card = styled.div`
  background: ${COLORS.white};
  border-radius: 18px;
  padding: 25px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  strong {
    display: block;
    text-align: center;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
  color: ${COLORS.main};
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 25px;

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: ${COLORS.white};
  border-radius: 18px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);

  svg {
    color: ${COLORS.main};
  }

  h2 {
    margin: 15px 0 8px;
    color: ${COLORS.black};
    font-size: 34px;
  }

  span {
    color: #666;
  }
`;

const Empty = styled.div`
  padding: 50px 0;
  text-align: center;
  color: #777;
`;
