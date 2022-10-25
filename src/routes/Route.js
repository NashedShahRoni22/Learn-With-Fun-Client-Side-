import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Checkout from "../pages/Checkout/Checkout";
import Courses from "../pages/Courses/Courses";
import CoursesDetails from "../pages/CoursesDetails/CoursesDetails";
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
                path:'/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
        ]
    }
])