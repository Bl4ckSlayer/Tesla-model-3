import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Dashboard from "./component/Dashboard/Dashboard";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Reviews from "./component/Reviews/Reviews";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about"></Route>
      </Routes>
    </div>
  );
}

export default App;
