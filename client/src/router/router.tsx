import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../components/Layout";
import Plans from "../pages/Plans";
import Generator from "../pages/Generator";
import Result from "../pages/Result";
import MyGeneration from "../pages/MyGeneration";
import Community from "../pages/Community";
import Loading from "../pages/Loading";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/plans",
                element: <Plans />
            },
            {
                path: "/community",
                element: <Community />
            },
            {
                path: "/generate",
                element: <Generator />
            },
            {
                path: "/result/:projectId",
                element: <Result />
            },
            {
                path: "/my-generations",
                element: <MyGeneration />
            },
            {
                path: "/loading",
                element: <Loading />
            },
        ]
    },
]);



export default router