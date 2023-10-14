import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar";
import "swiper/css";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import ProtectedRoute from "./Components/Cart/ProtectedRoute";
import Order from "./Components/Order/Order";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddAdmin from "./Components/Dashboard/AddAdmin";
import AddItems from "./Components/Dashboard/AddItems";
import Items from "./Components/Dashboard/Items";
import Reviews from "./Components/Dashboard/Reviews";
import Users from "./Components/Dashboard/Users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<AddAdmin />}></Route>
          <Route path="addItem" element={<AddItems />}></Route>
          <Route path="items" element={<Items />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
          <Route path="users" element={<Users />}></Route>
        </Route>
        <Route path="/order" element={<ProtectedRoute element={<Order />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
