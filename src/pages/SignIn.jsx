import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// level 2
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [firebaseErorr, setFirebaseErorr] = useState("");
  return (
    <>
      <Helmet>
        <title>SignIn</title>
        <meta name="description" content="SignIn" />
      </Helmet>
      <Header />
      <main>
        <form>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
            placeholder="Email"
            type="email"
          />
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
            placeholder="Password"
            type="password"
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;

                  navigate("/");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;

                  setHasError(true);
                  switch (errorCode) {
                    case "auth/invalid-email":
                      setFirebaseErorr("invalid-email");
                      break;

                    case "auth/wrong-password":
                      setFirebaseErorr("invalid-password");
                      break;

                    case "auth/too-many-requests":
                      setFirebaseErorr("too many requests , try again later");
                      break;

                    default:
                      setFirebaseErorr("please check your email & password ");
                      break;
                  }
                });
            }}
          >
            Sign in
          </button>
          <p className="account">
            Don't have a account <Link to="/signup">Sign-up</Link>
          </p>
          {hasError && <span>{firebaseErorr}</span>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
