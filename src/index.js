import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Html from "./pages/Html"
import Css from "./pages/Css"
import JavaScript from "./pages/JavaScript"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<h1 style={{color:"red"}}>Sorry!!!!!</h1>
  },
  {
    path: "/html",
    element: <Html/>,
  },
  {
    path: "/css",
    element: <Css/>,
  
  },
  {
    path: "/javascript",
    element: <JavaScript/>,

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
);


