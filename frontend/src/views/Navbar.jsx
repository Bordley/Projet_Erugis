import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/Auth";
import jwt_decode from "jwt-decode";

function Navbar() {
  const { logoutUser } = useContext(AuthContext);

  const token = localStorage.getItem("authTokens");
  let user_id;

  if (token) {
    const decode = jwt_decode(token);
    user_id = decode.user_id;
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Ouvrir le menu principal</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to={"/"}>
                <img
                  className="h-8 w-auto"
                  src="https://i.ebayimg.com/images/g/-1EAAOSwkhJgjHii/s-l1600.png"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                {token == null ? (
                  <>
                    <Link
                      className=" text-white rounded-md px-3 py-2 text-sm font-medium active:bg-gray-900"
                      to="/login"
                    >
                      Se connecter
                    </Link>
                    <Link
                      className="text-gray-300 hover:bg-gray-700 active:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      to="/register"
                    >
                      S'inscrire
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="bg-blue-500 rounded p-1  text-white"
                      onClick={logoutUser}
                    >
                      Déconnection
                    </Link>
                    {/* Utilisation de user_id */}
                    <span className="text-white ml-2">User ID: {user_id}</span>
                  </>
                )}

                {/* <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Calendar
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
