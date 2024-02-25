import styles from "./Description.module.scss";
import { useSelector } from "react-redux";

export default function Description() {
  const product = useSelector((store) => store.product.currentProduct);
  return (
    <div className={styles.description}>
      <p>{product.description}</p>
    </div>
  );
}
