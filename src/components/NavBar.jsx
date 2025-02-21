import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Link to="/">DeEtta's Bakery</Link>
        </div>
      <ul className={styles.navLinks}>
        <li>
        <Link to="/about">ABOUT</Link>
        </li>
        <li>
        <Link to="/menu">MENU</Link>
        </li>
        <li>
        <Link to="/contact">GET IN TOUCH</Link>
        </li>
        <li>
        <Link to="/weddings">WEDDINGS</Link>
        </li>
        <li>
        <Link to="/news">NEWS</Link>
        </li>
        <li>
        <Link to="/services">SERVICES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;