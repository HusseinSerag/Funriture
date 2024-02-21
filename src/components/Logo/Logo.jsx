import styles from "./Logo.module.scss";
import logo from "../../assets/images/eco-logo.png";
export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="shop logo" />
      <div>
        <h1>Fun-riture!</h1>
        <p>
          Since a <em>really</em> long time!
        </p>
      </div>
    </div>
  );
}
