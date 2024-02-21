import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "../styles/Shop.module.scss";
import { categories } from "../assets/data/products";
import SearchIcon from "remixicon-react/SearchLineIcon";
const options = categories.map((category) => (
  <option key={category} value={category}>
    {category}
  </option>
));
export default function Shop() {
  return (
    <div>
      <HeroSection title={"Products"} />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className={styles.filter}>
                <select>
                  <option>Filter by Category</option>
                  {options}
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className={styles.filter}>
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="dscending">Dscending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className={styles.searchBox}>
                <input type="text" placeholder="Search..." />
                <div className={styles.iconContainer}>
                  <SearchIcon />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
