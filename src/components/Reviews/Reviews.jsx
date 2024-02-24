import { Col, Container, Row } from "react-bootstrap";
import styles from "./Reviews.module.scss";

import StarRating from "../StarRating";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getProduct } from "../../redux/slices/productSlice";
export default function Reviews() {
  const product = useSelector((store) => store.product.currentProduct);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [product]
  );
  function handleClick(e) {
    e.preventDefault();

    dispatch(
      addReview({
        review: {
          text,
          rating,
        },
        id: product.id,
      })
    );
    dispatch(getProduct(product.id));
    toast.success("Review Submitted!");
  }
  return (
    <div className={styles.reviews}>
      <Container>
        <Row>
          <div className={styles.comments}>
            {product?.reviews?.map((review, index) => (
              <div className={styles.comment} key={index}>
                <div className={styles.name}>
                  {review.name ? review.name : "(Anonymous)"}
                </div>
                <div className={styles.rating}> {review.rating} (rating) </div>
                <p className={styles.text}>{review.text}</p>
              </div>
            ))}
          </div>
        </Row>

        <section>
          <Row>
            <Col md="12" lg="12">
              <div className={styles.commentContainer}>
                <div className={styles.wrapper}>
                  <h1 className={`${styles.title}`}>Leave your experience</h1>
                  <form className={styles.input} onSubmit={handleClick}>
                    <input placeholder="Enter name..." />
                    <div className={styles.starRating}>
                      <StarRating
                        onSetRating={setRating}
                        size={30}
                        maxRating={5}
                        fontWeight={600}
                        messages={[
                          "Terrible!",
                          "Not Bad",
                          "Okay",
                          "Great",
                          "Excellent!",
                        ]}
                      />
                    </div>
                    <textarea
                      placeholder="Review Message..."
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                    ></textarea>
                    <button className={styles.btn}>Submit</button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}
