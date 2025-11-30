import type { User } from "@supabase/supabase-js";
import type { ReactNode } from "react";

export type TypeContextDynamic = {
  setVille: React.Dispatch<React.SetStateAction<string>>;
  ville: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  token: string;
  userAuth: User | null;
  loadingUser: boolean;
  setLoadingUser: React.Dispatch<React.SetStateAction<boolean>>;
  popToPay: boolean;
  setPopToPay: React.Dispatch<React.SetStateAction<boolean>>;
  setUserAuth: React.Dispatch<React.SetStateAction<User | null>>;
  deleteCityCookie: () => void;
  isPremium: boolean;
  setIsPremium: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TypeContextDynamicProviderProps = {
  children: ReactNode;
};
