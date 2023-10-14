import React from "react";
import avatar from "../../images/banner/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/Slices/SearchSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("userRole");
    signOut(auth);
    navigate("/");
  };
  const userRole = localStorage.getItem("userRole");

  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <Link
          className="btn btn-ghost font-bold normal-case text-primary text-xl"
          to="/"
        >
          Maker's Mosaic
        </Link>
      </div>
      <Link
        className="mx-3 font-extrabold normal-case text-primary hover:text-secondary text-md"
        to="/products"
      >
        PRODUCTS
      </Link>
      {/* customer dashboard */}

      {userRole === "admin" ? (
        <Link
          className="mx-3 font-extrabold normal-case text-primary hover:text-secondary text-md"
          to="/adminDashboard"
        >
          DASHBOARD
        </Link>
      ) : (
        <></>
      )}
      {userRole === "user" ? (
        <Link
          className="mx-3 font-extrabold normal-case text-primary hover:text-secondary text-md"
          to="/userDashboard"
        >
          USER-DASHBOARD
        </Link>
      ) : (
        <></>
      )}

      <Link
        className="mx-3 font-extrabold normal-case text-primary hover:text-secondary text-md"
        to="/feedback"
      >
        FEEDBACK
      </Link>

      <div>
        <div className="form-control">
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search here"
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="p-3 border border-gray-400 input-sm rounded-lg outline-none"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              {userRole === "user" ? (
                <Link
                  to="/userDashboard"
                  className="text-primary font-bold hover:text-black"
                >
                  <div class="indicator">Profile</div>
                </Link>
              ) : (
                <></>
              )}
            </li>{" "}
            <li>
              {userRole === "admin" ? (
                <Link className="text-primary font-bold hover:text-black">
                  Dashboard
                </Link>
              ) : (
                <></>
              )}
            </li>
            <li>
              {user ? (
                <button
                  onClick={logout}
                  className="text-primary font-bold hover:text-black pr-7 "
                >
                  <div class="indicator">Signout</div>
                </button>
              ) : (
                <Link to="/login">
                  <button className="text-primary font-bold hover:text-black pr-7 ">
                    <div class="indicator">Login</div>
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
