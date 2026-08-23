import styles from "./Users.module.scss";

const users = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        email: "user1@example.com",
        role: "User",
    },
    {
        id: 2,
        name: "Trần Văn B",
        email: "user2@example.com",
        role: "Admin",
    },
    {
        id: 3,
        name: "Lê Văn C",
        email: "user3@example.com",
        role: "User",
    },
];

function Users() {
    return (
        <div className={styles.users}>
            <h1>Quản lý Users</h1>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Họ tên</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
