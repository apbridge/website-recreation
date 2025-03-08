import styles from "../styles/navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import main from "../assets/main-img.jpg";
import menu from "../assets/menu-header.jpg";
import about from "../assets/about-header.jpg";
import contact from "../assets/contact.jpg";
import weddings from "../assets/weddings.jpg";
import news from "../assets/news.jpg";
import services from "../assets/services.jpg";
import logo from "../assets/main-logo.png"; 

const Navbar = () => {
  const location = useLocation();
  //add the background images
  const backgroundImages = {
    "/": `url(${main})`,
    "/about": `url(${about})`,
    "/menu": `url(${menu})`,
    "/contact": `url(${contact})`,
    "/weddings": `url(${weddings})`,
    "/news": `url(${news})`,
    "/services": `url(${services})`
  };
  //add the content that goes over top of the background images
  const pageHeaders = {
    "/": {image: logo },
    "/about": { text: "ABOUT", image: null, subText: "Naperville's locally-owned, scratch-made bakery." },
    "/menu": { text: "MENU", image: null, subText: "Sweet treats and savory eats."},
    "/contact": { text: "GET IN TOUCH", image: null, subText: "We look forward to hearing from you."},
    "/weddings": { text: "WEDDINGS", image: null, subText: "Cakes, dessert tables, and favors ... oh my!" },
    "/news": { text: "NEWS", image: null, subText: "Keep up with happenings at the bakery and beyond!"},
    "/services": { text: "SERVICES", image: null, subText: "Baked goods for every occasion." }
  };
  const backgroundImage = backgroundImages[location.pathname] || `url(${about})`;
  const pageHeader = pageHeaders[location.pathname] || {text: "Page Not Found"};
  return (
    <nav className={`${styles.navbar} ${location.pathname === "/" ? styles.homeNavbar : ""}`} style={{backgroundImage}}>
      <div className={styles.overlayContent}>
        {/* for the image to set styles*/}
        {pageHeader.image && <img src={pageHeader.image} className={styles.headerImage} />}
        {/* for the text to set styles*/}
        {pageHeader.text && <h1 className={styles.headerText}>{pageHeader.text}</h1>}
        {/* for the subtext to set styles */}
        {pageHeader.subText && <p className={styles.headerSubText}>{pageHeader.subText}</p>}
      </div>
      {/* logo */}
        <div className={styles.logo}>
            <Link to="/">DeEtta's Bakery</Link>
        </div>
      {/*  all other links */}
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