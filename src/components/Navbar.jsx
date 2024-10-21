import styles from "../styles/Navbar.module.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoDiv}>
        <img src={logo} />
      </div>
      <div className={styles.optionsDiv}>
        <Link to="about">About</Link>
        <Link to="services">Services</Link>
        <Link to="portfolio">Portfolio</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
