import { Route, Routes } from "react-router-dom";
import Navbar from "./UtilitiesAndShared/Navbar";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./UtilitiesAndShared/RequireAuth.js";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Footer from "./UtilitiesAndShared/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error";
function App() {
  return (
    <div className="bg-no-repeat bg-fixed bg-blend-overlay bg-cover bg-[#000000bb] bg-[url('../public/images/home-banner.jpg')]">
      <Navbar />
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<RequireAuth ><Contact /></RequireAuth>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
