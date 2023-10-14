import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import frwrd from "../../images/banner/forward.png";
import rewrd from "../../images/banner/rewind.png";
import ban1 from "../../images/banner/purchase-order.png";
import ban2 from "../../images/banner/add.png";
import ban3 from "../../images/banner/reviews.png";
import ban4 from "../../images/banner/add-user.png";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={`drawer ${isSidebarOpen ? "lg:drawer-open" : ""}`}>
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content  p-11">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary btn-sm drawer-button lg:hidden"
          >
            open drawer
          </label>
          {isSidebarOpen ? (
            <button
              className="btn absolute rounded-full top-2 left-2 z-10 btn-secondary btn-sm"
              onClick={toggleSidebar}
            >
              <img className="w-4" src={rewrd} alt="" />
            </button>
          ) : (
            <button
              className="btn absolute top-0 rounded-full left-0 btn-secondary btn-sm"
              onClick={toggleSidebar}
            >
              <img className="w-4" src={frwrd} alt="" />
            </button>
          )}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full bg-accent text-base-content">
            {/* Sidebar content here */}
            <Link
              className="text-primary mx-8 mt-10 mb-4 text-lg font-bold hover:text-black hover:bg-secondary"
              to="/dashboard"
            >
              <span className="flex gap-4">
                <img className="w-6" src={ban2} alt="" />
                Add Admin
              </span>
            </Link>
            <Link
              className="text-primary mx-8 text-lg mb-4 font-bold hover:text-black hover:bg-secondary"
              to="/dashboard/addItem"
            >
              <span className="flex gap-4">
                <img className="w-6" src={ban1} alt="" />
                Add Item
              </span>
            </Link>{" "}
            <Link
              className="text-primary mx-8 text-lg mb-4 font-bold hover:text-black hover:bg-secondary"
              to="/dashboard/items"
            >
              <span className="flex gap-4">
                {" "}
                <img className="w-6" src={ban1} alt="" />
                Items
              </span>
            </Link>
            <Link
              className="text-primary mx-8  mb-4  text-lg font-bold hover:text-black hover:bg-secondary"
              to="/dashboard/reviews"
            >
              <span className="flex gap-4">
                {" "}
                <img className="w-6" src={ban3} alt="" />
                Reviews
              </span>
            </Link>
            <Link
              className="text-primary mx-8 mb-4 text-lg font-bold hover:text-black hover:bg-secondary"
              to="/dashboard/users"
            >
              <span className="flex gap-4">
                {" "}
                <img className="w-6" src={ban4} alt="" />
                Users
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;