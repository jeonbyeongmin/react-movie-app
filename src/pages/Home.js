import React from "react";
import { useQuery } from "react-query";
import { getMovies } from "../api/movieAPI";
import Movie from "../components/Movie";

function Home() {
  const { status, data } = useQuery(["movies"], () => getMovies());

  return (
    <div>
      {status === "loading" ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {data.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
