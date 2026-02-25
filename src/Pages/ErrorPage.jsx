import { useRouteError, Link, useNavigate } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>

          <div className="text-center">
            <p className="p-a">
              The page you were looking for could not be found.
            </p>

            <div className="btn-group">
              <button onClick={() => navigate(-1)} className="btn">
                Go Back
              </button>

              <Link to="/" className="btn btn-home">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <h1>Something went wrong!</h1>
  );
};

