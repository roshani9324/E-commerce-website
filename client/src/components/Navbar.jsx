import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <>
      <div className="nav sticky-top">
        <div className="nav_bar sticky-top ">
          <Link
            to={"/"}
            className="left "
            style={{ textDecoration: "none", color: "white" }}
          >
            <h3>MERN E-Commerce</h3>
          </Link>
          <form className="search_bar" onSubmit={submitHandler}>
            <span className="material-symbols-outlined">search</span>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Product..."
            />
          </form>
          <div className="right">
            <button className="btn btn-warning mx-3">cart</button>
            <button className="btn btn-warning mx-3">profile</button>
            <button className="btn btn-warning mx-3">login</button>
            <Link to={'/register'} className="btn btn-info mx-3">register</Link>
            <button className="btn btn-warning mx-3">logout</button>
          </div>
        </div>
        <div className="sub_bar"></div>
      </div>
    </>
  );
};

export default Navbar;
