import { Route, Routes } from "react-router-dom";
import { Home, Properties, PropertyDetail, PublicLayout } from "./pages/public";
import path from "./ultils/path";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
                    <Route path={path.HOME} element={<Home />} />
                    <Route path={path.PROPERTIES} element={<Properties />} />
                    <Route
                        path={path.PROPERTYDETAIL}
                        element={<PropertyDetail />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
