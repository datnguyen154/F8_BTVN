import styles from "./TaskItem.module.scss";

function TaskItem({ task, onEdit, onDelete, isDeleting }) {
    const handleDelete = () => {
        const confirmed = window.confirm("Bạn có chắc muốn xóa task này?");

        if (confirmed) {
            onDelete(task.id);
        }
    };

    return (
        <div className={styles.task}>
            <span className={styles.title}>{task.title}</span>

            <div className={styles.actions}>
                <button onClick={() => onEdit(task.id)} disabled={isDeleting}>
                    Edit
                </button>

                <button onClick={handleDelete} disabled={isDeleting}>
                    {isDeleting ? "Deleting..." : "Delete"}
                </button>
            </div>
        </div>
    );
}

export default TaskItem;
