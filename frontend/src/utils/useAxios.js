import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/Auth";

const baseURL = "http://127.0.0.1:8000/api";

const useAxios = () => {
  const { authToken, setAuthToken, setUser } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: authToken ? `Bearer ${authToken.access}` : null },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    if (!authToken) {
      return req; // Pas de token, autoriser la requête sans token
    }

    try {
      const decodedToken = jwt_decode(authToken.access);

      if (!decodedToken || dayjs.unix(decodedToken.exp).diff(dayjs()) < 1) {
        // Token expiré ou malformé
        throw new Error("Invalid or expired token");
      }

      return req; // Token valide, autoriser la requête avec le token
    } catch (error) {
      console.error("Error decoding token:", error);
      // Gérer l'erreur de token ici
      // Par exemple, actualiser le token ou déconnecter l'utilisateur
      setAuthToken(null);
      setUser(null);
      return Promise.reject(error); // Rejeter la requête avec une erreur
    }
  });

  return axiosInstance;
};

export default useAxios;


