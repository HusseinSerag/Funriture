import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import styles from "./../styles/Register.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [files, setFiles] = useState(null);
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h1 className={styles.title}>Register</h1>

              <Form className={styles.authForm}>
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
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
                <FormGroup>
                  <input
                    type="file"
                    onChange={(e) => setFiles(e.target.files[0])}
                  />
                </FormGroup>
                <button className={styles.btn}>Register</button>
                <p>
                  Already have an account?{" "}
                  <Link to="/login">Login into account</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
