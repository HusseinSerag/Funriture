import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet, useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import products from "../assets/data/products";
import styles from "./../styles/ProductDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import ProductList from "../components/ProductList/ProductList";
import { motion } from "framer-motion";
import StarFilled from "remixicon-react/StarFillIcon";
import StarLined from "remixicon-react/StarLineIcon";
import { useEffect } from "react";
import { getProduct } from "../redux/slices/productSlice";
import SpinnerFullPage from "../components/SpinnerFullPage/SpinnerFullPage";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    products,
    currentProduct: product,
    isLoading,
    error,
  } = useSelector((store) => store.product);
  useEffect(
    function () {
      dispatch(getProduct(id));
    },
    [id]
  );

  if (isLoading) {
    return <SpinnerFullPage />;
  }
  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  const filteredProducts = products.filter(
    (productCat) => productCat.category === product.category
  );

  const length = Math.floor(product?.avgRating);
  const filled = Array.from({ length: length || 0 }, (_, i) => (
    <StarFilled key={i} className={styles.icon} size={20} />
  ));
  const notFilled = Array.from({ length: 5 - length || 0 }, (_, i) => (
    <StarLined key={i} className={styles.icon} size={20} />
  ));

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
                  <span>
                    {filled}
                    {notFilled}
                  </span>
                  <p>({product.avgRating} rating)</p>
                </div>
                <div className={styles.priceCategory}>
                  <span className={styles.price}>${product.price}</span>
                  <span className={styles.category}>
                    Category: {product.category}
                  </span>
                </div>
                <div className={styles.desc}>
                  <p className={styles.description}>{product.shortDesc}</p>
                </div>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className={styles.btn}
                  onClick={handleClick}
                >
                  Add to Cart
                </motion.button>
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
                Reviews ({product?.reviews?.length})
              </NavLink>
            </div>
            <Outlet />
          </Row>
        </Container>
      </section>
      <section className={styles.recommended}>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">You might also Like</h2>
            </Col>
            <ProductList products={filteredProducts} />
          </Row>
        </Container>
      </section>
    </div>
  );
}
