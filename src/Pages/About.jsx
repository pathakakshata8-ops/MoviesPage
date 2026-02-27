import "./About.css";

export const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1 className="about-heading">About Movies Page</h1>

        <div className="about-box">
          <h3>🎬 Movies Page Project</h3>
          <p>
            Movies Page is a React-based web application that fetches
            real-time movie data using the OMDB API.
          </p>

          <p>
            This project demonstrates modern React concepts including:
          </p>

          <ul className="about-list">
            <li>✔ React Router with dynamic routing</li>
            <li>✔ Loader functions for API data fetching</li>
            <li>✔ Reusable Card components</li>
            <li>✔ Responsive Grid layout</li>
            <li>✔ Clean UI design</li>
          </ul>

          <p>
            Users can browse movies, view posters, and explore movie
            information dynamically fetched from the API.
          </p>
        </div>
      </div>
    </section>
  );
};