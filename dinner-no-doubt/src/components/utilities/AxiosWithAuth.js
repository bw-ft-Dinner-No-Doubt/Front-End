import React from "react";
import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  // return an instance of axios
  return axios.create({
    baseURL: "https://dinner-no-doubt.herokuapp.com/",
    headers: {
      authorization: token
    }
  });
};
