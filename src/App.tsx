import { BrowserRouter } from "react-router-dom";

import Router from "./Pages/router";

import "./App.scss";

const App = () =>
{
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App;
