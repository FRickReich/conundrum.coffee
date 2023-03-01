import { routerType } from "../types/router.types";

import {
    Home,
    About
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
    }
];

export default pages;
