import { useAccount } from "../../Context/AccountContext";
import Dashboard from "./Dashboard";
import { DashboardCustomer } from "./DashboardCustomer";

const DashBoardRouter = ({
  setPopFacture,
}: {
  setPopFacture: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { accountType, loadingAccount } = useAccount();

  if (loadingAccount) {
    return <div>Chargement...</div>;
  }

  if (accountType === "restaurant") {
    return <Dashboard setPopFacture={setPopFacture} />;
  }

  if (accountType === "customer") {
    return <DashboardCustomer />;
  }

  return <div>Aucun profil trouvé.</div>;
};

export default DashBoardRouter;
