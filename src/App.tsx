import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routerType } from "./types/router.types";

import pages from "./data/pages";

import "./App.scss";

const App = () =>
{
    const pageRoutes = pages.map(({ path, title, element } : routerType) =>
    {
        return <Route key={title} path={path} element={element} />;
    });

    return(
        <BrowserRouter>
            <Routes>
                { pageRoutes }
            </Routes>
        </BrowserRouter>
    )
}

export default App;
