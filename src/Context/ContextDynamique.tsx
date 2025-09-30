import { createContext, useContext, useEffect, useState } from "react";
import type {
  TypeContextDynamic,
  TypeContextDynamicProviderProps,
} from "./TypeContextDynamique";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../components/utils/supabaseClient";

const ContextDynamic = createContext<TypeContextDynamic | undefined>(undefined);

export const ContextDynamicProvider = ({
  children,
}: TypeContextDynamicProviderProps) => {
  const [ville, setVille] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [userAuth, setUserAuth] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [popToPay, setPopToPay] = useState(false);

  const setCityCookie = () => {
    const now = new Date();
    now.setMonth(now.getMonth() + 3); // expire dans 3 mois
    document.cookie = `city=${encodeURIComponent(
      ville
    )}; expires=${now.toUTCString()}; path=/`;
  };

  const getCityCookie = (): string | null => {
    const match = document.cookie.match(/(?:^|; )city=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : null;
  };
  const deleteCityCookie = () => {
    document.cookie = "city=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  useEffect(() => {
    if (ville) {
      setCityCookie();
    }
  }, [ville]);

  useEffect(() => {
    const catchData = getCityCookie();
    if (catchData) {
      setVille(catchData);
    }
  }, []);

  //useeffect check if user connected
  const refreshuser = async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    if (sessionData.session) {
      console.log(sessionData.session);
      console.log("Connecté :", sessionData.session.user);
      setUserAuth(sessionData.session.user);
      setToken(sessionData.session.access_token);
    } else {
      // alert("Connexion échouée : aucune session trouvée");
      return;
    }
  };
  useEffect(() => {
    // 1. Vérifie au chargement si l’utilisateur est déjà connecté
    refreshuser().finally(() => setLoadingUser(false));

    // Optionnel : écouter les changements de session en temps réel
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUserAuth(session?.user ?? null);
      }
    );

    // 3. Nettoie le listener quand le composant est démonté
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);
  return (
    <ContextDynamic.Provider
      value={{
        setVille,
        ville,
        setToken,
        token,
        deleteCityCookie,
        loadingUser,
        setLoadingUser,
        setUserAuth,
        userAuth,
        popToPay,
        setPopToPay,
      }}
    >
      {children}
    </ContextDynamic.Provider>
  );
};

export const Dynamic = () => {
  const context = useContext(ContextDynamic);
  if (!context) {
    throw new Error(
      "useContextDynamic must be used within a ContextDynamicProvider"
    );
  }

  return context;
};
