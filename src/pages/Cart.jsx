import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Cart() {
  return (
    <div>
      <HeroSection title="Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              <table className={`table bordered`}>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
              </table>
            </Col>
            <Col lg="3"></Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
