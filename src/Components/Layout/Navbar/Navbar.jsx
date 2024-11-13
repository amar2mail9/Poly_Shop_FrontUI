import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchBar, setSearchbar] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setSearchbar(false);
  };
  const handleSearchBar = () => {
    setSearchbar(!searchBar);
    setToggleMenu(false);
  };

  const loaction = useLocation();

  const menuList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Home appliances",
    },
    {
      name: "Audio & Video",
    },
    {
      name: "Refrigerator",
    },
    {
      name: "New Arrivals",
    },
    {
      name: "Today's deal",
    },
    {
      name: "Gift cards",
    },
  ];
  return (
    <header className="relative bg-slate-800">
      {/* Top Header */}
      <div className="bg-gray-200 ">
        <div className=" text-gray-800 py-1 md:w-10/12 w-11/12 mx-auto flex items-center justify-between ">
          <h2 className="md:text-sm text-[.6rem]">
            24/7 Customer service <b>1-800-234-5678</b>
          </h2>

          <div className="text-gray-800 flex items-center md:gap-10 gap-5">
            <h2 className="md:text-sm text-[.6rem] ">Shiping</h2>
            <h2 className="md:text-sm text-[.6rem]">Track Order</h2>
          </div>
        </div>
      </div>

      {/* Midle Header */}
      <nav className="w-11/12 mx-auto py-1 flex items-center  justify-between md:justify-evenly">
        {/* Image or Logo Name */}
        <div>
          <img
            src="./img/logo.png"
            alt=""
            className="aspect-square md:w-12 w-10 rounded-full"
          />
        </div>

        {/* Search Bar */}
        <div className="lg:w-[48rem] md:w-[36rem] hidden  relative md:block ">
          <input
            type="text"
            placeholder="search..."
            className="bg-gray-950  w-full   delay-200 duration-200 text-gray-300 outline-none border-1 rounded-md border-gray-600 px-4 py-1 text-lg"
          />
          <button className="absolute right-2 top-2 text-xl text-gray-300">
            <FiSearch />
          </button>
        </div>

        {/* icons */}
        <div className="md:text-3xl  text-2xl flex items-center md:gap-6 gap-2">
          {/* Search Icon */}
          <button onClick={handleSearchBar} className="md:hidden block">
            <FiSearch />
          </button>

          {/* ShopingCart */}
          <Link className="text-gray-200 hover:text-gray-400 delay-200 duration-200">
            <PiShoppingCartSimpleFill />
          </Link>

          {/* User Icons */}
          <Link className="text-gray-200 hover:text-gray-400">
            <FaUserCircle />
          </Link>

          {/* Toggle Menu */}
          <button onClick={handleToggleMenu} className="md:hidden block">
            {toggleMenu ? <RxCross1 /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Bottom header */}
      <div className="w-full hidden md:flex duration-200 bg-slate-700  items-center justify-center gap-4 py-1 text-gray-100">
        {menuList.map((item, index) => {
          let isActive = loaction.pathname === item.path;

          return (
            <Link
              style={{
                textDecoration: "none",
              }}
              key={index}
              to={item.path} // Make sure to provide the correct path or URL here
              className={`text-gray-200 hover:text-gray-500 duration-200 delay-200 ${
                isActive ? "text-orange-600 " : "text - gray - 200"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* menu For Small Screen */}
      {toggleMenu && (
        <div className=" absolute w-full md:hidden duration-300 delay-300 ease-in-out block">
          <div className="my-1 mx-4 bg-gray-900 rounded-xl py-2  px-1 shadow-md shadow-gray-200 flex flex-col gap-2 items-center duration-300 delay-300">
            {menuList.map((items, index) => {
              const isActive = loaction.pathname === items.path;
              return (
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  className={`hover:bg-orange-100 py-1 hover:text-orange-600  w-full  text-center rounded-md ${
                    isActive ? " bg-slate-200  text-gray-700" : "text-gray-200 "
                  }`}
                >
                  {items.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* smasll Screen seach abr */}

      {searchBar && (
        <div className="  w-8/12 mx-auto  duration-500 md:hidden block">
          <input
            type="text"
            placeholder="search..."
            className="w-full py-1 px-4  rounded-md  text-sm text-gray-100 border outline-none  bg-gray-600"
          />
        </div>
      )}
    </header>
  );
}
