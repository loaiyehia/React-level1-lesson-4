import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainContent from "../Components/MainContent";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Config";
const JavaScript = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  return (
    <>
      <Helmet>
        <title>JavaScript page</title>
        <meta name="description" content="javaaaaaascript" />
        <style type="text/css">{`
        h1 {
            color: pink;
            font-size:33px;
        }
    `}</style>
      </Helmet>
      <Header />

      <MainContent namepage="JavaScript" />

      <Footer />
    </>
  );
};

export default JavaScript;
