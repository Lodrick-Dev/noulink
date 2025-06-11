import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ContextDynamicProvider } from "./Context/ContextDynamique.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextDynamicProvider>
        <App />
      </ContextDynamicProvider>
    </BrowserRouter>
  </StrictMode>
);
