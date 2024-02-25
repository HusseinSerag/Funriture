import styles from "./ProductCard.module.scss";
import AddToList from "remixicon-react/AddLineIcon";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import Star from "remixicon-react/StarFillIcon";
export default function ProductCard({ item }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("Product added to cart");
  }
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className={styles.card}>
        <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} />
        <div className={`${styles.info} p-2`}>
          <h3 className={styles.name}>
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
          <div className={styles.productRating}>
            <Star size={20} className={styles.icon} /> {item.avgRating}
          </div>
        </div>
        <div
          className={`${styles.bottom} d-flex align-items-center justify-content-between p-2`}
        >
          <span className={styles.price}>${item.price}</span>

          <motion.div
            whileTap={{ scale: 1.2 }}
            className={styles.iconContainer}
            onClick={() => handleClick()}
          >
            <AddToList />
          </motion.div>
        </div>
      </div>
    </Col>
  );
}
