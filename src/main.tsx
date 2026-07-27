import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ContextDynamicProvider } from "./Context/ContextDynamique.tsx";
import { AccountContextProvider } from "./Context/AccountContext.tsx";
import { CartProvider } from "./Context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextDynamicProvider>
        <AccountContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AccountContextProvider>
      </ContextDynamicProvider>
    </BrowserRouter>
  </StrictMode>,
);
