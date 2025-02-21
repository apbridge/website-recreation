import Wrapper from "../components/Wrapper";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import rollingpins from "../assets/rolling-pin-wall.jpg";

const HomePage = () => {

  return (
    <Wrapper>
      <div>
        <h2>Home</h2>
        <p>This is the home page.</p>
      </div>
    </Wrapper>
  );
};

export default HomePage;