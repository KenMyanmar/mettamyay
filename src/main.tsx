import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LangProvider } from "./i18n/LangProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <LangProvider>
    <App />
  </LangProvider>,
);
