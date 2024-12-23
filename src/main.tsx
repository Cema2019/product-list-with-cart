import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./components/Card.css";
import "./components/Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParentComponent from "./components/ParentComponent";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <ParentComponent />;
    </>
  </StrictMode>
);
