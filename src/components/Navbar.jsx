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
        <Link to="#about">About</Link>
        <Link to="#prime-location">Prime Location</Link>
        <Link to="#why-choose-ibc">Why Choose IBC</Link>
        <Link to="#surroundings">Surroundings</Link>
        <Link to="#plot-sizes">Plot Sizes</Link>
        <Link to="#infrastructure">Infrastructure</Link>
        <Link to="#in-punjab">In Punjab</Link>
        <Link to="#contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
