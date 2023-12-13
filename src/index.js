import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  
  Link,
} from "react-router-dom";
// import Route from './route';
// import TotalDetails from './components/totalDetails';
// import Order from './components/order';
// import Auth from './components/auth';
// import Navi from './components/nav';
// import AddItem from './components/addItem';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Route/>,
//     children: [
//       {
//         path:"order",
//         element:<Order/>
//       },
//       {
//         path:"totalDetails",
//         element:<TotalDetails/>
//       },
//       {
//         path:"addItem",
//         element:<AddItem/>
//       }
//     ]
//   }
 
// ])

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>

);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
