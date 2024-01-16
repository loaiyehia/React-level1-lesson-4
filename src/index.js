import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//     errorElement:<h1 style={{color:"red"}}>Sorry!!!!!</h1>
//   },
//   {
//     path: "/html",
//     element: <Html/>,
//   },
//   {
//     path: "/css",
//     element: <Css/>,
  
//   },
//   {
//     path: "/javascript",
//     element: <JavaScript/>,

//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<App />
    </BrowserRouter>
  </React.StrictMode>
);


