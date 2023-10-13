import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar";
import "swiper/css";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
