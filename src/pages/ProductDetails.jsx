import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet, useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import products from "../assets/data/products";
import styles from "./../styles/ProductDetails.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
      })
    );

    toast.success("Product added to cart");
  }
  return (
    <div>
      <HeroSection title={product.productName} />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="mb-5">
              <div>
                <img src={product.imgUrl} />
              </div>
            </Col>
            <Col>
              <div className={styles.info}>
                <h1 className={styles.title}>{product.productName}</h1>
                <div className={styles.rating}>
                  <span>stars</span>
                  <p>({product.avgRating} rating)</p>
                </div>
                <div className={styles.priceCategory}>
                  <span className={styles.price}>${product.price}</span>
                  <span className={styles.category}>
                    Category: {product.category}
                  </span>
                </div>
                <div className={styles.desc}>
                  <p className={styles.description}>{product.description}</p>
                </div>
                <button className={styles.btn} onClick={handleClick}>
                  Add to Cart
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <div className={styles.links}>
              <NavLink
                to="description"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Description
              </NavLink>

              <NavLink
                to="reviews"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Reviews
              </NavLink>
            </div>
            <Outlet />
          </Row>
        </Container>
      </section>
    </div>
  );
}
