import { useContext, useEffect, useState } from "react";
import styles from "../styles/PopupForm.module.css";
import { AuthContext } from "../context/AuthContentProvider";
import close from "../assets/closeWhite.png";
import logo from "../logo.svg";

let PopupForm = () => {
  let [showForm, setShowForm] = useContext(AuthContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let FormHandler = () => {};
  return (
    <div
      className={`${styles.popupFormParent} ${
        showForm ? styles.showForm : null
      }`}
    >
      <div className={styles.form}>
        <div className={styles.closeDiv}>
          <img className={styles.close} src={close} onClick={() => setShowForm(false)}/>
        </div>
        <img src={logo} className={styles.logo} />
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          iure suscipit quibusdam autem, eos dolorem?
        </p>
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
  );
};

export default PopupForm;
