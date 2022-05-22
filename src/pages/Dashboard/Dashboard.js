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
      <div class="drawer drawer-mobile">
        <input id="my-manage" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col text-left ml-6 mt-6">
          <label
            for="my-manage"
            class="btn btn-primary drawer-button lg:hidden text-right"
          >
            Open drawer
          </label>

          <Outlet></Outlet>
        </div>
        <div class="drawer-side ">
          <label for="my-manage" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-gray-500 text-white">
            <li>
              <Link to="/dashboard">My order</Link>
              <Link to="/dashboard/myreview">Add review</Link>
              <Link to="/dashboard/myprofile">My profile</Link>
              {admin && <Link to="/dashboard/mangaeorder">Manage order</Link>}
              {admin && <Link to="/dashboard/makeadmin">Make admin</Link>}
              {admin && <Link to="/dashboard/addproduct">Add product</Link>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
