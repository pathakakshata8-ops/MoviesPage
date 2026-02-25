import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();

  return (
    <section className="movie-section">
      <div className="container">
        <ul className="movie-grid">
          {moviesData &&
            moviesData.Search.map((curMovie) => (
              <Card key={curMovie.imdbID} curMovie={curMovie} />
            ))}
        </ul>
      </div>
    </section>
  );
};