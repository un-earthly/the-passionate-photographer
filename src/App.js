import { Route, Routes } from "react-router-dom";
import Navbar from "./UtilitiesAndShared/Navbar";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Checkout from "./Pages/Checkout/Checkout";
import UserRoute from "./UtilitiesAndShared/UserRoute";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
function App() {
  return (
    <div className="bg-no-repeat bg-fixed bg-blend-overlay bg-cover bg-[#000000bb] bg-[url('../public/images/home-banner.jpg')]">
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/checkout' element={
            <UserRoute>
              <Checkout />
            </UserRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
