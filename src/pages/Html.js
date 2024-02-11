import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainContent from "../Components/MainContent";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Config";

const Html = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
useEffect(() => {
  if (!user) {
    navigate("/");
  }
})

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
