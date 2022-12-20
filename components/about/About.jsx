import React from "react";
import DrawerAppBar from "../navbar/Navbar";
import Link from "next/link";
import Navbar from "../navbar/Navbar2";

function Aboutpage() {
  return (
    <div className="w-full  h-full">
      <Navbar />
      <div className="flex flex-col w-full h-full py-40 px-16  justify-center items-center text-center bg-[#1b2228] text-white gap-16 ">
        <h1 className=" text-5xl ">About Us Page</h1>
        <p className="text-3xl">Some text about who we are and what we do.</p>
        <p className="text-xl">
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
        <h2 className="text-5xl">Our Team</h2>
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 justify-center item-center gap-[200px] ">
          <div className="w-1/10 h-[300px] bg-white text-black  flex flex-col items-center justify-start rounded-2xl gap-[50px] p-5 font-bold  ">
            <h1 className="text-2xl">Jane Doe</h1>
            <p>CEO & Founder</p>
            <p className="">Some text that describes me lorem ipsum.</p>
          </div>
          <div className="w-1/10 h-[300px] bg-white text-black  flex flex-col items-center justify-start rounded-2xl gap-[50px] p-5 font-bold  ">
            <h1 className="text-2xl">Mike Ross</h1>
            <p>Art Director</p>
            <p className="">Some text that describes me lorem ipsum.</p>
          </div>
          <div className="w-1/10 h-[300px] bg-white text-black  flex flex-col items-center justify-start rounded-2xl gap-[50px] p-5 font-bold  ">
            <h1 className="text-2xl">Jhon Mendel</h1>
            <p>Designer</p>
            <p className="">Some text that describes me lorem ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
