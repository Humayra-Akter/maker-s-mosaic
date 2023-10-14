import React from "react";
import avatar from "../../images/banner/avatar.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/Slices/SearchSlice";

const Navbar = () => {
  const selectedItems = localStorage.getItem("selectedItems");
  const dispatch = useDispatch();
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
      <Link
        className="mx-3 font-extrabold normal-case text-primary hover:text-secondary text-md"
        to="/dashboard"
      >
        DASHBOARD
      </Link>
      <Link
        className="mx-3 font-extrabold normal-case text-primary hover:text-secondary text-md"
        to="/login"
      >
        LOGIN
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
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
