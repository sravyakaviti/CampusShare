import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Home from "./pages/Home"
import Single from "./pages/Single"
import User from "./pages/User"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import React, {  useContext } from "react";
import { AuthContext } from "./context/authContext";
import "./style.css"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
      {
        path: "/user",
        element: <User />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/single",
    element: <Single />,
  },
]);

const router2 = createBrowserRouter([
 
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  const { currentUser} = useContext(AuthContext);
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
        {/* <RouterProvider router={router2} /> */}
      </div>
    </div>
  );
}

export default App;


