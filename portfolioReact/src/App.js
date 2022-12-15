import { Route, Routes } from "react-router-dom";

import NavB from "./components/NavBar";
import LandingSection from "./components/LandingSection"
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import s from "./App.module.css"

function App() {
  return (
    <div className={s.app}>      
      <NavB />      
      <LandingSection />    
      <Education />  
      <Portfolio />  
      <Contact />  
    </div>
  );
}

export default App;
