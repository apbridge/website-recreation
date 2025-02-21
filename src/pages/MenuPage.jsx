import Wrapper from "../components/Wrapper";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import rollingpins from "../assets/rolling-pin-wall.jpg";

const MenuPage = () => {

  return (
    <Wrapper>
      <div>
        <h2>Menu</h2>
        <p>This is the menu page.</p>
      </div>
    </Wrapper>
  );
};

export default MenuPage;