import React, { useMemo } from "react";

function ExpensiveChild({ items }) {
    console.log("ExpensiveChild render");

    const totalLength = useMemo(() => {
        console.log("Calculating total length...");

        let total = 0;

        items.forEach((item) => {
            total += item.name.length;
        });

        return total;
    }, [items]);

    const longestName = useMemo(() => {
        console.log("Calculating longest name...");

        let longest = "";

        items.forEach((item) => {
            for (let i = 0; i < 100000; i++) {
                if (item.name.length > longest.length) {
                    longest = item.name;
                }
            }
        });

        return longest;
    }, [items]);

    return (
        <div>
            <h2>Items</h2>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            <p>Total name length: {totalLength}</p>

            <p>Longest name: {longestName}</p>
        </div>
    );
}

export default React.memo(ExpensiveChild);
