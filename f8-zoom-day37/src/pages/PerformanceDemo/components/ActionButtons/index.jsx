import React from "react";

function ActionButtons({ onIncrement, onReset }) {
    console.log("ActionButtons render");

    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default React.memo(ActionButtons);
