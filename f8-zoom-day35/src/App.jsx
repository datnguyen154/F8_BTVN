import { Route, Routes } from "react-router";

import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Comments from "./pages/Comments";
import Weather from "./pages/Weather";
import Buttons from "./pages/Buttons";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/products" element={<Products />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/buttons" element={<Buttons />} />
            </Routes>
        </>
    );
}

export default App;
