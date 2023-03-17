import { ProtectedRoute } from "../components";

import {
    Home,
    SignUp,
    Editor,
    Login,
    Dashboard,
    Projects,
    CreateProject
} from "../pages";

const pages =
[
    {
        path: "/",
        element: <Home />,
        title: "home"
    },
    {
        path: '/signup',
        element: <SignUp />,
        title: 'Sign Up'
    },
    {
        path: '/login',
        element: <Login />,
        title: 'Login'
    },
    {
        path: '/projects',
        element: <ProtectedRoute><Projects /></ProtectedRoute>,
        title: 'Your-projects'
    },
    {
        path: "/:username",
        element: <Dashboard />,
        title: "user"
    },
    {
        path: "/:username/create-project",
        element: <ProtectedRoute><CreateProject/></ProtectedRoute>,
        title: "create-project"
    },
    {
        path: "/:username/:project",
        element: <Editor />,
        title: "project-view"
    }
];

export default pages;
