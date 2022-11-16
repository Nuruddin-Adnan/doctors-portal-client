import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Login from "../../Pages/Auth/Login/Login";
import Registration from "../../Pages/Auth/Registration/Registration";
import Home from "../../Pages/Home/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Pages/Appoinment/Appointment/Appointment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
        ]
    }
])

export default router;