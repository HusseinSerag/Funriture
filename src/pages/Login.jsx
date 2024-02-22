import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import styles from "./../styles/Login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h1 className={styles.title}>Login</h1>

              <Form className={styles.authForm}>
                <FormGroup>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <button className={styles.btn}>Login</button>
                <p>
                  Don&apos;t have an account?{" "}
                  <Link to="/register">Create an account</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
