import { useState } from "react";
import styles from "./Todo.module.scss";

let uniqId = 0;

function TodoApp() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const completedCount = todos.filter((todo) => todo.completed).length;
    const remainingCount = todos.length - completedCount;

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim()) {
            setTodos([
                ...todos,
                {
                    id: ++uniqId,
                    text: inputValue,
                    completed: false,
                },
            ]);

            setInputValue("");
        }
    };

    return (
        <div className={styles.container}>
            <h1>Todo List</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Nhập task mới..."
                />

                <button type="submit">Thêm</button>
            </form>

            {todos.length === 0 ? (
                <p className={styles.empty}>
                    Chưa có task nào. Hãy thêm task đầu tiên!
                </p>
            ) : (
                <ul className={styles.todoList}>
                    {todos.map((todo) => (
                        <li
                            className={`${styles.task} ${
                                todo.completed ? styles.completed : ""
                            }`}
                            key={todo.id}
                        >
                            <input
                                id={`todo-${todo.id}`}
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => {
                                    setTodos(
                                        todos.map((item) =>
                                            item.id === todo.id
                                                ? {
                                                      ...item,
                                                      completed:
                                                          !item.completed,
                                                  }
                                                : item,
                                        ),
                                    );
                                }}
                            />

                            <label htmlFor={`todo-${todo.id}`}>
                                {todo.text}
                            </label>
                        </li>
                    ))}
                </ul>
            )}

            <div className={styles.stats}>
                <span>Tổng: {todos.length}</span>
                <span>Hoàn thành: {completedCount}</span>
                <span>Còn lại: {remainingCount}</span>
            </div>

            <button
                className={styles.clearButton}
                onClick={() => setTodos([])}
                disabled={todos.length === 0}
            >
                Xóa tất cả
            </button>
        </div>
    );
}

export default TodoApp;
