


import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainContent from '../Components/MainContent';
import { Helmet } from 'react-helmet-async';
const JavaScript = () => {
  return (
    <>
    <Helmet>
        <title>JavaScript page</title>
        <meta
      name="description"
      content="javaaaaaascript"
    />
            <style type="text/css">{`
        h1 {
            color: pink;
            font-size:33px;
        }
    `}</style>
      </Helmet>
<Header/>

<h1>yehiaaaaaaaaaaaaaa</h1>
<MainContent namepage="JavaScript"/>

<Footer/>
  </>
  );
}

export default JavaScript;
