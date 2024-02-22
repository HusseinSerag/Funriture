import styles from "./Header.module.scss";

import { Container, Row } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ShoppingBagLineIcon from "remixicon-react/ShoppingBagLineIcon";
import Heart from "remixicon-react/HeartLineIcon";
import userImg from "../../assets/images/user-icon.png";
import Menu from "remixicon-react/MenuLineIcon";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";
import { useRef } from "react";
import { useSelector } from "react-redux";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

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
    path: "/cart",
    display: "Cart",
  },
];
export default function Header() {
  const menuRef = useRef(null);
  const cartLength = useSelector((store) => store.cart.cart.length);
  const navigate = useNavigate();
  const currentUser = useSelector((store) => store.user.currentUser);
  function toggleMenu() {
    menuRef.current.classList.toggle("active");
  }
  const profileActionsRef = useRef();
  function logout() {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }
  function toggleActions() {
    profileActionsRef.current.classList.toggle("show");
  }
  return (
    <header className={styles.header}>
      <Container>
        <Row>
          <div className={styles.navWrapper}>
            <Logo />

            <nav
              className={styles.navigation}
              ref={menuRef}
              onClick={toggleMenu}
            >
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
              <span
                className={styles.cartIcon}
                onClick={() => navigate("/cart")}
              >
                <ShoppingBagLineIcon className={styles.icon} />
                {cartLength > 0 && (
                  <span className={styles.badge}>{cartLength}</span>
                )}
              </span>
              <div className={styles.profile} onClick={toggleActions}>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser.displayName ? currentUser.photoURL : userImg}
                  alt="user profile picture"
                />
                <div className={styles.actions} ref={profileActionsRef}>
                  {currentUser.displayName ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div>
                      <Link to="/register">Register</Link>
                      <Link to="/login">Login</Link>{" "}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.mobileMenu} onClick={toggleMenu}>
                <Menu />
              </div>
            </nav>
          </div>
        </Row>
      </Container>
    </header>
  );
}
