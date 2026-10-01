import { Navigate, Route, Routes } from "react-router";

import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

import Loading from "./components/Loading";

function App() {
    return (
        <>
            <Loading />

            <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />

                <Route path="/products" element={<ProductList />} />

                <Route path="/products/:slug" element={<ProductDetail />} />
            </Routes>
        </>
    );
}

export default App;
