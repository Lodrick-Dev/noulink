import React, { createContext, useContext, useEffect, useState } from "react";

type LegalContextType = {
  needsLegalUpdate: boolean;
  isLoadingLegal: boolean;
  isReadingLegal: boolean;
  openLegalDocument: () => void;
  closeLegalDocument: () => void;
  acceptLegalUpdate: () => Promise<void>;
};

const LegalContext = createContext<LegalContextType | undefined>(undefined);

const STORAGE_KEY = "legal_documents_version";

// ⚠️ À modifier à chaque nouvelle modification des documents
const LEGAL_VERSION = "2026-08-12";

export function LegalProvider({ children }: { children: React.ReactNode }) {
  const [needsLegalUpdate, setNeedsLegalUpdate] = useState(false);
  const [isLoadingLegal, setIsLoadingLegal] = useState(true);
  const [isReadingLegal, setIsReadingLegal] = useState(false);

  const loadLegalVersion = () => {
    try {
      const savedVersion = localStorage.getItem(STORAGE_KEY);

      console.log("📄 Version légale enregistrée :", savedVersion);
      console.log("📄 Version légale actuelle :", LEGAL_VERSION);

      if (savedVersion !== LEGAL_VERSION) {
        setNeedsLegalUpdate(true);
      } else {
        setNeedsLegalUpdate(false);
      }
    } catch (error) {
      console.error(
        "❌ Erreur lors de la vérification des documents légaux :",
        error,
      );
    } finally {
      setIsLoadingLegal(false);
    }
  };

  const openLegalDocument = () => {
    setIsReadingLegal(true);
  };

  const closeLegalDocument = () => {
    setIsReadingLegal(false);
  };

  const acceptLegalUpdate = async () => {
    try {
      localStorage.setItem(STORAGE_KEY, LEGAL_VERSION);

      setNeedsLegalUpdate(false);
      setIsReadingLegal(false);

      console.log("✅ Nouvelle version des documents légaux acceptée");
    } catch (error) {
      console.error(
        "❌ Erreur lors de l'enregistrement de l'acceptation :",
        error,
      );
    }
  };

  useEffect(() => {
    loadLegalVersion();
  }, []);

  return (
    <LegalContext.Provider
      value={{
        needsLegalUpdate,
        isLoadingLegal,
        isReadingLegal,
        openLegalDocument,
        closeLegalDocument,
        acceptLegalUpdate,
      }}
    >
      {children}
    </LegalContext.Provider>
  );
}

export function useLegal() {
  const context = useContext(LegalContext);

  if (!context) {
    throw new Error("useLegal doit être utilisé dans LegalProvider");
  }

  return context;
}
