import "./Card.css";
import { NavLink } from "react-router-dom";

export const Card = ({ curMovie }) => {
  return (
    <li className="movie-card">
      <div className="card-image">
        <img
          src={curMovie.Poster !== "N/A" ? curMovie.Poster : "/no-image.png"}
          alt={curMovie.Title}
        />
      </div>

      <div className="card-footer">
        <NavLink
          to={`/movie/${curMovie.imdbID}`}
          className="watch-btn"
        >
          WATCH NOW
        </NavLink>
      </div>
    </li>
  );
};