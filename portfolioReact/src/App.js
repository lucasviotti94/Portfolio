import { Route, Routes } from "react-router-dom";

import Home from "./components/Home"
import NavB from "./components/NavBar";

import s from "./App.module.css"

function App() {
  return (
    <div className={s.App}>
      <NavB />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
