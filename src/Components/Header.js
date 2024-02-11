import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import "../Theme.css";
// level 2 //////
import { useContext } from "react";
import ThemeContexttt from "../Store/ThemeContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Config";
import { signOut } from "firebase/auth";

const Header = () => {
  // user give boolean value true or false
  // user is react-firebase-hooks not fire-base code
  const [user, loading, error] = useAuthState(auth);
  const ctx = useContext(ThemeContexttt);
  return (
    <div className="myheader">
      {/* {user && <h3>Loogedin</h3>} */}
      <header className="hide-when-mobile loai">


      
        <Link to="/">
          <h1 className="h1h1">c4a.dev</h1>
        </Link>

        <i
          onClick={() => {
            ctx.changeTheme(ctx.theme === "Dark" ? "Light" : "Dark");
          }}
          className="fa-solid fa-moon"
        ></i>
        <i
          onClick={() => {
            ctx.changeTheme(ctx.theme === "Dark" ? "Light" : "Dark");
          }}
          className="fa-solid fa-sun"
        ></i>

        <ul className="flex">
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signin">
                Sign-in
              </NavLink>
            </li>
          )}

          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signup">
                Sign-up
              </NavLink>
            </li>
          )}

          {user && (
            <li
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    console.log("Sign-out successful.");
                  })
                  .catch((error) => {
                    console.log("An error happened.");
                  });
              }}
              className="main-list"
            >
              <button className="main-link signout">Sign-out</button>
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/html">
                HTML
              </NavLink>
              <ul className="sub-ul">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">Crash Course</a>
                </li>
                <li>
                  <a href="">learn in 1h</a>
                </li>
              </ul>
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/JavaScript">
                JavaScript
              </NavLink>
              <ul className="sub-ul sub-of-js">
                <li>
                  <a href="">coming soon🔥</a>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </header>

      {/* <header className="show-when-mobile loai">
        <h1 style={{ color: "white" }}>
          <Link to="/">c4a.dev</Link>
        </h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header> */}
    </div>
  );
};

export default Header;
