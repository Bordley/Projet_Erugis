import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/Auth";
import Dashboard from "../views/Dashboard";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);

  return <>{!user ? <Navigate to={"/login"} /> : <Dashboard />}</>;
};

export default PrivateRoute;
