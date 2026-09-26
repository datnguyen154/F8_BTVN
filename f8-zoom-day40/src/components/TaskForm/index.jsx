import { useEffect, useRef, useState } from "react";

import styles from "./TaskForm.module.scss";

function TaskForm({
    initialData = { title: "" },
    onSubmit,
    submitText,
    isLoading,
}) {
    const [title, setTitle] = useState(initialData.title || "");
    const [error, setError] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        setTitle(initialData.title || "");
    }, [initialData]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const trimmedTitle = title.trim();

        if (!trimmedTitle) {
            setError("Title không được để trống");
            return;
        }

        setError("");

        await onSubmit({
            title: trimmedTitle,
        });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label htmlFor="title">Title</label>

                <input
                    ref={inputRef}
                    id="title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    disabled={isLoading}
                />

                {error && <p className={styles.error}>{error}</p>}
            </div>

            <button type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : submitText}
            </button>
        </form>
    );
}

export default TaskForm;
