import { useState } from "react";
import { useNavigate } from "react-router";

import { useDispatch } from "../../libs/react-redux";

import TaskForm from "../../components/TaskForm";

import styles from "./NewTask.module.scss";

const API_URL = "http://localhost:3001/tasks";

function NewTask() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (formData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Không thể tạo task mới");
            }

            const newTask = await response.json();

            dispatch({
                type: "ADD_TASK",
                payload: newTask,
            });

            navigate("/");
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.page}>
            <h1>Create New Task</h1>

            {error && <p className={styles.error}>Error: {error}</p>}

            <TaskForm
                initialData={{ title: "" }}
                onSubmit={handleSubmit}
                submitText="Create"
                isLoading={isSubmitting}
            />

            <button
                className={styles.cancel}
                onClick={() => navigate("/")}
                disabled={isSubmitting}
            >
                Cancel
            </button>
        </div>
    );
}

export default NewTask;
