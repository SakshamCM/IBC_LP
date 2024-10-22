import styles from "../styles/WhyChooseUs.module.css";
import BlueButton from "./BlueButton";

let WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseUs}>
      <h4 className={styles.whyChooseShortHeading}>Why Choose Us</h4>
      <h1>INDIA'S FIRST SMART INDUSTRIAL INTEGRATED TOWNSHIP</h1>
      <p className={styles.smallDesc}>
        IBC offers unmatched advantages, providing businesses with a prime
        location and innovative infrastructure for sustained growth.
      </p>

      <div className={styles.whyChooseUsGrid}>
        <div>
          <img />
          <h4>Cutting-Edge Infrastructure</h4>
          <p>Smart facilities, high-speed internet, sustainable energy</p>
        </div>
        <div>
          <img />
          <h4>Future-Ready Environment</h4>
          <p>Scalable business spaces for long-term growth</p>
        </div>
        <div>
          <img />
          <h4>Seamless Connectivity</h4>
          <p>Linked to national highways through Bharatmala Project</p>
        </div>
      </div>
      <BlueButton text={"View Brouchure"} />
    </div>
  );
};

export default WhyChooseUs;
