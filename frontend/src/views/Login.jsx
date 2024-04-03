import React, { useState, useContext } from "react";
import AuthContext from "../context/Auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();

    loginUser(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Se Connecter
          </h1>

          <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placehoder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                required
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mot de passe
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placehoder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                required
                placeholder="**********"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember-me"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Se rappeler
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Mot de passe oublié
              </button>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              S'inscrire
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              vous n'avez pas un compte?{" "}
              <button
                type="button"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                S'inscrire
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
