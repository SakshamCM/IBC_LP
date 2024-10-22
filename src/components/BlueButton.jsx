import styles from "../styles/BlueButton.module.css";

let BlueButton = (props) => {
  let { text } = props;
  return <button className={styles.blueButton}>{text}</button>;
};

export default BlueButton;
