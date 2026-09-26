import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { useDispatch } from "../../libs/react-redux";

import TaskForm from "../../components/TaskForm";

import styles from "./EditTask.module.scss";

const API_URL = "http://localhost:3001/tasks";

function EditTask() {
    const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);

                if (response.status === 404) {
                    navigate("/");
                    return;
                }

                if (!response.ok) {
                    throw new Error("Không thể tải task");
                }

                const data = await response.json();

                setTask(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [id, navigate]);

    const handleSubmit = async (formData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Không thể cập nhật task");
            }

            const updatedTask = await response.json();

            dispatch({
                type: "UPDATE_TASK",
                payload: updatedTask,
            });

            navigate("/");
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className={styles.page}>
                <p>Loading task...</p>
            </div>
        );
    }

    if (!task) {
        return null;
    }

    return (
        <div className={styles.page}>
            <h1>Edit Task</h1>

            {error && <p className={styles.error}>Error: {error}</p>}

            <TaskForm
                initialData={task}
                onSubmit={handleSubmit}
                submitText="Update"
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

export default EditTask;
