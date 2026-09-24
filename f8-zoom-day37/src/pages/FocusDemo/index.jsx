import { useRef, useState, useEffect } from "react";

import CustomInput from "../../components/CustomInput";

import styles from "./FocusDemo.module.scss";

function FocusDemo() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;

        console.log("Render count:", renderCount.current);
    });
    const handleFocusInput1 = () => {
        input1Ref.current.focus();
    };

    const handleFocusInput2 = () => {
        input2Ref.current.focus();
    };

    const handleClearBoth = () => {
        setValue1("");
        setValue2("");
    };

    const handleGetValues = () => {
        const input1Value = input1Ref.current.getValue();
        const input2Value = input2Ref.current.getValue();

        alert(`Input 1: ${input1Value}\nInput 2: ${input2Value}`);
    };

    return (
        <div className={styles.wrapper}>
            <h1>Focus Demo</h1>

            <div className={styles.inputs}>
                <CustomInput
                    ref={input1Ref}
                    label="Input 1"
                    placeholder="Enter input 1..."
                    value={value1}
                    onChange={(event) => setValue1(event.target.value)}
                />

                <CustomInput
                    ref={input2Ref}
                    label="Input 2"
                    placeholder="Enter input 2..."
                    value={value2}
                    onChange={(event) => setValue2(event.target.value)}
                />
            </div>

            <div className={styles.actions}>
                <button onClick={handleFocusInput1}>Focus Input 1</button>

                <button onClick={handleFocusInput2}>Focus Input 2</button>

                <button onClick={handleClearBoth}>Clear Both</button>

                <button onClick={handleGetValues}>Get Values</button>
            </div>
        </div>
    );
}

export default FocusDemo;
