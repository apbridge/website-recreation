import Wrapper from "../components/Wrapper";
import { useState } from "react";
import styles from "../styles/menu.module.css";
import Special from "../components/Special";
import Cakes from "../components/Cakes";
import Cupcakes from "../components/Cupcakes";
import Breads from "../components/Breads";
import Pastries from "../components/Pastries";
import Morning from "../components/Morning";
import Cookies from "../components/Cookies";
import Pies from "../components/Pies";
import Drinks from "../components/Drinks";
import Menu from "../components/Menu";


const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("specials");
  return (
    <Wrapper>
      <div className="section1">
        {/* Navigation for selecting categories */}
        <nav className={styles.menuNav}>
          <button className={selectedCategory === "specials" ? styles.active : ""} onClick={() => setSelectedCategory("specials")}>Special Offerings</button>
          <button className={selectedCategory === "cakes" ? styles.active : ""} onClick={() => setSelectedCategory("cakes")}>Cakes</button>
          <button className={selectedCategory === "cupcakes" ? styles.active : ""} onClick={() => setSelectedCategory("cupcakes")}>Cupcakes</button>
          <button className={selectedCategory === "breads" ? styles.active : ""} onClick={() => setSelectedCategory("breads")}>Breads</button>
          <button className={selectedCategory === "pastries" ? styles.active : ""} onClick={() => setSelectedCategory("pastries")}>Pastries</button>
          <button className={selectedCategory === "morning" ? styles.active : ""} onClick={() => setSelectedCategory("morning")}>Morning Pastries</button>
          <button className={selectedCategory === "cookies-bars" ? styles.active : ""} onClick={() => setSelectedCategory("cookies-bars")}>Cookies/Bars</button>
          <button className={selectedCategory === "pies" ? styles.active : ""} onClick={() => setSelectedCategory("pies")}>Pies</button>
          <button className={selectedCategory === "drinks" ? styles.active : ""} onClick={() => setSelectedCategory("drinks")}>Drinks</button>
        </nav>
        {/* Conditionally render the selected category */}
        <div className={styles.menuContent}>
          {selectedCategory === "specials" && <Special />}
          {selectedCategory === "cakes" && <Cakes />}
          {selectedCategory === "cupcakes" && <Cupcakes />}
          {selectedCategory === "breads" && <Breads />}
          {selectedCategory === "pastries" && <Pastries />}
          {selectedCategory === "morning" && <Morning />}
          {selectedCategory === "cookies-bars" && <Cookies />}
          {selectedCategory === "pies" && <Pies />}
          {selectedCategory === "drinks" && <Drinks />}
        </div>
      </div>
      <Menu/>
    </Wrapper>
  );
};

export default MenuPage;