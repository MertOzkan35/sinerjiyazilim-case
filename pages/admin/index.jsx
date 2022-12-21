import React from "react";
import AddMovie from "../../components/admin/AddMovie";
import DeleteMovie from "../../components/admin/DeleteMovie";
import UpdateMovie from "../../components/admin/UpdateMovie";
import Navbar from "../../components/navbar/Navbar2";
import { useState } from "react";
const Index = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div>
      <Navbar />
      <div className="flex px-10 min-h-[calc(100vh_-_433px)] mt-40 lg:flex-row flex-col lg:mb-0 mb-10">
        <div className="lg:w-80 w-100 flex-shrink-0">
          <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
            <b className="text-2xl mt-1">Admin</b>
          </div>
          <ul className="text-center font-semibold">
            <li
              className={`border w-full p-3 cursor-pointer hover:bg-primary `}
              onClick={() => setTabs(0)}
            >
              <button className="ml-1 ">Add Movie</button>
            </li>
            <li
              className={`border  border-t-0  w-full p-3 cursor-pointer hover:bg-primary `}
              onClick={() => setTabs(1)}
            >
              <button className="ml-1">Delete Movie</button>
            </li>
            <li
              className={`border  border-t-0  w-full p-3 cursor-pointer hover:bg-primary `}
              onClick={() => setTabs(2)}
            >
              <button className="ml-1">Update Movie</button>
            </li>
          </ul>
        </div>
        {tabs === 0 && <AddMovie />}
        {tabs === 1 && <DeleteMovie />}
        {tabs === 2 && <UpdateMovie />}
      </div>
    </div>
  );
};

export default Index;
