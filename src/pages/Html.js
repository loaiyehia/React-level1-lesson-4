import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainContent from "../Components/MainContent";
import { Helmet } from 'react-helmet-async';
const Html = () => {
  return (
    <>

<Helmet>
        <title>Html page</title>
        <meta
      name="description"
      content="htmllllllllllll"
    />
      </Helmet>
      <Header />

<MainContent namepage="Html"/>

<Footer/>
    </>
  );
};

export default Html;
