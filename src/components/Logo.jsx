import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/login">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo}></img>
    </Link>
  );
}

export default Logo;
