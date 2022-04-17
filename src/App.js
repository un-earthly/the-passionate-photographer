import { Route, Routes } from "react-router-dom";
import Navbar from "./UtilitiesAndShared/Navbar";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
function App() {
  return (
    <div className="bg-no-repeat bg-fixed bg-blend-overlay bg-cover bg-[#000000bb] bg-[url('../public/images/home-banner.jpg')]">
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
