import React from "react";
import DrawerAppBar from "../navbar/Navbar";
import Link from "next/link";
import Navbar from "../navbar/Navbar2";

function Homepage() {
  return (
    <div className="w-100%  h-100%">
      <Navbar />
      <div className="w-full h-[1300px] justify-center items-center relative  flex flex-col bg-[#14181d]">
        <div className=" w-3/4  relative  leading-normal flex justify-center  text-white text-center font-bold text-5xl  ">
          Track films you’ve watched. Save those you want to see. Tell your
          friends what’s good.
        </div>
        <div className=" w-full h-[9rem] flex flex-col  justify-center  items-center ">
          <Link href="/movies">
            <button className="w-[21rem] h-[3rem] hover:border-2 bg-[#00b020] text-xl p-2 justfy- rounded-xl text-white ">
              ALL FILMS
            </button>
          </Link>
          <p className="text-xl  mt-6  flex justify-center items-center text-[#6a7c84]">
            The social network for film lovers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
