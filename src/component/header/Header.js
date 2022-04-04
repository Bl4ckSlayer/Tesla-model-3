import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between ">
        <div>
          <img
            className="h-16"
            src={require(".././ImageAndExtra/nav-logo.png")}
            alt=""
          ></img>
        </div>
        <div className=" flex gap-5 ">

          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/review">Review</CustomLink>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/about">About</CustomLink>

        </div>
      </nav>
    </div>
  );
};

export default Header;
