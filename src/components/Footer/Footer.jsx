import styles from "./Footer.module.scss";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import PhoneIcon from "remixicon-react/PhoneFillIcon";
import MailIcon from "remixicon-react/MailLineIcon";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg="4" className="d-flex flex-column gap-3" md="6">
            <h1>Fun-riture!</h1>
            <p className={`${styles.text} mt-4`}>
              Suspendisse sit amet lorem et sapien vehicula pulvinar. Nam
              finibus porttitor nisi id molestie. Maecenas in tincidunt est.
              Vestibulum nec hendrerit ipsum. Quisque eu scelerisque ipsum.
              Proin eu eleifend ipsum. Fusce id commodo libero.
            </p>
          </Col>
          <Col lg="3" md="3">
            <div className={styles.quickLinks}>
              <h1 className={styles.linksTitle}>Top Categories</h1>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3">
            <div className={styles.quickLinks}>
              <h1 className={styles.linksTitle}>Useful Links</h1>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className={styles.quickLinks}>
              <h1 className={styles.linksTitle}>Contact</h1>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <div className={styles.iconContainer}>
                    <MapPinLineIcon />
                  </div>
                  <p>123 anywhere street , Europe</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <div className={styles.iconContainer}>
                    <PhoneIcon />
                  </div>
                  <p>+33-485-394</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <div className={styles.iconContainer}>
                    <MailIcon />
                  </div>
                  <p>anywhere@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className={styles.copyright}>
              {" "}
              copyright &copy; 2024. Developed by Hussein Serageldin
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
