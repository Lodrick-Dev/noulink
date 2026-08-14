import { useEffect, useState, type ReactNode } from "react";
import { useAccount } from "../../Context/AccountContext";
import { supabase } from "../utils/supabaseClient";
import { Navigate } from "react-router-dom";

const PrivateSeller = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const { accountType } = useAccount();

  useEffect(() => {
    console.log("🔥 PrivateSeller RENDER", window.location.pathname);
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      setIsAuthenticated(!!data.session);
    };

    checkSession();
  }, []);

  if (isAuthenticated === null || accountType === null) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  if (accountType !== "restaurant") {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};
export default PrivateSeller;
