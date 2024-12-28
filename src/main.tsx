import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ParentComponent from "./components/ParentComponent";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <ParentComponent />
    </>
  </StrictMode>
);
