import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "./../styles/Cart.module.scss";
import Delete from "remixicon-react/DeleteBin2LineIcon";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { removeItem } from "../redux/slices/userSlice";
export default function Cart() {
  // const { cart } = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user.currentUser.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleDelete(item) {
    dispatch(removeItem(item));
  }
  const subTotal = user?.reduce((previous, current) => {
    return previous + current.price * current.quantity;
  }, 0);
  return (
    <div>
      <HeroSection title="Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {user.length === 0 ? (
                <h1 className={styles.empty}>No items in the cart!</h1>
              ) : (
                <table className={`table bordered ${styles.table}`}>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img className={styles.img} src={item.imgUrl} />
                        </td>
                        <td
                          onClick={() => navigate(`/shop/${item.id}`)}
                          className={styles.title}
                        >
                          {item.productName}
                        </td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <motion.td
                          whileTap={{ scale: 1.2 }}
                          onClick={() => handleDelete(item)}
                          className={styles.delete}
                        >
                          <Delete />
                        </motion.td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div className={styles.subtotal}>
                <h6>Subtotal</h6>
                <span className={styles.amount}>${subTotal}</span>
              </div>
              <p className={styles.text}>
                taxes and shipping will be calculated on checkout
              </p>
              <div className={styles.btns}>
                <button>
                  <Link to="/shop">Continue Shopping</Link>
                </button>
                <button>
                  <Link to={subTotal > 0 ? "/checkout" : "/shop"}>
                    {subTotal > 0 ? "Checkout" : "Go shopping!!!"}
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
