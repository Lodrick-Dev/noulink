import { createContext, useContext, useEffect, useState } from "react";
import type {
  TypeContextDynamic,
  TypeContextDynamicProviderProps,
} from "./TypeContextDynamique";

const ContextDynamic = createContext<TypeContextDynamic | undefined>(undefined);

export const ContextDynamicProvider = ({
  children,
}: TypeContextDynamicProviderProps) => {
  const [ville, setVille] = useState<string>("");

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
  return (
    <ContextDynamic.Provider value={{ setVille, ville, deleteCityCookie }}>
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
