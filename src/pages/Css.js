import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainContent from "../Components/MainContent";
import { Helmet } from 'react-helmet-async';

const Css = () => {
  return (
    <>

<Helmet>
        <title>Css page</title>
        <meta
      name="description"
      content="csssssssssssssss"
    />
      </Helmet>

      <Header />

      <MainContent namepage="Css" />

      <Footer />
    </>
  );
};

export default Css;
