import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import { ErrorIcon } from "react-hot-toast";
import ErrorPage from "../pages/Errorpage/ErrorPage";
 

const router =createBrowserRouter([
   {
    path:'/',
    errorElement:<ErrorPage></ErrorPage>,
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
    ]
   }
]);

export default router;
