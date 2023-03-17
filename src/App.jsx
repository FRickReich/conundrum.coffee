import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserAuthContextProvider } from './context/UserAuthContext';
import { DatabaseProvider } from "./context/DatabaseContext";

import pages from "./data/pages";

import "./App.scss";
import { HeaderBar } from "./components";

const App = () =>
{
    const pageRoutes = pages.map(({ path, title, element }) =>
    {
        return <Route key={title} path={path} element={element} />;
    });

    return(
        <DatabaseProvider>
            <UserAuthContextProvider>
                <BrowserRouter>
                    <HeaderBar/>
                    <Routes>
                        { pageRoutes }
                    </Routes>
                </BrowserRouter>
            </UserAuthContextProvider>
        </DatabaseProvider>
    )
}

export default App;
