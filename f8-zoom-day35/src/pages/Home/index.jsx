import { Link } from "react-router";
function Home() {
    return (
        <div>
            <h1>Chào mừng đến với F8 React Day 35</h1>
            <ul>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/todo">Todo</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/comments">Comments</Link>
                </li>
                <li>
                    <Link to="/weather">Weather</Link>
                </li>
                <li>
                    <Link to="/buttons">Buttons</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
