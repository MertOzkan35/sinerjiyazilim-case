import React, { useState, useEffect } from "react";
import DrawerAppBar from "../navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import TablePagination from "@mui/material/TablePagination";
import Filter from "./Filter";
function MoviesPage() {
  const data = [
    {
      Category: "Drama",
      Name: "everything everywhere all at once",
      Id: "1",
      img: "1.jpg",
      Date: 2022,
      Part: "2020s",
      Subject:
        "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what’s important to her by connecting with the lives she could have led in other universes.",
      Director: "Daniel Scheinert, Daniel Kwan",
    },
    {
      Category: "Action",
      Name: "the last duel",
      Id: "2",
      img: "2.jpg",
      Date: 2021,
      Part: "2020s",
      Subject:
        "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire by challenging him to a duel.",
      Director: "Ridley Scott",
    },
    {
      Category: "Science Fiction",
      Name: "dune",
      Id: "3",
      img: "3.jpg",
      Date: 2021,
      Part: "2020s",
      Subject:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet’s exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity’s greatest potential-only those who can conquer their fear will survive.",
      Director: " Denis Villeneuve",
    },
    {
      Category: "Drama",
      Name: "drive my car",
      Id: "4",
      img: "4.jpg",
      Date: 2021,
      Part: "2020s",
      Subject:
        "Yusuke Kafuku, a stage actor and director, still unable, after two years, to cope with the loss of his beloved wife, accepts to direct Uncle Vanja at a theater festival in Hiroshima. There he meets Misaki, an introverted young woman, appointed to drive his car. In between rides, secrets from the past and heartfelt confessions will be unveiled.",
      Director: "Ryusuke Hamaguchi",
    },
    {
      Category: "Drama",
      Name: "the worst person in the world",
      Id: "5",
      img: "5.jpg",
      Date: 2021,
      Part: "2020s",
      Subject:
        "Chronicles four years in the life of Julie, a young woman who navigates the troubled waters of her love life and struggles to find her career path, leading her to take a realistic look at who she really is.",
      Director: "Joachim Trier",
    },
    {
      Category: "Drama",
      Name: "good will hunting",
      Id: "6",
      img: "6.jpg",
      Date: 1997,
      Part: "Older...",
      Subject:
        "Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.",
      Director: "Gus Van Sant",
    },
    {
      Category: "Drama",
      Name: "her",
      Id: "7",
      img: "7.jpg",
      Date: 2013,
      Part: "2010s",
      Subject:
        "In the not so distant future, Theodore, a lonely writer purchases a newly developed operating system designed to meet the user’s every needs. To Theodore’s surprise, a romantic relationship develops between him and his operating system. This unconventional love story blends science fiction and romance in a sweet tale that explores the nature of love and the ways that technology isolates and connects us all.",
      Director: "Spike Jonze",
    },
    {
      Category: "Drama",
      Name: "undine",
      Id: "8",
      img: "8.jpg",
      Date: 2020,
      Part: "2020s",
      Subject:
        "Undine works as a historian lecturing on Berlin’s urban development. When the man she loves leaves her, the ancient myth catches up with her. But falling in love anew, Undine reworks the myth of the mysterious water spirit as a modern fairy-tale in a disenchanted world.",
      Director: "Christian Petzold",
    },
    {
      Category: "Drama",
      Name: "parasite",
      Id: "9",
      img: "9.jpg",
      Date: 2019,
      Part: "2010s",
      Subject:
        "All unemployed, Ki-taek’s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      Director: "Bong Joon-ho",
    },
    {
      Category: "Drama",
      Name: "gone girl",
      Id: "10",
      img: "10.jpg",
      Date: 2014,
      Part: "2010s",
      Subject:
        "With his wife’s disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it’s suspected that he may not be innocent.",
      Director: "David Fincher",
    },
    {
      Category: "Drama",
      Name: "birdman",
      Id: "11",
      img: "11.jpg",
      Date: 2014,
      Part: "2010s",
      Subject:
        "A portrait of Robert, a troubled but poetic soul struggling with his purgatorial existence in a hackney scrapyard.",
      Director: "Guy Bolongaro",
    },
    {
      Category: "Drama",
      Name: "frances ha",
      Id: "12",
      img: "12.jpg",
      Date: 2012,
      Part: "2010s",
      Subject:
        "An aspiring dancer moves to New York City and becomes caught up in a whirlwind of flighty fair-weather friends, diminishing fortunes and career setbacks.",
      Director: "Noah Baumbach",
    },
    {
      Category: "Drama",
      Name: "mr nobody",
      Id: "13",
      img: "13.jpg",
      Date: 2009,
      Part: "2000s",
      Subject:
        "Nemo Nobody leads an ordinary existence with his wife and 3 children; one day, he wakes up as a mortal centenarian in the year 2092.",
      Director: "Jaco Van Dormael",
    },
    {
      Category: "Drama",
      Name: "the curious case of benjamin button",
      Id: "14",
      img: "14.jpg",
      Date: 2008,
      Part: "2000s",
      Subject:
        "Born under unusual circumstances, Benjamin Button springs into being as an elderly man in a New Orleans nursing home and ages in reverse. Twelve years after his birth, he meets Daisy, a child who flits in and out of his life as she grows up to be a dancer. Though he has all sorts of unusual adventures over the course of his life, it is his relationship with Daisy, and the hope that they will come together at the right time, that drives Benjamin forward.",
      Director: "David Fincher",
    },
    {
      Category: "Drama",
      Name: "vicky cristina barcelona",
      Id: "15",
      img: "15.jpg",
      Date: 2008,
      Part: "2000s",
      Subject:
        "Two girlfriends on a summer holiday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture.",
      Director: "Woody Allen",
    },
    {
      Category: "Drama",
      Name: "lost in translation",
      Id: "16",
      img: "16.jpg",
      Date: 2003,
      Part: "2000s",
      Subject:
        "Two lost souls visiting Tokyo  the young, neglected wife of a photographer and a washed-up movie star shooting a TV commercial  find an odd solace and pensive freedom to be real in each other’s company, away from their lives in America.",
      Director: "Sofia Coppola",
    },
    {
      Category: "Drama",
      Name: "memories of murder",
      Id: "17",
      img: "17.jpg",
      Date: 2003,
      Part: "2000s",
      Subject:
        "1986 Gyunggi Province. The body of a young woman is found brutally raped and murdered. Two months later, a series of rapes and murders commences under similar circumstances. And in a country that had never known such crimes, the dark whispers about a serial murderer grow louder. A special task force is set up in the area, with two local detectives Park Doo-Man and Jo Young-Goo joined by a detective from Seoul who requested to be assigned to the case.",
      Director: "Bong Joon-ho",
    },
    {
      Category: "Drama",
      Name: "leon the professional",
      Id: "18",
      img: "18.jpg",
      Date: 1994,
      Part: "Older...",
      Subject:
        "Léon, the top hit man in New York, has earned a rep as an effective “cleaner”. But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda’s thoughts turn to revenge, and she considers following in Léon’s footsteps.",
      Director: "Luc Besson",
    },
    {
      Category: "Drama",
      Name: "cinema paradiso",
      Id: "19",
      img: "19.jpg",
      Date: 1988,
      Part: "Older...",
      Subject:
        "A filmmaker recalls his childhood, when he fell in love with the movies at his village’s theater and formed a deep friendship with the theater’s projectionist.",
      Director: "Giuseppe Tornatore",
    },
    {
      Category: "Drama",
      Name: "one flew over the cuckoo’s nest",
      Id: "20",
      img: "20.jpg",
      Date: 1975,
      Part: "Older...",
      Subject:
        "While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy, inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.",
      Director: "Miloš Forman",
    },
    {
      Category: "Drama",
      Name: "12 angry men",
      Id: "21",
      img: "21.jpg",
      Date: 1957,
      Part: "Older...",
      Subject:
        "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors’ prejudices and preconceptions about the trial, the accused, and each other.",
      Director: "Sidney Lumet",
    },
    {
      Category: "Drama",
      Name: "the broken landlord",
      Id: "22",
      img: "22.jpg",
      Date: 1985,
      Part: "Older...",
      Subject:
        "The landowner (Agha) of the Haraptar village marries off his old father with the young and beautiful Kiraz. But on the nuptial night, his father dies and everthing starts to go bad for the Agha. Due to the long drought and provocations of Kekec Salman (big brother of Kiraz), the peasants steal the crops and run away to Istanbul.",
      Director: "Nesli Çölgeçen",
    },
    {
      Category: "Action",
      Name: "the Breath",
      Id: "23",
      img: "23.jpg",
      Date: 2009,
      Part: "2000s",
      Subject:
        "A small task force of the Turkish army have to defend a relay station in the middle of nowhere against a possible terrorist raid.",
      Director: "Levent Semerci",
    },
    {
      Category: "Action",
      Name: "the nice guys",
      Id: "24",
      img: "24.jpg",
      Date: 2016,
      Part: "2010s",
      Subject:
        "A private eye investigates the apparent suicide of a fading porn star in 1970s Los Angeles and uncovers a conspiracy.",
      Director: "Shane Black",
    },
    {
      Category: "Action",
      Name: "sicario",
      Id: "25",
      img: "25.jpg",
      Date: 2015,
      Part: "2010s",
      Subject:
        "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.",
      Director: "Denis Villeneuve",
    },
    {
      Category: "Action",
      Name: "Mad Max: Fury Road",
      Id: "26",
      img: "26.jpg",
      Date: 2015,
      Part: "2010s",
      Subject:
        "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
      Director: "George Miller",
    },
    {
      Category: "Action",
      Name: "sin city",
      Id: "27",
      img: "27.jpg",
      Date: 2014,
      Part: "2010s",
      Subject:
        "Welcome to Sin City. This town beckons to the tough, the corrupt, the brokenhearted. Some call it dark… Hard-boiled. Then there are those who call it home — Crooked cops, sexy dames, desperate vigilantes. Some are seeking revenge, others lust after redemption, and then there are those hoping for a little of both. A universe of unlikely and reluctant heroes still trying to do the right thing in a city that refuses to care.",
      Director: "Frank Miller",
    },
    {
      Category: "Action",
      Name: "snowpiercer",
      Id: "28",
      img: "28.jpg",
      Date: 2013,
      Part: "2010s",
      Subject:
        "In a future where a failed global-warming experiment kills off most life on the planet, a class system evolves aboard the Snowpiercer, a train that travels around the globe via a perpetual-motion engine.",
      Director: "Bong Joon-ho",
    },
    {
      Category: "Action",
      Name: "skyfall",
      Id: "29",
      img: "29.jpg",
      Date: 2012,
      Part: "2010s",
      Subject:
        "When Bond’s latest assignment goes gravely wrong and agents around the world are exposed, MI6 is attacked forcing M to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory, the new Chairman of the Intelligence and Security Committee.",
      Director: "Sam Mendes",
    },
    {
      Category: "Action",
      Name: "kill bill: the whole bloody affair",
      Id: "30",
      img: "30.jpg",
      Date: 2011,
      Part: "2010s",
      Subject:
        "An assassin is shot and almost killed by her ruthless employer, Bill, and other members of their assassination circle  but she lives to plot her vengeance. Kill Bill: The Whole Bloody Affair is a complete edit of the two-part martial arts action films Kill Bill: Vol. 1 and Kill Bill: Vol. 2. The film was originally scheduled to be released as one part. However, due to the film’s over 4 hour running time, it was split into two parts.",
      Director: "Quentin Tarantino",
    },
  ];

  // pagination
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // pagination

  // filter

  const [filterData, setFilterData] = useState(data);
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
    setFilterData(data);
    setFilterData(data.filter((item) => item.Name.includes(name)));
  };

  useEffect(() => {
    filter();
  }, [SelectsValue]);

  const filter = () => {
    if (SelectsValue.year === "Year" && SelectsValue.genre === "Genre") {
      setFilterData(data);
    } else if (SelectsValue.genre !== "" || SelectsValue.year !== "") {
      setFilterData(
        data.filter((item) =>
          SelectsValue.genre !== "" && SelectsValue.year !== ""
            ? item.Category === SelectsValue?.genre &&
              item.Part === SelectsValue?.year
            : item.Category === SelectsValue?.genre ||
              item.Part === SelectsValue?.year
        )
      );
    }
  };
  // filter
  console.log(data);
  console.log(filterData);

  return (
    <div className="w-100%  h-100% ">
      <DrawerAppBar />
      <Filter ChangeYear={YearSelectValue} FilmName={FilmName} />
      <div className=" w-full h-full flex flex-col   ">
        <div className="w-full h-full pt-8  bg-[#1b2228] px-8 pb-8  grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6  ">
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
                  <Image
                    className="absolute w-[9rem] h-[13rem] sm:w-[11rem]  sm:h-[16rem] xl:w-[13rem] xl:h-[18rem] border-2 border-[#1b2228] hover:border-[#00b020] rounded-3xl object-cover "
                    src={require(`../../layout/images/${element.img}`)}
                    alt=""
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <TablePagination
        className="bg-[#1b2228] flex flex-row justify-center items-center h-[100px]  "
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={filterData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default MoviesPage;
