import * as React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full h-[100px] px-[20px] sm:px-[50px] flex justify-between items-center bg-[#14181c] text-white  ">
      <p className=" text-3xl font-extrabold ">SİNERJİ </p>
      <div className=" flex gap-[20px] text-lg font-bold ">
        <Link href="/home">HOME</Link>
        <Link href="/movies">MOVIES</Link>
        <Link href="/about">ABOUT</Link>
      </div>
    </div>
  );
}

export default Navbar;
