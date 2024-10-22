import styles from "../styles/InPunjab.module.css";
import BlueButton from "./BlueButton";

let InPunjab = () => {
  return (
    <>
      <div className={styles.primeLocationBlue}>
        <div className={styles.primeLocation}>
          <div className={styles.imageSection}>
            <img className={styles.bigImage} />
          </div>
          <div className={styles.contentSection}>
            <h4>IBC in Punjab</h4>
            <h1>GATEWAY TO PUNJAB'S GROWTH</h1>
            <p className={styles.aboutDesc}>
              IBC is Punjab's rst entry point, providing businesses with
              unmatched access to regional markets and resources. Its strategic
              position at a major junction makes it the top choice for investors
              looking to capture the region's growth potential.
            </p>
            <p className={styles.aboutDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              odio deleniti adipisci accusantium perferendis minima itaque quod
              aliquam impedit totam?
            </p>
            <div className={styles.flexContent}>
              <div>
                <h3>Punjab's Entry Point: Unmatched visibility</h3>
              </div>
              <div>
                <h3>
                  Connectivity Advantage: Linked to Bharatmala Road Project
                </h3>
              </div>
              <div>
                <h3>
                  Economic Hub: Attracting growing businesses and startups
                </h3>
              </div>
            </div>
            <BlueButton text={"Download Brochure"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InPunjab;
