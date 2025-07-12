import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
const Header = () => {
  console.log("Header rendered");
  const [btnName, setBtnName] = useState("Login");
  // if no dependency array is passed, useEffect will run after every render
  useEffect(() => {
    console.log("useEffect called");
  },);
  // if an empty array is passed, useEffect will run only once after the initial render
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  // if a dependency array with [btnName] is passed, useEffect will  run/called everytime [btnName ]changes 
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);
//kept the 3 useEffect hooks to demonstrate the different behaviors of useEffect with and without dependencies.

  return (
    <div className="header">
      <img
        className="logo"
        src={LOGO_URL}
        alt="Namaste React Logo"
      />
      <div className="nav-items">
        <ul>
          

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;  