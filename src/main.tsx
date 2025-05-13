import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./i18n/i18n.ts"
import App from "./App.tsx";
import {GeneralContextProvider} from "./components/context/GeneralContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GeneralContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeneralContextProvider>
  </StrictMode>,
);
