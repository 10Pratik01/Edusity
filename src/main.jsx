import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Title from "./components/Title/Title.jsx";
import Content from "./components/home_content/Content.jsx";
import Program from "./components/programs/Program.jsx";
import About from "./components/About/About.jsx"
import Campus from "./components/Campus/campus.jsx"
import Testimonials from "./components/Testimonials/Testimonials.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Footer from "./components/Footer/Footer.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Content />
    <div>
      <Title subTitle="Our program" title='What we offer'/>
      <Program />
      <About /> 
      <Title subTitle='Gallery' title='Campus Photos' />
      <Campus /> 
      <Title subTitle='Testimonials' title='What student says' /> 
      <Testimonials /> 
      <Title subTitle='Contact us' title='Get in touch' />
      <Contact/> 
      <Footer/> 
    </div>
  </StrictMode>
);
