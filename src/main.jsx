import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/Navbar.jsx";
import App from "./App.jsx";
import Title from "./components/Title/Title.jsx";
import Content from "./components/home_content/Content.jsx";
import Program from "./components/programs/Program.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Content />
    <div>
      <Title/>
      <Program />
    </div>
  </StrictMode>
);
