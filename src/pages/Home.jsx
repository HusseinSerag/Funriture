import { Col, Container, Row } from "react-bootstrap";
import heroImg from "../assets/images/hero-img.png";
import styles from "./../styles/Home.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../components/Services/Services";
export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div>
      <section className={styles.heroSection}>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className={styles.heroContent}>
                <p className={styles.heroSubtitle}>
                  Trending Product in {year}
                </p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Suspendisse sit amet lorem et sapien vehicula pulvinar. Nam
                  finibus porttitor nisi id molestie. Maecenas in tincidunt est.
                  Vestibulum nec hendrerit ipsum. Quisque eu scelerisque ipsum.
                  Proin eu eleifend ipsum. Fusce id commodo libero. Maecenas
                  ultricies suscipit metus, vitae hendrerit odio rhoncus a. Sed
                  vestibulum ultricies massa a dapibus. Fusce congue massa urna,
                  sed pellentesque velit vulputate eget.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className={styles.btn}>
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className={styles.heroImg}>
                <img src={heroImg} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
    </div>
  );
}
