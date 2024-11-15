import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaUserCircle, FaUser, FaPhoneAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaGoogle, FaLinkedin } from "react-icons/fa"; // Google and LinkedIn Icons

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchBar, setSearchbar] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // To toggle between login and sign-up

  const handleLoginClose = () => setLoginShow(false);
  const handleLoginShow = () => setLoginShow(true);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setSearchbar(false);
  };

  const handleSearchBar = () => {
    setSearchbar(!searchBar);
    setToggleMenu(false);
  };

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleLogin = () => {
    setIsSignUp(false);
  };

  const handleGoogleSignUp = () => {
    // Integrate Google OAuth here
    alert("Google SignUp (integration needed)");
  };

  const handleLinkedInSignUp = () => {
    // Integrate LinkedIn OAuth here
    alert("LinkedIn SignUp (integration needed)");
  };

  const loaction = useLocation();

  const menuList = [
    { name: "Home", path: "/" },
    { name: "Home appliances", path: "/home-appliances" },
    { name: "Audio & Video", path: "/audio-video" },
    { name: "Refrigerator", path: "/refrigerator" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Today's deal", path: "/todays-deal" },
    { name: "Gift cards", path: "/gift-cards" },
  ];

  return (
    <header className="relative bg-slate-800">
      {/* Top Header */}
      <div className="bg-gray-200">
        <div className="text-gray-800 py-1 md:w-10/12 w-11/12 mx-auto flex items-center justify-between">
          <h2 className="md:text-sm text-[.6rem]">
            24/7 Customer service <b>1-800-234-5678</b>
          </h2>
          <div className="text-gray-800 flex items-center md:gap-10 gap-5">
            <h2 className="md:text-sm text-[.6rem]">Shipping</h2>
            <h2 className="md:text-sm text-[.6rem]">Track Order</h2>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <nav className="w-11/12 mx-auto py-1 flex items-center justify-between md:justify-evenly">
        {/* Image or Logo Name */}
        <div>
          <img
            src="./img/logo.png"
            alt="Logo"
            className="aspect-square md:w-12 w-10 rounded-full"
          />
        </div>

        {/* Search Bar */}
        <div className="lg:w-[48rem] md:w-[36rem] hidden relative md:block">
          <input
            type="text"
            placeholder="search..."
            className="bg-gray-950 w-full delay-200 duration-200 text-gray-300 outline-none border-1 rounded-md border-gray-600 px-4 py-1 text-lg"
          />
          <button className="absolute right-2 top-2 text-xl text-gray-300">
            <FiSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="md:text-3xl text-2xl flex items-center md:gap-6 gap-2">
          {/* Search Icon */}
          <button onClick={handleSearchBar} className="md:hidden block">
            <FiSearch />
          </button>

          {/* ShoppingCart */}
          <Link
            to="/cart"
            className="text-gray-200 hover:text-gray-400 delay-200 duration-200"
          >
            <PiShoppingCartSimpleFill />
          </Link>

          {/* User Icons */}
          <button
            onClick={handleLoginShow}
            className="text-gray-200 hover:text-gray-400"
          >
            <FaUserCircle />
          </button>

          {/* Toggle Menu */}
          <button onClick={handleToggleMenu} className="md:hidden block">
            {toggleMenu ? <RxCross1 /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Bottom header */}
      <div className="w-full hidden md:flex duration-200 bg-slate-700 items-center justify-center gap-4 py-1 text-gray-100">
        {menuList.map((item, index) => {
          let isActive = loaction.pathname === item.path;

          return (
            <Link
              style={{
                textDecoration: "none",
              }}
              key={index}
              to={item.path}
              className={`text-gray-200 hover:text-gray-500 duration-200 delay-200 ${
                isActive ? "text-orange-600" : "text-gray-200"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Menu For Small Screen */}
      {toggleMenu && (
        <div className="absolute w-full md:hidden duration-300 delay-300 ease-in-out block">
          <div className="my-1 mx-4 bg-gray-700 rounded-xl py-2 px-1 shadow-md shadow-gray-200 flex flex-col gap-2 items-center duration-300 delay-300">
            {menuList.map((items, index) => {
              const isActive = loaction.pathname === items.path;
              return (
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  key={index}
                  to={items.path}
                  className={`hover:bg-orange-100 py-1 hover:text-orange-600 w-full text-center rounded-md ${
                    isActive ? "bg-slate-200 text-gray-700" : "text-gray-200"
                  }`}
                >
                  {items.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Small Screen Search Bar */}
      {searchBar && (
        <div className="w-8/12 mx-auto duration-500 md:hidden block">
          <input
            type="text"
            placeholder="search..."
            className="w-full py-1 px-4 rounded-md text-sm text-gray-100 border outline-none bg-gray-600"
          />
        </div>
      )}

      {/* Login/SignUp Modal */}
      <Modal show={loginShow} onHide={handleLoginClose}>
        <div className="bg-gray-600 relative rounded-md">
          <button
            className="absolute text-3xl text-rose-400 top-2 right-2"
            onClick={handleLoginClose}
          >
            <IoCloseCircleOutline />
          </button>
          <div className="bg-gray-900 border-1 rounded-lg border-gray-700 px-4 pt-10 pb-6">
            {isSignUp ? (
              <>
                <h3 className="text-center">Register</h3>
                <div className="flex flex-col gap-3">
                  {/* Full name */}
                  <div className="flex items-center h-10 bg-orange-300 rounded-lg">
                    <FaUser className="border-gray-400 border-1 w-10 p-2 h-full bg-gray-600 rounded-l-lg" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="bg-gray-600 px-2 py-1 h-full focus:bg-gray-700 border-gray-400 border-1 outline-none w-full rounded-r-lg text-lg"
                    />
                  </div>
                  {/* Contact number */}
                  <div className="flex items-center h-10 bg-orange-300 rounded-lg">
                    <FaPhoneAlt className="border-gray-400 border-1 w-10 p-2 h-full bg-gray-600 rounded-l-lg" />
                    <input
                      type="text"
                      placeholder="+91 0000000000"
                      className="bg-gray-600 px-2 py-1 h-full focus:bg-gray-700 border-gray-400 border-1 outline-none w-full rounded-r-lg text-lg"
                    />
                  </div>
                  {/* Email */}
                  <div className="flex items-center h-10 bg-orange-300 rounded-lg">
                    <MdEmail className="border-gray-400 border-1 w-10 p-2 h-full bg-gray-600 rounded-l-lg" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-600 px-2 py-1 h-full focus:bg-gray-700 border-gray-400 border-1 outline-none w-full rounded-r-lg text-lg"
                    />
                  </div>
                  {/* Password */}
                  <div className="flex items-center h-10 bg-orange-300 rounded-lg">
                    <RiLockPasswordFill className="border-gray-400 border-1 w-10 p-2 h-full bg-gray-600 rounded-l-lg" />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="bg-gray-600 px-2 py-1 h-full focus:bg-gray-700 border-gray-400 border-1 outline-none w-full rounded-r-lg text-lg"
                    />
                  </div>
                  {/* Confirm Password */}
                  <div className="flex items-center h-10 bg-orange-300 rounded-lg">
                    <RiLockPasswordFill className="border-gray-400 border-1 w-10 p-2 h-full bg-gray-600 rounded-l-lg" />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="bg-gray-600 px-2 py-1 h-full focus:bg-gray-700 border-gray-400 border-1 outline-none w-full rounded-r-lg text-lg"
                    />
                  </div>
                  {/* Sign Up Button */}
                  <div className="flex justify-center">
                    <button className="bg-indigo-700 px-8 py-1 rounded-lg text-lg focus:bg-green-600">
                      Sign Up
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-center">Login</h3>
                <div className="flex flex-col gap-3">
                  {/* Email */}
                  <div className="flex items-center h-10 bg-orange-300 rounded-lg">
                    <MdEmail className="border-gray-400 border-1 w-10 p-2 h-full bg-gray-600 rounded-l-lg" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-600 px-2 py-1 h-full focus:bg-gray-700 border-gray-400 border-1 outline-none w-full rounded-r-lg text-lg"
                    />
                  </div>
                  {/* Password */}
                  <div className="flex items-center h-10 bg-orange-300 rounded-lg">
                    <RiLockPasswordFill className="border-gray-400 border-1 w-10 p-2 h-full bg-gray-600 rounded-l-lg" />
                    <input
                      type="password"
                      placeholder="Password"
                      className="bg-gray-600 px-2 py-1 h-full focus:bg-gray-700 border-gray-400 border-1 outline-none w-full rounded-r-lg text-lg"
                    />
                  </div>
                  {/* Login Button */}
                  <div className="flex justify-center">
                    <button className="bg-indigo-700 px-8 py-1 rounded-lg text-lg focus:bg-green-600">
                      Login
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Google and LinkedIn SignUp Buttons */}
            <div className="flex justify-around mt-4">
              <button
                className="bg-red-500 px-4 py-2 text-white flex items-center gap-2 rounded-lg"
                onClick={handleGoogleSignUp}
              >
                <FaGoogle /> Sign up with Google
              </button>
              <button
                className="bg-blue-700 px-4 py-2 text-white flex items-center gap-2 rounded-lg"
                onClick={handleLinkedInSignUp}
              >
                <FaLinkedin /> Sign up with LinkedIn
              </button>
            </div>

            {/* Switch between SignUp and Login */}
            <h6 className="text-sm font-light mt-3 text-center">
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <span
                    className="font-semibold cursor-pointer"
                    onClick={handleLogin}
                  >
                    Login
                  </span>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <span
                    className="font-semibold cursor-pointer"
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </span>
                </>
              )}
            </h6>
          </div>
        </div>
      </Modal>
    </header>
  );
}
