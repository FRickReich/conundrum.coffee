import { ProtectedRoute } from "../components";

import {
    Home,
    SignUp,
    About,
    Editor,
    Login,
    Dashboard,
    Projects
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
        title: 'Your Projects'
    },
    {
        path: "/about",
        element: <About />,
        title: "about"
    },
    {
        path: "/editor",
        element: <Editor />,
        title: 'editor'
    },
    {
        path: "/:username",
        element: <Dashboard />,
        title: "user"
    }
];

export default pages;
