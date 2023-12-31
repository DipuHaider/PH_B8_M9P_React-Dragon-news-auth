import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('news.json'),
            },
            // {
            //     path: '/',
            //     element: <Login></Login>
            // },

        ]
    }    
]);

export default router;