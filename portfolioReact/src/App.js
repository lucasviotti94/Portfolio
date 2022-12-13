import { Route, Routes } from "react-router-dom";

import Home from "./components/Home"
import NavB from "./components/NavBar";


function App() {
  return (
    <div >
      <NavB />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home" element={<About />} /> */}
        {/* <Route path="/home" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
