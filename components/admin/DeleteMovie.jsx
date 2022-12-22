import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
// import { toast } from "react-toastify";

const DeleteMovie = () => {
  const [movies, setMovies] = useState([]);

  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure you want to delete this movies?")) {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/movies/${id}`
        );
        if (res.status === 200) {
          // toast.success("Product Deleted!");
          getProducts();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getProducts = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/movies`);
      setMovies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-0 mb-10">
      <h1 className="text-[40px] font-bold ">Movies</h1>
      <div className="overflow-auto max-h-[700px] w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 xl:min-w-[1000px] ">
          <thead className="text-xl text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                Image
              </th>
              <th scope="col" className="py-3 px-6">
                Id
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.length > 0 &&
              movies.map((movie) => (
                <tr
                  className="transition-all bg-gray-700  border-gray-700 hover:bg-primary"
                  key={movie._id}
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                    <Image
                      src={movie.img}
                      alt={movie.name}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {movie._id.substring(0, 5)}...
                  </td>
                  <td className="py-4 text-[20px] px-6 font-medium whitespace-nowrap hover:text-white">
                    {movie.name}
                  </td>
                  <td className="py-4 text-[20px] px-6 font-medium whitespace-nowrap hover:text-white">
                    {movie.category}
                  </td>
                  <td className="py-4 text-[20px] px-6 font-medium whitespace-nowrap hover:text-white">
                    <button
                      className="w-[100px] h-12 bg-slate-600 rounded-2xl"
                      onClick={() => handleDelete(movie._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteMovie;
