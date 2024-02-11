import { Link } from "react-router-dom";
import { React, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [firebaseErorr, setFirebaseErorr] = useState("");

  return (
    <>
      <Helmet>
        <title>SignUp</title>
        <meta name="description" content="SignUp" />
      </Helmet>
      <Header />
      <main>
        <form>
          <p style={{ fontSize: "23px", marginBottom: "22px" }}>
            Creat a new Account <span>🧡</span>
          </p>
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
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
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

                  // ..
                });
            }}
          >
            Sign up
          </button>
          <p className="account">
            Already have a account <Link to="/signin">Sign-in</Link>
          </p>
          {hasError && <p>{firebaseErorr}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
