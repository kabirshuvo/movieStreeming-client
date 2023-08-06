import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegHeart, FaSearch, FaUserSecret } from "react-icons/fa";

const NavBar = () => {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  return (
    <div className="bg-main shadow-md sticky top-0 z-20">
      <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
        <div className="col-span-1 lg:block mb-2">
          <Link to="/">
            <img
              src="/images/movieStreem_logo.png"
              alt="movie streeming logo"
              className="w-full h-12 object-contain rounded flex-colo"
            />
          </Link>
        </div>

        
        <div className="col-span-3 font-medium text-sm flex xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center mb-2">
          <NavLink to="/channels" className={Hover}>
            Channels
          </NavLink>
          <NavLink to="/movies" className={Hover}>
            Movies
          </NavLink>
          <NavLink to="/subscribe" className={Hover}>
            Subscribe
          </NavLink>
          <NavLink to="/login" className={Hover}>
          <FaUserSecret/>
          </NavLink>
          <NavLink to="/favorite-movies" className={`${Hover} relative`}>
          <FaRegHeart className="w-6 h-6"/>
          <div className="absolute text-white w-5 h5 flex-colo rounded-full text-xs -top-4 left-0">
            3
          </div>
          </NavLink>
        </div>


        <div className="col-span-3">
          <form className="flex text-sm bg-dryGray rounded text-white mb-4">
            
            <input
              type="text"
              placeholder="Search Movie"
              className="font-medium placeholder:text-border text-sm  w-11/12 h-12 bg-transparent border-none px-2 text-main"
            />
            <button
              type="submit"
              className="bg-subMain w-16 flex-colo h-12 rounded text-white"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
