import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainContent from "../Components/MainContent";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Config";
import { Link } from "react-router-dom";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="homeeeeeeeeeeeeeeeee" />
        <style type="text/css">{`
        h1 {
            color: red;
        }
    `}</style>
      </Helmet>

      <Header />
      {user && (
        <MainContent namepage="Home" desginer="Desgined By Loai Yehia" />
      )}
      {!user && (
        <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue... 🧡
          </p>
        </main>
      )}

      <Footer />
    </>
  );
};

export default Home;
