import styles from "../styles/Footer.module.css";
import logo from "../logo.svg";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

let Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <img src={logo} className={styles.logo} />
          <p>
            IBC is a visionary development designed to transform the commercial
            landscape of Punjab. Located at the most pivotal junction in the
            state, it offers investors an opportunity to secure plots in India's
            first Smart Industrial Integrated Township—a gateway to the future
            of business in one of India's most rapidly growing regions.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <a href="#1">Link 1</a>
          <a href="#2">Link 2</a>
          <a href="#3">Link 3</a>
          <a href="#4">Link 4</a>
          <a href="#5">Link 5</a>
        </div>
        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <div>
            <img src={location} />
            <p>Address</p>
          </div>
          <div>
            <img src={phone} />
            <p>Mobile Number</p>
          </div>
          <div>
            <img src={mail} />
            <p>Email</p>
          </div>
        </div>
        <div>
          <h3>Follow Us On</h3>
          <p>
            Follow Us On Our Social Media handles to always stay updated with
            us.
          </p>
          <div className={styles.socialDiv}>
            <a href="/">
              <div className={styles.socialIcon}>
                <img src={facebook} />
              </div>
            </a>
            <a href="/">
              <div className={styles.socialIcon}>
                <img src={instagram} />
              </div>
            </a>
            <a href="/">
              <div className={styles.socialIcon}>
                <img src={linkedin} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
