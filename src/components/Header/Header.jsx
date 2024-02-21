import styles from "./Header.module.scss";
import logo from "../../assets/images/eco-logo.png";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingBagLineIcon from "remixicon-react/ShoppingBagLineIcon";
import Heart from "remixicon-react/HeartLineIcon";
import userImg from "../../assets/images/user-icon.png";
import Menu from "remixicon-react/MenuLineIcon";
export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Row>
          <div className={styles.navWrapper}>
            <div className={styles.logo}>
              <img src={logo} alt="shop logo" />
              <div>
                <h1>Fun-riture!</h1>
                <p>
                  Since a <em>really</em> long time!
                </p>
              </div>
            </div>

            <nav className={styles.navigation}>
              <ul className={styles.menu}>
                <li className={styles.navItem}>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink to="/checkout">Checkout</NavLink>
                </li>
              </ul>
            </nav>

            <nav className={styles.navIcons}>
              <span className={styles.favIcon}>
                <Heart />
              </span>
              <span className={styles.cartIcon}>
                <ShoppingBagLineIcon />
              </span>
              <span>
                <img src={userImg} alt="user profile picture" />
              </span>
              <div className={styles.mobileMenu}>
                <Menu />
              </div>
            </nav>
          </div>
        </Row>
      </Container>
    </header>
  );
}
