import styles from "../styles/Infrastructure.module.css";
import WhiteButton from "./WhiteButton";

let Infrastructure = () => {
  return (
    <>
      <div className={styles.primeLocationBlue}>
        <div className={styles.primeLocation}>
          <div className={styles.imageSection}>
            <img className={styles.bigImage} />
          </div>
          <div className={styles.contentSection}>
            <h4>IBC's Infrastructure</h4>
            <h1>LEADING WITH SMART INFRASTRUCTURE</h1>
            <p className={styles.aboutDesc}>
              IBC's infrastructure is designed for efciency and sustainability,
              incorporating modern facilities to support cutting-edge business
              operations.
            </p>
            <p className={styles.aboutDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              odio deleniti adipisci accusantium perferendis minima itaque quod
              aliquam impedit totam?
            </p>
            <div className={styles.flexContent}>
              <div>
                <img />
              </div>
              <div>
                <img />
              </div>
              <div>
                <img />
              </div>
              <div>
                <img />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
