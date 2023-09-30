import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/Home.jsx';
import About from './component/about/About.jsx';
import Contact from './component/contact/Contact.jsx';
import Users from './component/users/Users.jsx';
import UserDetails from './component/userDetails/UserDetails.jsx';
import ErrorHandle from './component/errorPage/ErrorHandle.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorHandle></ErrorHandle>,
    children:[
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path: "/users",
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path: "/user/:userId",
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
