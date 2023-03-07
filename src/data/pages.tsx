import { routerType } from "../types/router.types";

import {
    Home,
    About,
    Editor
} from "../pages";

const pages: routerType[] =
[
    {
        path: "/",
        element: <Home />,
        title: "home"
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
    }
];

export default pages;
