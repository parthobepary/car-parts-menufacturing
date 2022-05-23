import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./pages/Authentication/Login";
import Ragister from "./pages/Authentication/Ragister";
import RequerAdmin from "./pages/Authentication/RequerAdmin";
import RequerUser from "./pages/Authentication/RequerUser";
import Blogs from "./pages/Blogs/Blogs";
import Addproduct from "./pages/Dashboard/Addproduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import Makeadmin from "./pages/Dashboard/Makeadmin";
import Manageorder from "./pages/Dashboard/Manageorder";
import Myorder from "./pages/Dashboard/Myorder";
import Myprofile from "./pages/Dashboard/Myprofile";
import Myreviews from "./pages/Dashboard/Myreviews";
import Home from "./pages/Home/Home";
import OrderModal from "./pages/Home/OrderModal";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./pages/Shared/Navbar";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App" data-theme="light">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/dashboard"
            element={
              <RequerUser>
                <Dashboard />
              </RequerUser>
            }
          >
            <Route index element={<Myorder></Myorder>}></Route>
            <Route path="myreview" element={<Myreviews />}></Route>
            <Route path="myprofile" element={<Myprofile />}></Route>
            <Route
              path="mangaeorder"
              element={
                <RequerAdmin>
                  <Manageorder />
                </RequerAdmin>
              }
            ></Route>
            <Route
              path="makeadmin"
              element={
                <RequerAdmin>
                  <Makeadmin />
                </RequerAdmin>
              }
            ></Route>
            <Route
              path="addproduct"
              element={
                <RequerAdmin>
                  <Addproduct />
                </RequerAdmin>
              }
            ></Route>
          </Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/ragister" element={<Ragister />}></Route>
          <Route path="/ordermodal/:id" element={<OrderModal />}></Route>
        </Routes>
        <ToastContainer />
      </Navbar>
    </div>
  );
}

export default App;
