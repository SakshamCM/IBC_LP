import styles from "../styles/Surroundings.module.css";

let Surroundings = () => {
  return (
    <div className={styles.surroundingsBlue}>
      <div className={styles.surroundings}>
        <h4>IBC's Surroundings</h4>
        <h1>SURROUNDING AMENITIES & BUSINESS SYNERGIES</h1>
        <p className={styles.surroundingsPara}>
          IBC is surrounded by top-tier educational institutions, healthcare
          facilities, and retail centers, providing a holistic business
          environment.
        </p>
        <div className={styles.surroundingsGridSection}>
          <div>
            <img />
            <p>
              THE BIGGEST <strong>COMMERCIAL JUNCTION</strong> OF PUNJAB
            </p>
          </div>

          <div>
            <img />
            <p>
              CONNECTED TO <strong>BHARAT MALA ROAD PROJECT</strong> OF PUNJAB
            </p>
          </div>

          <div>
            <img />
            <p>
              NEXT TO <strong>EDUCATIONAL INSTITUTES</strong>
            </p>
          </div>

          <div>
            <img />
            <p>
              CONVENIENT <strong>APPROACHABILITY</strong> FROM TRICITY
            </p>
          </div>

          <div>
            <img />
            <p>
              CONNECTS TO <strong>6 MEGA CITIES</strong> OF PUNJAB
            </p>
          </div>

          <div>
            <img />
            <p>
              CONNECTS TO <strong>3 STATES</strong> OF NORTHERN INDIA
            </p>
          </div>

          <div>
            <img />
            <p>
              BEST <strong>COMMERCIAL OFFERINGS</strong> ON THE HIGHWAY
            </p>
          </div>

          <div>
            <img />
            <p>
              IN PROXIMITY TO <strong>TECH GIANTS</strong> LIKE INFOSYS
            </p>
          </div>

          <div>
            <img />
            <p>
              INSTANT CONNECTIVITY TO <strong>CHANDIGARH INTL. AIRPORT</strong>
            </p>
          </div>

          <div>
            <img />
            <p>
              CLOSER TO MULTIPLE <strong>RESIDENTIAL PROJECTS</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surroundings;
