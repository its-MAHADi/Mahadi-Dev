import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

 const Router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        errorElement:<p>error</p>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
        ]
    }
])

export default Router;