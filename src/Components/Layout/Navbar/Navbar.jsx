import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
export default function Navbar() {
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
    <header className="bg-slate-800">
      {/* Top Header */}
      <div className="bg-gray-200 ">
        <div className=" text-gray-800 py-1 w-10/12 mx-auto flex items-center justify-between ">
          <h2 className="text-sm">
            24/7 Customer service <b>1-800-234-5678</b>
          </h2>

          <div className="text-gray-800 flex items-center md:gap-10 gap-5">
            <h2 className="text-sm ">Shiping</h2>
            <h2 className="text-sm">Track Order</h2>
          </div>
        </div>
      </div>

      {/* Midle Header */}
      <nav className="w-11/12 mx-auto py-1 flex items-center  justify-between lg:justify-evenly">
        {/* Image or Logo Name */}
        <div>
          <img
            src="./img/logo.png"
            alt=""
            className="aspect-square w-12 rounded-full"
          />
        </div>

        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="search..."
            className="bg-gray-950 hidden lg:block md:w-[48rem] text-gray-300 outline-none border-1 rounded-md border-gray-600 px-4 py-1 text-lg"
          />
        </div>

        {/* icons */}
        <div className="text-3xl flex items-center gap-6">
          {/* Search Icon */}
          <button className="lg:hidden block">
            <FiSearch />
          </button>

          {/* ShopingCart */}
          <Link className="text-gray-200 hover:text-gray-400">
            <PiShoppingCartSimpleFill />
          </Link>

          {/* User Icons */}
          <Link className="text-gray-200 hover:text-gray-400">
            <FaUserCircle />
          </Link>

          {/* Toggle Menu */}
          <button className="md:hidden block">
            <HiMenu />
          </button>
        </div>
      </nav>

      {/* Bottom header */}
      <div className="w-full bg-slate-700 flex items-center justify-center gap-4 py-1 text-gray-100">
        {menuList.map((item, index) => (
          <Link
            key={index}
            to={item.path} // Make sure to provide the correct path or URL here
            className="text-gray-100 hover:underline"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
