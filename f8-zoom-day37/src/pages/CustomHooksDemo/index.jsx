import useApi from "../../hooks/useApi";
import useToggle from "../../hooks/useToggle";

import styles from "./CustomHooksDemo.module.scss";

function CustomHooksDemo() {
    const postsApi = useApi(
        "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );

    const usersApi = useApi(
        "https://jsonplaceholder.typicode.com/users?_limit=5",
    );

    const [showPosts, togglePosts] = useToggle(true);
    const [showUsers, toggleUsers] = useToggle(true);
    const [darkMode, toggleDarkMode] = useToggle(false);

    return (
        <div className={`${styles.page} ${darkMode ? styles.dark : ""}`}>
            <h1>Custom Hooks Demo</h1>

            <div className={styles.actions}>
                <button onClick={togglePosts}>
                    {showPosts ? "Hide Posts" : "Show Posts"}
                </button>

                <button onClick={toggleUsers}>
                    {showUsers ? "Hide Users" : "Show Users"}
                </button>

                <button onClick={toggleDarkMode}>
                    {darkMode ? "Light Theme" : "Dark Theme"}
                </button>
            </div>

            <div className={styles.grid}>
                {showPosts && (
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h2>Posts</h2>

                            <button onClick={postsApi.refetch}>
                                Refetch Posts
                            </button>
                        </div>

                        {postsApi.loading && <p>Loading posts...</p>}

                        {postsApi.error && <p>Error: {postsApi.error}</p>}

                        {!postsApi.loading &&
                            !postsApi.error &&
                            postsApi.data?.map((post) => (
                                <div className={styles.item} key={post.id}>
                                    {post.title}
                                </div>
                            ))}
                    </div>
                )}

                {showUsers && (
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h2>Users</h2>

                            <button onClick={usersApi.refetch}>
                                Refetch Users
                            </button>
                        </div>

                        {usersApi.loading && <p>Loading users...</p>}

                        {usersApi.error && <p>Error: {usersApi.error}</p>}

                        {!usersApi.loading &&
                            !usersApi.error &&
                            usersApi.data?.map((user) => (
                                <div className={styles.item} key={user.id}>
                                    <strong>{user.name}</strong>
                                    <span>{user.email}</span>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomHooksDemo;
