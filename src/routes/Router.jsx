import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import { projectDetailLoader } from "../Projects/projectDetailLoader";
import ProjectDetail from "../Projects/ProjectDetail";

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
             {
                path: 'projects/:id', // dynamic route for project details
                loader: projectDetailLoader,
                hydrateFallbackElement: <p>error</p>,
                Component:ProjectDetail
            },
        ]
    }
])

export default Router;