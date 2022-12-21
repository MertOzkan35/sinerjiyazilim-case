import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className="w-full h-[40rem] bg-[#2c3440] flex flex-col">
      <div className="w-full  flex flex-col sm:flex-row justify-center sm:justify-between px-2 ">
        <div className="w-full h-full gap-1 sm:gap-5 sm:ml-12 mt-4 text-[14px] sm:text-xl  flex flex-row justify-start pt-5  items-center ">
          <Link
            href="/about"
            className="t font-bold text-[#96a6b7]  hover:text-[#fff]"
          >
            About
          </Link>

          <a className=" font-bold text-[#96a6b7]  hover:text-[#fff]">Help</a>

          <a className=" font-bold text-[#96a6b7]  hover:text-[#fff]">
            Contact
          </a>
        </div>
      </div>
      <div className=" mt-6 flex sm:justify-start sm:text-start justify-center text-center   sm:pl-[75px]  text-[#4d5b69]">
        <p>
          Hakkımızda 2002 yılında İzmir de kurulan Sinerji Hukuk Yazılımları,
          Türkiye deki serbest avukatlar ve tüm kamu kurum ve kuruluşları ile
          özel şirketlere, yazılımı kendi bünyesinde gerçekleştirilmiş olan
          paket hukuk programlarının satışı ve satış sonrası hizmetlerini
          gerçekleştiren bir Anonim Şirkettir.
        </p>
      </div>
    </div>
  );
}

export default Footer;
