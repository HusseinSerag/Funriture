import { Col, Container, Row } from "react-bootstrap";
import styles from "./Reviews.module.scss";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import StarRating from "../StarRating";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function Reviews() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [product]
  );
  function handleClick() {
    toast.success("Review Submitted!");
  }
  return (
    <div className={styles.reviews}>
      <Container>
        <Row>
          <div className={styles.comments}>
            {product.reviews.map((review, index) => (
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
                  <div className={styles.input}>
                    <input placeholder="Enter name..." />
                    <div className={styles.starRating}>
                      <StarRating
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
                    <textarea placeholder="Review Message..."></textarea>
                  </div>

                  <button className={styles.btn} onClick={handleClick}>
                    Submit
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}
