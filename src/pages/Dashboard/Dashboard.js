import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-manage" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col text-left ml-6 mt-6">
          <label
            for="my-manage"
            className="btn btn-primary drawer-button lg:hidden text-right"
          >
            Open drawer
          </label>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label for="my-manage" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-gray-500 text-white">
            <li>
              {!admin && <Link to="/dashboard">My order</Link>}
              {!admin && <Link to="/dashboard/myreview">Add review</Link>}
              <Link to="/dashboard/myprofile">My profile</Link>
              {admin && <Link to="/dashboard/mangaeorder">Manage order</Link>}
              {admin && <Link to="/dashboard/makeadmin">Make admin</Link>}
              {admin && <Link to="/dashboard/addproduct">Add product</Link>}
              {admin && (
                <Link to="/dashboard/manageproduct">Manage product</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
