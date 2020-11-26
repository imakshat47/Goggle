import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Apps } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
function Home(props) {
  return (
    <div className="home">
      {/* Header */}
      <div className="home_header">
        <div className="header_left">
          {/* Links */}
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="header_right">
          {/* Scoial Link */}
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <Apps />
          <Avatar />
        </div>
      </div>
      {/* Body  */}
      <div className="home_body">
        <img
          src="https://parqor.com/wp-content/uploads/2020/09/1004px-Google_22G22_Logo.svg.png"
          alt="Goggle"
        />
        <h1>Goggle</h1>
        <div className="input_container">
          <SearchBar />
        </div>
      </div>
      {/* Footer  */}
      <div className="home_footer"></div>
    </div>
  );
}

export default Home;
