import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import styles from "./../styles/Login.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function login(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all the fields");
      return;
    }
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(
        setUser({
          currentUser: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
          },
          status: "Logged",
        })
      );
      toast.success("Successfully logged in");
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h1 className={styles.title}>Login</h1>

              <Form className={styles.authForm} onSubmit={login}>
                {loading ? (
                  <Spinner />
                ) : (
                  <>
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
                  </>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
