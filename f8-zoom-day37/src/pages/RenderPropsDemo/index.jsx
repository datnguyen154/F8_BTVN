import DataFetcher from "../../components/DataFetcher";

import styles from "./RenderPropsDemo.module.scss";

function RenderPropsDemo() {
    return (
        <div className={styles.page}>
            <h1>Render Props Demo</h1>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
                        {({ data, loading, error }) => {
                            if (loading) {
                                return <p>Loading posts...</p>;
                            }

                            if (error) {
                                return <p>Error: {error}</p>;
                            }

                            return (
                                <div>
                                    <h2>Posts</h2>

                                    {data?.map((post) => (
                                        <div
                                            className={styles.item}
                                            key={post.id}
                                        >
                                            {post.title}
                                        </div>
                                    ))}
                                </div>
                            );
                        }}
                    </DataFetcher>
                </div>

                <div className={styles.card}>
                    <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
                        {({ data, loading, error }) => {
                            if (loading) {
                                return <p>Loading users...</p>;
                            }

                            if (error) {
                                return <p>Error: {error}</p>;
                            }

                            return (
                                <div>
                                    <h2>Users</h2>

                                    {data?.map((user) => (
                                        <div
                                            className={styles.item}
                                            key={user.id}
                                        >
                                            <strong>{user.name}</strong>
                                            <span>{user.email}</span>
                                        </div>
                                    ))}
                                </div>
                            );
                        }}
                    </DataFetcher>
                </div>
            </div>
        </div>
    );
}

export default RenderPropsDemo;
