import styles from "../styles/Banner.module.css";
import banner from "../assets/banner2.jpg";
import { useState, useEffect, useRef } from "react";
import BlueButton from "./BlueButton";

let Banner = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let FormHandler = () => {};

  let aboutRef = useRef(null);
  let [isFirstView, setIsFirstView] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFirstView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div
      id="home"
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${banner})`,
      }}
    >
      <div className={styles.bannerMain} ref={aboutRef}>
        <div
          className={`${styles.bannerContentSection} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
        >
          <h1>
            <span>IBC:</span> Building Tomorrow's Community Today
          </h1>
          <p>
            IBC is dedicated to creating thriving, sustainable townships that
            blend modern living with community values, offering residents a
            harmonious environment where innovation, connectivity, and quality
            of life flourish.
          </p>
          <BlueButton text={"Enquire Now"} />
        </div>
        <div
          className={`${styles.bannerFormSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <h3>Download Brochure Now</h3>
          <form onSubmit={FormHandler}>
            <div>
              <input
                placeholder="Your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                placeholder="Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
