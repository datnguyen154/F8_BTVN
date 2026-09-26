import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useDispatch, useSelector } from "../../libs/react-redux";

import TaskItem from "../../components/TaskItem";

import styles from "./TaskList.module.scss";

const API_URL = "http://localhost:3001/tasks";

function TaskList() {
    console.log("TaskList render");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            dispatch({
                type: "SET_LOADING",
                payload: true,
            });

            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Không thể tải danh sách tasks");
                }

                const data = await response.json();

                dispatch({
                    type: "SET_TASKS",
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: "SET_ERROR",
                    payload: error.message,
                });
            }
        };

        fetchTasks();
    }, [dispatch]);

    const handleEdit = (id) => {
        navigate(`/${id}/edit`);
    };

    const handleDelete = async (id) => {
        setDeletingId(id);

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Không thể xóa task");
            }

            dispatch({
                type: "DELETE_TASK",
                payload: id,
            });
        } catch (error) {
            dispatch({
                type: "SET_ERROR",
                payload: error.message,
            });
        } finally {
            setDeletingId(null);
        }
    };

    if (loading) {
        return (
            <div className={styles.page}>
                <p>Loading tasks...</p>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1>Task Management</h1>

                <button onClick={() => navigate("/new-task")}>
                    Create New Task
                </button>
            </div>

            {error && <p className={styles.error}>Error: {error}</p>}

            {!error && tasks.length === 0 && <p>Chưa có task nào</p>}

            <div className={styles.list}>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        isDeleting={deletingId === task.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
