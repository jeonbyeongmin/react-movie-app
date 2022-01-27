import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovie } from "../api/movieAPI";

function Detail() {
  const { id } = useParams();
  const { status, data } = useQuery(["movie", id], () => getMovie(id));

  console.log(status);

  return (
    <div>
      {status === "loading" ? (
        "Loading..."
      ) : (
        <div>
          <img src={data.large_cover_image} alt={data.title} />
          <h1>{data.title_long}</h1>
          <p>{data.description_full}</p>
          <ul>
            {data.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
