import { createBrowserRouter , Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoginScreen from "./screens/LoginScreen";
import RegisterForm from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import TagsScreen from "./screens/TagsScreen";
import AboutScreen from "./screens/AboutScreen";
import Profile from "./screens/profile/profile";
import ProtLayout from "./components/layout/protLayout";
import WritePage from "./screens/WritePost";






const router = createBrowserRouter ([
    {

        path: "/" ,
        element: <Layout />,
        children: [
            { path: "/login", element: <LoginScreen /> },
            { path: "/register", element: <RegisterForm /> },
            { path: "/home", element: <HomeScreen /> , index: true },
            { path: "/Tags", element: <TagsScreen /> },
            { path: "/about", element: <AboutScreen /> },
            // { path: "/profile", element: <Profile /> },
        ],

    },
    {
        path: "*",
        element: <Navigate to="/login" replace />,
    },
    {
        index: true, // Indicates this is the default route for "/"
        element: <Navigate to="/home" replace />,
    },
    {

        path: "/" ,
        element: <ProtLayout />,
        children: [
            { path: "/profile", element: <Profile /> , index: true },
            { path: "/WritePost", element: <WritePage /> , index: true },

        ],

    },

]);

export default router;
