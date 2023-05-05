import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log(user.photoUrl);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {
        console.log(error.message);
      });
  };

  return (
    <div className="my-container sticky top-0 z-30">
      <div className="navbar bg-slate-100">
        <a className="btn btn-ghost normal-case text-2xl font-bold">
          {" "}
          Foodie Crush
        </a>
        <div className="ml-4 md:ml-32">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-8 bg-base-100 rounded-md  w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>

              {user ? (
                <li className="mt-2" title={user.displayName}>
                  <NavLink
                    onClick={handleLogOut}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              ) : (
                <li className="mt-2">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              )}
              <li className="mt-2">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Register
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="mt-2">
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "active" : "default"
                }
              >
                AboutUs
              </NavLink>
            </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4">
            <li className="mr-6">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>

            {user ? (
              <li className="ml-4" title={user.displayName}>
                <NavLink
                  onClick={handleLogOut}
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
            <li className="ml-4 ">
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Register
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li className="ml-4">
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "active" : "default"
              }
            >
              AboutUs
            </NavLink>
          </li>
          </ul>
        </div>
        <div className="navbar-end">
        {user && (
         <Link to='profile'>
         <p  title={user.displayName} className=" ">
         <img
           className="w-10 h-10 md:w-16 md:h-16 border rounded-full"
           src={user.photoURL}
           alt=""
         />
       </p>
         </Link>
        )}
        </div>
      </div>
    </div>
  );
};

export default Header;
