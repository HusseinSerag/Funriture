import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import styles from "./../styles/Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Spinner from "../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/userSlice";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [files, setFiles] = useState(null);
  const { isLoading } = useSelector((store) => store.user);
  const { isLoading: loading } = useSelector((store) => store.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function register(e) {
    e.preventDefault();
    dispatch(registerUser({ email, password, files, username, navigate }));
  }

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h1 className={styles.title}>Register</h1>

              {isLoading || loading ? (
                <Spinner />
              ) : (
                <Form className={styles.authForm} onSubmit={register}>
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
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </FormGroup>
                  <button className={styles.btn}>Register</button>
                  <p>
                    Already have an account?{" "}
                    <Link to="/login">Login into account</Link>
                  </p>
                </Form>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
