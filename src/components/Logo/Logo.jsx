import styles from "./Logo.module.scss";
import logo from "../../assets/images/eco-logo.png";
import { useNavigate } from "react-router-dom";
export default function Logo() {
  const navigate = useNavigate();
  return (
    <div className={styles.logo} onClick={() => navigate("/")}>
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
