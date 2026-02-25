/* eslint-disable react/prop-types */
import { NavLink, useLoaderData } from "react-router-dom";
import "./MovieDetails.css";

export const MovieDetails = () => {
  const movieData = useLoaderData();

  // ✅ Handle undefined or API error
  if (!movieData || movieData.Response === "False") {
    return (
      <div className="error-container">
        <h2>Movie not found 😔</h2>
        <NavLink to="/movie" className="back-btn">
          Go Back
        </NavLink>
      </div>
    );
  }

  const {
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    Awards,
    imdbRating,
    Actors,
  } = movieData;

  // ✅ Safe Runtime Formatting
  let formattedTime = "N/A";

  if (Runtime && Runtime !== "N/A") {
    const totalMinutes = parseInt(Runtime.replace("min", "").trim());

    if (!isNaN(totalMinutes)) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      formattedTime = `${hours}hr ${minutes}min`;
    }
  }

  return (
    <section className="details-section">
      <div className="details-container">
        {/* Poster */}
        <div className="details-image">
          <img
            src={Poster !== "N/A" ? Poster : "/no-image.png"}
            alt={Title}
          />
        </div>

        {/* Content */}
        <div className="details-content">
          <h1>{Title}</h1>

          <p><strong>Type:</strong> {Type}</p>
          <p><strong>Year:</strong> {Year}</p>
          <p><strong>Genre:</strong> {Genre}</p>
          <p><strong>Actors:</strong> {Actors}</p>
          <p><strong>Awards:</strong> {Awards}</p>

          <div className="details-info">
            <p>⭐ Rating: {imdbRating !== "N/A" ? imdbRating : "Not Rated"}</p>
            <p>⏱ Runtime: {formattedTime}</p>
            <p>💰 Box Office: {BoxOffice !== "N/A" ? BoxOffice : "Not Available"}</p>
          </div>

          <p className="plot">{Plot}</p>

          <NavLink to="/movie" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};