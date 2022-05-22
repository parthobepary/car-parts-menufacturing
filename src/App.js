import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Authentication/Login";
import Ragister from "./pages/Authentication/Ragister";
import Blogs from "./pages/Blogs/Blogs";
import Addproduct from "./pages/Dashboard/Addproduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import Makeadmin from "./pages/Dashboard/Makeadmin";
import Manageorder from "./pages/Dashboard/Manageorder";
import Myorder from "./pages/Dashboard/Myorder";
import Myprofile from "./pages/Dashboard/Myprofile";
import Myreviews from "./pages/Dashboard/Myreviews";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div className="App" data-theme="light">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Myorder></Myorder>}></Route>
            <Route path="myreview" element={<Myreviews />}></Route>
            <Route path="myprofile" element={<Myprofile />}></Route>
            <Route path="mangaeorder" element={<Manageorder />}></Route>
            <Route path="makeadmin" element={<Makeadmin />}></Route>
            <Route path="addproduct" element={<Addproduct />}></Route>
          </Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/ragister" element={<Ragister />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
