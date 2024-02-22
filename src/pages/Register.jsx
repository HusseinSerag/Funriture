import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import styles from "./../styles/Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth } from "../firebase";
import { storage, db } from "../firebase";

import { setDoc, doc } from "firebase/firestore";

import { toast } from "react-toastify";
import Spinner from "../components/Spinner/Spinner";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    if (!email || !password || !username) {
      toast.error("Please fill in all the fields!");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, files);
      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateProfile(user, {
              //update user's profile
              displayName: username,
              photoURL: downloadURL,
            }).then(() => {
              setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName: username,
                email,
                photoURL: downloadURL,
                cart: [],
              });
            });

            //store user in db
          });
        }
      );
      toast.success("Successfully registered!");
      navigate("/login");
    } catch (err) {
      toast.error("Something went wrong!");
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
              <h1 className={styles.title}>Register</h1>

              {loading ? (
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
