import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  return (
    <article>
      <section className="flex items-center justify-center w-full h-screen">
        {/* signin section */}
        <div className="bg-gray-900 border-1 rounded-lg border-gray-700 px-4 pt-10 pb-6 md:w-[400px] w-8/12">
          <h3 className="text-center ">login</h3>
          <div className="flex flex-col gap-3">
            {/* eamil section user */}
            <div className="flex   items-center h-10  bg-orange-300 rounded-lg ">
              <MdEmail className=" border-gray-400 border-1  w-10 p-2 h-full bg-gray-600   rounded-l-lg " />
              <input
                type="email"
                placeholder="email"
                className=" bg-gray-600 px-2 py-1 h-full focus:bg-gray-700 border-gray-400 border-1 outline-none
                 w-full  rounded-r-lg text-lg"
              />
            </div>
            {/* password section user */}
            <div className="flex   items-center h-10  bg-orange-300 rounded-lg ">
              <RiLockPasswordFill className=" border-gray-400 border-1  w-10 p-2 h-full bg-gray-600   rounded-l-lg " />
              <input
                type="password"
                placeholder="password"
                className=" bg-gray-600 px-2 py-1 h-full focus:bg-gray-700 border-gray-400 border-1 outline-none
                 w-full  rounded-r-lg text-lg"
              />
            </div>
            {/* login button
             */}
            <div className="flex justify-center">
              <button className="bg-indigo-700 px-8 py-1 rounded-lg text-lg focus:bg-green-600">
                Login
              </button>
            </div>
          </div>

          {/* or */}
          <h5 className="text-center mt-3">or</h5>

          <div className="flex items-center justify-center gap-3">
            {/* Google  */}
            <button>
              <img
                src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
                alt=""
                className=" rounded-full border-1 border-slate-800 p-1 w-10 h-10"
              />
            </button>

            {/* Linkdin */}

            <button>
              <img
                src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
                alt=""
                className=" rounded-full border-1 border-slate-800 p-1 w-10 h-10"
              />
            </button>
          </div>

          <h6 className="text-sm font-light mt-3 text-center">
            Create new account ?{" "}
            <Link className="font-semibold" to={"/auth-register"}>
              Signup
            </Link>
          </h6>
        </div>

        {/* signup  section */}
      </section>
    </article>
  );
}
