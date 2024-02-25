import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "./../styles/Checkout.module.scss";
import { useSelector } from "react-redux";
export default function Checkout() {
  const { cart } = useSelector((store) => store.user.currentUser);
  const subTotal = cart.reduce((previous, current) => {
    return previous + current.price * current.quantity;
  }, 0);

  const quantity = cart.reduce(
    (previous, current) => previous + current.quantity,
    0
  );
  return (
    <div>
      <HeroSection title="Checkout" />
      <section className={styles.billing}>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className={styles.form}>
                <FormGroup>
                  <input type="text" placeholder="Enter your name..." />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder="Enter your email..." />
                </FormGroup>
                <FormGroup>
                  <input
                    type="number"
                    placeholder="Enter your phone number..."
                  />
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder="Enter your Address..." />
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder="Postal Code" />
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className={styles.checkout}>
                <h3>
                  Total Qty: <span>{quantity} item/s</span>
                </h3>
                <h3>
                  Subtotal: <span>${subTotal}</span>
                </h3>
                <h3>
                  <span>
                    Shipping:
                    <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h3>

                <h1>
                  Total Cost: <span>${subTotal}</span>
                </h1>
              </div>
              <button className={styles.btn}>Place an order</button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
