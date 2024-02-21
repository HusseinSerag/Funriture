import { Col, Container, Row } from "react-bootstrap";
import heroImg from "../assets/images/hero-img.png";
import styles from "./../styles/Home.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../components/Services/Services";
import ProductList from "../components/ProductList/ProductList";
import counterImg from "../assets/images/counter-timer-img.png";
import products from "../assets/data/products";
import Clock from "../components/Clock/Clock";
export default function Home() {
  const year = new Date().getFullYear();

  const filteredProducts = products.filter((item) => item.category === "chair");
  const bestSellerProducts = products.filter(
    (item) => item.category === "sofa"
  );
  const mobileProducts = products.filter((item) => item.category === "mobile");
  const wirelessProducts = products.filter(
    (item) => item.category === "wireless"
  );
  const popularProducts = products.filter((item) => item.category === "watch");
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
      <section className={styles.trendingProducts}>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList products={filteredProducts} />
          </Row>
        </Container>
      </section>
      <section className={styles.bestSeller}>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList products={bestSellerProducts} />
          </Row>
        </Container>
      </section>
      <section className={styles.timerContainer}>
        <Container>
          <Row>
            <Col lg="6" md="6" className={styles.clock}>
              <div className={styles.clockContent}>
                <h4 className="text-white fs-5 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-3 mb-3">Quality Arm Chair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className={styles.limitedBtn}
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-center">
              <div className={styles.counterImg}>
                <img src={counterImg} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.newArrivals}>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductList products={mobileProducts} />
            <ProductList products={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className={styles.popularCategory}>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Popular in Category</h2>
            </Col>
            <ProductList products={popularProducts} />
          </Row>
        </Container>
      </section>
    </div>
  );
}
