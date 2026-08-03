import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import { useAccount } from "../../Context/AccountContext";

const PrivateCustomer = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const { accountType } = useAccount(); // Assuming you have a context that provides accountType

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session); // true si connecté, false sinon
    };
    checkSession();
  }, []);

  if (isAuthenticated === null) return null; // ou un loader
  console.log(accountType);

  return isAuthenticated && accountType !== "customer" ? (
    <Navigate to="/dashboard" />
  ) : (
    children
  );
};

export default PrivateCustomer;
