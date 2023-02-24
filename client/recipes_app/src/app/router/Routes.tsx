import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import NotFound from "../components/errors/NotFound";
import ServerError from "../components/errors/ServerError";
import HomePage from "../components/homepage/HomePage";
import RegisterForm from "../components/registerForm/RegisterForm";
import LoginForm from "../components/users/LoginForm";
import App from "../App";


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