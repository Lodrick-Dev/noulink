import type { ReactNode } from "react";

export type TypeContextDynamic = {
  setVille: React.Dispatch<React.SetStateAction<string>>;
  ville: string;
  deleteCityCookie: () => void;
};

export type TypeContextDynamicProviderProps = {
  children: ReactNode;
};
