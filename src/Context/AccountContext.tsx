import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import axios from "axios";
import { Dynamic } from "./ContextDynamique";
import { useNavigate } from "react-router-dom";
export type TypeAccount = {
  account: any;
  accountType: "restaurant" | "customer" | null;
  getAccount: () => Promise<void>;
  loadingAccount: boolean;
};
const AccountContext = createContext<TypeAccount | undefined>(undefined);

export const AccountContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [account, setAccount] = useState<any>(null);
  const [loadingAccount, setLoadingAccount] = useState(true);
  const [accountType, setAccountType] = useState<
    "restaurant" | "customer" | null
  >(null);
  const nav = useNavigate();
  const { token } = Dynamic();
  const getAccount = async () => {
    if (!token) return;
    setLoadingAccount(true);

    try {
      const res = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API}restaurant/account/me`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAccount(res.data.data);
      setAccountType(res.data.type);
      if (res.data.type === "restaurant") {
        nav("/seller/orders");
      } else if (res.data.type === "customer") {
        nav("/dashboard");
      } else {
        nav("/auth");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingAccount(false);
    }
  };
  useEffect(() => {
    if (token) {
      getAccount();
    }
  }, [token]);
  return (
    <AccountContext.Provider
      value={{ account, accountType, getAccount, loadingAccount }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error(
      "useAccountContext must be used within a AccountContextProvider",
    );
  }

  return context;
};
