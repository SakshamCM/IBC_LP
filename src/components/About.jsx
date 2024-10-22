import styles from "../styles/About.module.css";
import BlueButton from "./BlueButton";

let About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.imageSection}>
        <div>
          <img />
          <img />
        </div>
        <img className={styles.bigImage} />
      </div>
      <div className={styles.contentSection}>
        <h4>About Us</h4>
        <h1>WELCOME TO INDIA BUSINESS CENTER</h1>
        <p className={styles.aboutDesc}>
          IBC is a visionary development designed to transform the commercial
          landscape of Punjab. Located at the most pivotal junction in the
          state, it offers investors an opportunity to secure plots in India's
          first Smart Industrial Integrated Township—a gateway to the future of
          business in one of India's most rapidly growing regions.
        </p>

        <p className={styles.aboutDesc}>
          IBC is more than just a commercial hub—it's a strategic initiative
          that aligns infrastructure with innovation. Offering businesses
          world-class facilities, seamless connectivity, and future-proof
          technology, IBC is the launchpad for Punjab's economic growth.
        </p>
        <div className={styles.flexContent}>
          <div>
            <div className={styles.yellowLine}></div>
            <p>Streategically Located</p>
          </div>
          <div>
            <div className={styles.yellowLine}></div>
            <p>Smart Infrastructure</p>
          </div>
          <div>
            <div className={styles.yellowLine}></div>
            <p>Future Ready Solutions</p>
          </div>
        </div>
        <BlueButton text={"Download Brochure"} />
      </div>
    </div>
  );
};

export default About;
