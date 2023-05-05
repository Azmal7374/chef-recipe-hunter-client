import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import { ErrorIcon } from "react-hot-toast";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import ProfileDetails from "../pages/Profile/ProfileDetails";
import Aboutus from "../pages/Aboutus/Aboutus";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://chef-recipe-hunter-server-azmal7374.vercel.app/topChef"
          ),
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-azmal7374.vercel.app/chefData/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/profile",
        element: <ProfileDetails></ProfileDetails>
      },
      {
        path: "/aboutus",
        element: <Aboutus></Aboutus>
      }
    ],
  },
]);

export default router;
