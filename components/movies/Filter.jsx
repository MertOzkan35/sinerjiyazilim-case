import React from "react";

function Filter(props) {
  return (
    <div>
      <div className="w-full h-full bg-[#1b2228] flex flex-col sm:flex-row justify-center sm:justify-between items-center p-20">
        <div className="  flex flex-col sm:flex-row text-lg  text-[#899aa9] ">
          <p>BROWSE BY</p>
          <div className="border-2 sm:mt-0 mt-4 border-[#232a31] flex text-center  sm:ml-4">
            <select
              onChange={(event) =>
                props.ChangeYear({ year: event.target.value })
              }
              className="bg-[#1b2127]    w-[140px] border-r-2 border-[#232a31] focus:bg-[#D3D3D3] focus:text-black focus:text-opacity-60 "
            >
              <option>Year</option>
              <option>2020s</option>
              <option>2010s</option>
              <option>2000s</option>
              <option>Older...</option>
            </select>
            <select
              onChange={(event) =>
                props.ChangeYear({ genre: event.target.value })
              }
              className="bg-[#1b2127] w-[140px]   focus:bg-[#D3D3D3]  focus:text-black focus:text-opacity-60 "
            >
              <option>Genre</option>
              <option>Action</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Horror</option>
              <option>Science Fiction</option>
              <option>Fantasy</option>
            </select>
          </div>
        </div>
        <div className=" flex  items-center sm:mt-0 mt-4 ">
          <p className="flex flex-row pl-2 sm:text-lg font-semibold  text-[#899aa9] ">
            FIND A FILM
          </p>
          <input
            onChange={(event) => props.FilmName(event.target.value)}
            className="w-[250px] sm:ml-5 h-[40px] ml-2 bg-[#2c3440] rounded-lg focus:bg-slate-100 pl-2"
          ></input>
        </div>
      </div>
      <p className=" bg-[#1b2228] pl-16 text-xl text-[#63707d] hover:text-[#42668a] w-full border-b-2 border-[#445566] hover:border-[#42668a]">
        ALL FILMS FOR YOU
      </p>
    </div>
  );
}

export default Filter;
