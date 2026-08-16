import { useState } from "react";

import styles from "./Counter.module.scss";

function Counter() {
    const [value, setValue] = useState(0);

    const getStatus = () => {
        if (value > 0) {
            return {
                text: "Dương",
                className: styles.positive,
            };
        }

        if (value < 0) {
            return {
                text: "Âm",
                className: styles.negative,
            };
        }

        return {
            text: "Bằng không",
            className: styles.zero,
        };
    };

    const status = getStatus();

    return (
        <div className={styles.container}>
            <h1>Counter App</h1>

            <h2 className={`${styles.value} ${status.className}`}>{value}</h2>

            <div className={`${styles.status} ${status.className}`}>
                {status.text}
            </div>

            <div className={styles.buttons}>
                <button
                    className={styles.increase}
                    onClick={() => setValue(value + 1)}
                >
                    Tăng
                </button>

                <button
                    className={styles.decrease}
                    onClick={() => setValue(value - 1)}
                >
                    Giảm
                </button>

                <button className={styles.reset} onClick={() => setValue(0)}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;
