import { Col, Container, Row } from "react-bootstrap";
import styles from "./Services.module.scss";
import serviceData from "../../assets/data/serviceData";
import Truck from "remixicon-react/TruckLineIcon";
import Refresh from "remixicon-react/RefreshLineIcon";
import Payment from "remixicon-react/SecurePaymentLineIcon";
import Exchange from "remixicon-react/ExchangeDollarLineIcon";
import { motion } from "framer-motion";
const SIZE = 36;
const icons = [
  <Truck key={1} size={SIZE} />,
  <Refresh key={2} size={SIZE} />,
  <Payment key={3} size={SIZE} />,
  <Exchange key={4} size={SIZE} />,
];
export default function Services() {
  return (
    <section className={styles.services}>
      <Container>
        <Row>
          {serviceData.map((data, index) => (
            <Col lg="3" md="4" className="mb-4" key={data.title}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={styles.serviceItem}
                style={{ backgroundColor: data.bg }}
              >
                <div className={styles.iconContainer}>{icons.at(index)}</div>
                <div className={styles.serviceInfo}>
                  <h3>{data.title}</h3>
                  <p>{data.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
