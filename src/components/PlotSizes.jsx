import styles from "../styles/PlotSizes.module.css";
import BlueButton from "./BlueButton";

let PlotSizes = () => {
  return (
    <>
      <div className={styles.primeLocationBlue}>
        <div className={styles.primeLocation}>
          <div className={styles.imageSection}>
            <img className={styles.bigImage} />
          </div>
          <div className={styles.contentSection}>
            <h4>Plot Sizes</h4>
            <h1>FLEXIBLE & SCALABLE PLOT SIZES</h1>
            <p className={styles.aboutDesc}>
              Ibc offers customizable plot sizes to meet the needs of
              businesses, whether small startups or large corporations. Scale
              your space as your business grows
            </p>
            <p className={styles.aboutDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              odio deleniti adipisci accusantium perferendis minima itaque quod
              aliquam impedit totam?
            </p>
            <div className={styles.flexContent}>
              <div>
                <h3>Small to large customizable plots</h3>
              </div>
              <div>
                <h3>
                  Ideal for SMEs, large corporations, and co-working spaces
                </h3>
              </div>
              <div>
                <h3>
                  Future development plans include green spaces & recreational
                  facilities
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

export default PlotSizes;
