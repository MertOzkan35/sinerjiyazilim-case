import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";

function AddMovie() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "sinerji");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dzo6s4qd3/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newMovie = {
        img: url,
        name,
        category,
        year,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/movies`,
        newMovie
      );

      if (res.status === 200) {
        toast.success("Movie Added!");
      }
    } catch (err) {
      console.log("başarısız");
    }
  };
  return (
    <div className="w-full h-full mb-40 grid place-content-center relative">
      <div className="flex h-full flex-col justify-center items-center ju z-50 md:w-[600px] w-[370px]  text-center  bg-white border-2 p-10 rounded-3xl">
        <div className="text-[40px] w-full ">Add a New Movie</div>
        <div className="flex  w-full  items-center justify-center  text-sm mt-6">
          <label className="flex  w-full gap-2 items-center">
            <input type="file" onChange={handleOnChange} className="hidden" />
            <button className="btn-primary w-1/2 h-16 rounded-lg font-bold text-lg !bg-blue-600 pointer-events-none">
              Choose an Image
            </button>
            {imageSrc && (
              <div>
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img src={imageSrc} alt="" className="w-12 h-12 " />
              </div>
            )}
          </label>
        </div>
        <div className="flex flex-col w-full justify-center mt-8 items-center text-sm ">
          <span className="font-semibold text-lg mb-[2px]"> Movie Name</span>
          <input
            type="text"
            className="border-2 p-1 w-3/4 h-12 rounded-3xl text-sm px-4 outline-none"
            placeholder="Write a Name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full justify-center mt-8 items-center text-sm ">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 p-1 w-3/4 h-12 rounded-3xl text-sm px-4 outline-none "
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
        <div className="flex flex-col w-full justify-center mt-8 items-center text-sm ">
          <select
            onChange={(e) => setYear(e.target.value)}
            className="border-2 p-1 w-3/4 h-12 rounded-3xl text-sm px-4 outline-none "
          >
            <option>Year</option>
            <option>2020s</option>
            <option>2010s</option>
            <option>2000s</option>
            <option>Older...</option>
          </select>
        </div>
        <button
          className="w-1/2 rounded-3xl mt-10 h-10 bg-[#2563eb]"
          onClick={handleCreate}
        >
          Create Movie
        </button>
      </div>
    </div>
  );
}

export default AddMovie;
