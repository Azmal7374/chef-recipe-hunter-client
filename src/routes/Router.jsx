import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import { ErrorIcon } from "react-hot-toast";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
 

const router =createBrowserRouter([
   {
    path:'/',
    errorElement:<ErrorPage></ErrorPage>,
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('http://localhost:5000/topChef')
        },
        {
        path:'chef/:id',
        element:<ChefDetails></ChefDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/chefData/${params.id}`)
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
