import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainContent from "../Components/MainContent";
import { Helmet } from "react-helmet-async";

const Home = () => {
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
      <MainContent namepage="Home" desginer="Desgined By Loai Yehia" />
      <Footer />
    </>
  );
};

export default Home;
