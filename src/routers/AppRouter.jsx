import { createBrowserRouter, Navigate } from "react-router-dom"
import Layout from "~/client/Layout/Layout"
import Category from "~/client/Pages/Categories/Category"
import Home from "~/client/Pages/Home/Home"
import Login from "~/client/Pages/Authentication/Login"
import NotFound from "~/client/Pages/NotFound/NotFound"
import Post from "~/client/Pages/Post/Post"
import Logout from "~/client/Pages/Authentication/Logout"
import UtilPage from "~/client/Pages/UtilPage/UtilPage"
import ProtectRouter from "./ProtectRouter"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectRouter>
            <Layout />
        </ProtectRouter>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/util',
                exact: true,
                element: <UtilPage />
            },
            {
                path: '/:slug',
                element: <Category />
            },
            {
                path: '/:category/:post',
                element: <Post />
            },
            {
                path: '/notfound',
                element: <NotFound />
            },
            {
                path: '*',
                element: <Navigate to="/notfound" />
            }
        ]
    },
    {
        path: '/dang-nhap',
        element: <Login />
    },
    {
        path: '/logout',
        element: <Logout />
    },
]);


export { Router }
