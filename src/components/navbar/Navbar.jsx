import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">SheikhBooking</span>
        </Link>
        {user ? (
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="username">{user.username}</span>
            <button onClick={handleClick}>Log Out</button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">
              <NavLink
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Register
              </NavLink>
            </button>
            <button className="navButton">
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </NavLink>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
