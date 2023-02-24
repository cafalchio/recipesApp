import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import NotFound from "../components/errors/NotFound";
import ServerError from "../components/errors/ServerError";
import HomePage from "../components/homepage/HomePage";
import App from "../App";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";


export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/home", element: <HomePage />},
            { path: "/login", element: <LoginForm />},
            {path: "/register", element: <RegisterForm />},
            { path: "/not-found", element: <NotFound /> },
            { path: "/server-error", element: <ServerError /> },
            { path: "*", element: <Navigate replace to="/not-found" /> },
        ],
    },
    {
        path: "register-user", element: <RegisterForm />,
    },
];

export const router = createBrowserRouter(routes);