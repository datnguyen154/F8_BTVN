import { useState, useCallback } from "react";

import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";

function PerformanceDemo() {
    console.log("PerformanceDemo render");

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Dat");
    const [items, setItems] = useState([
        {
            id: 1,
            name: "React",
        },
    ]);

    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    const handleChangeName = () => {
        setName((prevName) => (prevName === "Dat" ? "F8" : "Dat"));
    };

    const handleAddItem = () => {
        const newItem = {
            id: Date.now(),
            name: `Item ${items.length + 1}`,
        };

        setItems([...items, newItem]);
    };

    return (
        <div>
            <h1>Performance Demo</h1>

            <p>Name: {name}</p>

            <button onClick={handleChangeName}>Change Name</button>

            <button onClick={handleAddItem}>Add Item</button>

            <CounterDisplay count={count} />

            <ActionButtons
                onIncrement={handleIncrement}
                onReset={handleReset}
            />

            <ExpensiveChild items={items} />
        </div>
    );
}

export default PerformanceDemo;
