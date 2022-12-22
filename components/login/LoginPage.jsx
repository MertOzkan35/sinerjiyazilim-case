import React, { useState } from "react";
import Link from "next/link";
import Footer from "../footer/Footer";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function Login() {
    if (userName.length > 0 && password.length > 4) {
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
    } else {
      alert("ŞİFRENİZ EN AZ 5 HANELİ OLMALIDIR!");
    }
  }
  return (
    <div className="w-full h-full flex flex-col  justify-center  bg-[#1b2228]  items-center">
      <div className="w-full h-[1100px] flex  justify-center py-20 bg-[#1b2228]  items-center">
        <div className=" w-full sm:w-3/4 md:w-1/2  h-3/4  rounded-2xl flex flex-col justify-center gap-10 items-center bg-[#14181c] bg-opacity-40 p-11 border-2 border-[#14181c]">
          <div className=" w-full h-1/4 flex justify-center items-center flex-col  gap-4">
            <p className=" text-white font-bold w-full  text-3xl flex justify-center items-center   text-center mb-3  ">
              {" "}
              User Name
            </p>
            <input
              onChange={(e) => setUserName(e.target.value)}
              className=" w-4/5 sm:w-1/2 h-12 rounded-2xl border-2 border-white pl-2 font-semibold "
            ></input>
          </div>
          <div className="w-full h-1/4 flex justify-center items-center flex-col  gap-4">
            <p className=" text-white font-bold w-full  text-3xl flex justify-center items-center   text-center  mb-3 ">
              {" "}
              Password
            </p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-4/5 sm:w-1/2 h-12 rounded-2xl border-2 border-white pl-2 font-semibold "
            ></input>
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-20">
            <Link
              className="w-full flex flex-col justify-center items-center"
              href="/home"
            >
              <button
                className="w-4/5 sm:w-1/2 h-12 hover:border-0 border-2 hover:shadow-xl  bg-white rounded-full font-semibold "
                onClick={Login}
              >
                Login
              </button>
            </Link>

            <Link className="w-full mt-10" href="/register ">
              <p className="w-full flex justify-center   items-center mt-5 text-white font-bold text-sm t">
                {" "}
                Dont have an account? Create Account...
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
