import React from "react";
import { NavLink } from "react-router-dom";
import titleLogog from "../../assets/icon/title logo.jpg";
import "../AllCss/Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className="drawer drawer-end ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300 py-6">
            <div className="flex-1 px-2 mx-2 ">
              <div>
                <img className="nav-img" src={titleLogog} alt="" />
              </div>
              <p className="text-4xl font-bold ml-3">
                Tata <span className="text-2xl"> Automobile</span>
              </p>
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <NavLink className="rounded-md" to="/home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-md" to="/dashboard">
                    Dash board
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-md" to="/portfolio">
                    My portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-md" to="/blogs">
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-md" to="login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dash board</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">My portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
