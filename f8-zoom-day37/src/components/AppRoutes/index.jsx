import { Routes, Route } from "react-router";

import DefaultLayout from "../../layouts/DefaultLayout";

import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import ModalDemo from "../../pages/ModalDemo";
import ScrollDemo from "../../pages/ScrollDemo";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route index element={<Home />} />

                <Route path="profile" element={<Profile />} />

                <Route path="modal-demo" element={<ModalDemo />} />

                <Route path="scroll-demo" element={<ScrollDemo />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
