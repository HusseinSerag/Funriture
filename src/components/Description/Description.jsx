import { useParams } from "react-router-dom";
import styles from "./Description.module.scss";
import products from "../../assets/data/products";

export default function Description() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  return (
    <div className={styles.description}>
      <p>{product.description}</p>
    </div>
  );
}
