import React from "react";

function CounterDisplay({ count }) {
    console.log("CounterDisplay render");

    return (
        <div>
            <h2>Current count: {count}</h2>
        </div>
    );
}

export default React.memo(CounterDisplay);
