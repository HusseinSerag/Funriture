import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import products from "../assets/data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <div>
      <HeroSection />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div>
                <img src={product.imgUrl} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
