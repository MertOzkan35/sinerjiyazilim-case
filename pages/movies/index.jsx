import React from "react";
import MoviesPage from "../../components/movies/Movies";
import axios from "axios";
const Index = ({ MovieList }) => {
  return (
    <div>
      <MoviesPage MovieList={MovieList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const movie = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/movies`);

  return {
    props: {
      MovieList: movie.data,
    },
  };
};

export default Index;
