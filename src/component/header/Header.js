import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-slate-300 p-2 mb-4 rounded-2xl">
      <nav className="md:flex lg:flex md:justify-between text-center bg-slate-300  items-center  ">
        <div>
          <img
            className="h-16 mx-auto text-center  rounded-2xl "
            src={require(".././ImageAndExtra/nav-logo.png")}
            alt=""
          ></img>
        </div>
        <div className=" md:flex lg:flex  gap-5 font-bold text-xl   ">
          <CustomLink
            to="/"
            className="hover:text-rose-400 hover:cursor-pointer"
          >
            Home
          </CustomLink>
          <CustomLink
            to="/review"
            className="hover:text-rose-400 hover:cursor-pointer"
          >
            Review
          </CustomLink>
          <CustomLink
            to="/dashboard"
            className="hover:text-rose-400 hover:cursor-pointer"
          >
            Dashboard
          </CustomLink>
          <CustomLink
            to="/blogs"
            className="hover:text-rose-400 hover:cursor-pointer"
          >
            Blogs
          </CustomLink>
          <CustomLink
            to="/about"
            className="hover:text-rose-400 hover:cursor-pointer"
          >
            About
          </CustomLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
