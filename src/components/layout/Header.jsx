import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="section-navbar">
      
      {/* Top Strip */}
      <section className="top_txt">
        <div className="head container">
          <div className="head_txt">
            <p>I am Rishant Maurya</p>
          </div>
          <div className="sing_in_up">
            <NavLink to="/login">SIGN IN</NavLink>
            <NavLink to="/signup">SIGN UP</NavLink>
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" end>
            <p>RM</p>
          </NavLink>
        </div>

        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/movie">
                Movie
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};