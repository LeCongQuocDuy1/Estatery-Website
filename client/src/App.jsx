import { Route, Routes } from "react-router-dom";
import {
    Home,
    Properties,
    PropertyDetail,
    PublicLayout,
    Buy,
    Rent,
    Sell,
    ManageProperty,
    Resource,
} from "./pages/public";
import path from "./ultils/path";
import { Modal } from "./components";
import { useAppStore } from "~/store/useAppStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const { isShowModal } = useAppStore();

    return (
        <div className="relative">
            <ToastContainer />
            {isShowModal && <Modal />}
            <Routes>
                <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
                    <Route path={path.HOME} element={<Home />} />
                    <Route path={path.PROPERTIES} element={<Properties />} />
                    <Route path={path.RENT} element={<Rent />} />
                    <Route path={path.BUY} element={<Buy />} />
                    <Route path={path.SELL} element={<Sell />} />
                    <Route
                        path={path.MANAGE_PROPERTY}
                        element={<ManageProperty />}
                    />
                    <Route path={path.RESOURCES} element={<Resource />} />
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
