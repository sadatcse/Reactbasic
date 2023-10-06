import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './componenents/root';
import Home from './componenents/Home';
import Login from './componenents/Login';
import Registration from './componenents/Registration';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/Registration',
        element:<Registration></Registration>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
