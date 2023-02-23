import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import RegisterForm from '../../components/RegisterForm';
import App from '../../components/App'
import NotFound from "../../components/NotFound";
import ServerError from "../../components/ServerError";
import LoginForm from '../../components/users/LoginForm';
import HomePage from '../../components/homepage/HomePage';

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