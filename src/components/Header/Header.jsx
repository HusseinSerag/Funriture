import styles from "./Header.module.scss";
import logo from "../../assets/images/eco-logo.png";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingBagLineIcon from "remixicon-react/ShoppingBagLineIcon";
import Heart from "remixicon-react/HeartLineIcon";
import userImg from "../../assets/images/user-icon.png";
import Menu from "remixicon-react/MenuLineIcon";
import { motion } from "framer-motion";

const links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/shop",
    display: "Shop",
  },
  {
    path: "/checkout",
    display: "Checkout",
  },
];
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
                {links.map((link) => (
                  <li className={styles.navItem} key={link.path}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive ? styles.active : ""
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className={styles.navIcons}>
              <span className={styles.favIcon}>
                <Heart className={styles.icon} />
                <span className={styles.badge}>1</span>
              </span>
              <span className={styles.cartIcon}>
                <ShoppingBagLineIcon className={styles.icon} />
                <span className={styles.badge}>1</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userImg}
                  alt="user profile picture"
                />
              </span>
            </nav>
            <div className={styles.mobileMenu}>
              <Menu />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}
