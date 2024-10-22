import styles from "../styles/PrimeLocation.module.css";
import WhiteButton from "./WhiteButton";

let PrimeLocation = () => {
  return (
    <>
      <div className={styles.primeLocationBlue}>
        <div className={styles.primeLocation}>
          <div className={styles.imageSection}>
            <img className={styles.bigImage} />
          </div>
          <div className={styles.contentSection}>
            <h4>Prime Location</h4>
            <h1>IBC'S PRIME LOCATION A STRATEGIC ADVANTAGE</h1>
            <p className={styles.aboutDesc}>
              IBC's location on IT Road, just 11 km from the airport and 6 km
              from Airport Chowk, ensures seamless national and international
              business connectivity.
            </p>
            <p className={styles.aboutDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              odio deleniti adipisci accusantium perferendis minima itaque quod
              aliquam impedit totam?
            </p>
            <div className={styles.flexContent}>
              <div>
                <h3>IT Road Connectivity:</h3>
                <p>Links to Mohali and Chandigarh</p>
              </div>
              <div>
                <h3>Major Transportation Hub:</h3>
                <p>Connects to the region's key business areas</p>
              </div>
              <div>
                <h3>Proximity to Chandigarh International Airport (11 km)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimeLocation;
