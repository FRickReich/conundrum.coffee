import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserAuthContextProvider } from './context/UserAuthContext';

import pages from "./data/pages";

import "./App.scss";
import { MainLayout } from "./layouts";

const App = () =>
{
    const pageRoutes = pages.map(({ path, title, element }) =>
    {
        return <Route key={title} path={path} element={element} />;
    });

    return(
        <UserAuthContextProvider>
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        { pageRoutes }
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </UserAuthContextProvider>
    )
}

export default App;
