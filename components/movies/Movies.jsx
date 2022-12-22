import React, { useState, useEffect } from "react";
import DrawerAppBar from "../navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import TablePagination from "@mui/material/TablePagination";
import Filter from "./Filter";
import Navbar from "../navbar/Navbar2";
import Menu from "../navbar/Menu";
import Footer from "../footer/Footer";
import axios from "axios";
import { handle } from "express/lib/router";
const MoviesPage = ({ MovieList }) => {
  console.log(MovieList);

  // pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // pagination

  // filter

  const [filterData, setFilterData] = useState(MovieList);
  console.log(filterData);
  const [SelectsValue, setSelectsValue] = useState({ year: "", genre: "" });
  const YearSelectValue = async (event) => {
    let { year, genre } = SelectsValue;
    // bu year : SelectsValue.year ın kısa hali
    if (event.year) {
      year = event.year;
    }
    if (event.genre) {
      genre = event.genre;
    }

    setSelectsValue({ ...SelectsValue, year, genre });
  };
  const FilmName = (event) => {
    const name = event.toLowerCase();
    setFilterData(MovieList);
    setFilterData(MovieList.filter((item) => item.name.includes(name)));
  };

  useEffect(() => {
    filter();
  }, [SelectsValue]);

  const filter = () => {
    if (SelectsValue.year === "Year" && SelectsValue.genre === "Genre") {
      setFilterData(MovieList);
    } else if (SelectsValue.genre !== "" || SelectsValue.year !== "") {
      setFilterData(
        MovieList.filter((item) =>
          SelectsValue.genre !== "" && SelectsValue.year !== ""
            ? item.category === SelectsValue?.genre &&
              item.year === SelectsValue?.year
            : item.category === SelectsValue?.genre ||
              item.year === SelectsValue?.year
        )
      );
    }
  };
  // filter

  // scroll
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  // scroll
  return (
    <div className="w-100%  h-100%  bg-[#1b2228] ">
      <Navbar />

      <div
        className={` text-white sticky top-20 w-[100px]  z-50 active ${
          show && "hidden"
        }  `}
      >
        <Menu />
      </div>

      <Filter ChangeYear={YearSelectValue} FilmName={FilmName} />
      <div className=" w-full h-full flex flex-col   ">
        <div className="w-full h-full pt-8  bg-[#1b2228] px-12 pb-8  grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5  ">
          {(rowsPerPage > 0
            ? filterData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : filterData
          ).map((element, key) => {
            return (
              <div
                key={key}
                className="  flex  justify-center items-end mb-6 gap-2  h-[16rem] xl:h-[18rem] object-cover    rounded-3xl  group  "
              >
                <Link
                  href="/movies"
                  className="absolute w-[9rem] h-[13rem] sm:w-[11rem]  sm:h-[16rem] xl:w-[13rem] xl:h-[18rem]"
                >
                  <Image src={element.img} alt="" layout="fill" priority />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <TablePagination
        sx={{ button: { color: "#ffffff" } }}
        className="bg-[#1b2228] text-white flex  flex-row justify-center items-center h-[100px]  "
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={filterData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Footer />
    </div>
  );
};

export default MoviesPage;
