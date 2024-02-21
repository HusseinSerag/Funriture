import { Container } from "react-bootstrap";
import styles from "./HeroSection.module.scss";

export default function HeroSection({ title }) {
  return (
    <section className={styles.section}>
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
}
