import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session); // true si connecté, false sinon
    };
    checkSession();
  }, []);

  if (isAuthenticated === null) return null; // ou un loader si tu veux

  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
