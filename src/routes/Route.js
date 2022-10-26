import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Blog from "../pages/Blog/Blog";
import Checkout from "../pages/Checkout/Checkout";
import Courses from "../pages/Courses/Courses";
import CoursesDetails from "../pages/CoursesDetails/CoursesDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/courses",
                element:<Courses></Courses>,
                loader: ()=> fetch('http://localhost:5000/courses'),
            },
            {
                path:"/courses/:id",
                element:<CoursesDetails></CoursesDetails>,
                loader:({params})=> fetch(`http://localhost:5000/courses/${params.id}`),
            },
            {
                path:'/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/checkout/${params.id}`),
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/faq',
                element: <FAQ></FAQ>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'*',
                element: <ErrorPage></ErrorPage>
            },
        ]
    }
])