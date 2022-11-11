import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Login from "../../Pages/Auth/Login/Login";
import Registration from "../../Pages/Auth/Registration/Registration";
import Home from "../../Pages/Home/Home/Home";

import { createBrowserRouter } from "react-router-dom";

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
        ]
    }
])

export default router;