import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";

const AppState = (props) => {
  const url = "http://localhost:1000/api";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/all`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      console.log(api.data.products);
      setProducts(api.data.products);
    };
    fetchProduct();
  }, []);

  //register user
  const register = async (name, email, password) => {
    const api = await axios.post(
      `${url}/user/register`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    //alert(api.data.message)
    console.log("user register", api);
  };

  return (
    <AppContext.Provider value={{ products, register }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
