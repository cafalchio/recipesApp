import React from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import RegisterForm from '../../components/RegisterForm';
import App from '../../components/App'
import NotFound from "../../components/NotFound";
import ServerError from "../../components/ServerError";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
        //     {
        //         element: <RequireAuth />,
        //         children: [{ path: "dashboard", element: <DashboardPage /> }],
        //     },
        //     { path: "callback", element: <CallbackPage /> },
            { path: "not-found", element: <NotFound /> },
            { path: "server-error", element: <ServerError /> },
            { path: "*", element: <Navigate replace to="/not-found" /> },
        //     {
        //         path: "get-task-status/:encodedId",
        //         element: <GetTaskStatus />,
        //     },
        ],
    },
    {
        path: "register-user",
        element: <RegisterForm />,
    },
];

export const router = createBrowserRouter(routes);