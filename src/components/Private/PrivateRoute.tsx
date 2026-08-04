import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };

    checkSession();
  }, []);

  if (isAuthenticated === null) return null; // ou un loader ici

  // Si pas connecté, redirige vers la page login
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
