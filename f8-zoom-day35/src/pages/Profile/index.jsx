import { useEffect, useState } from "react";

import styles from "./Profile.module.scss";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, []);

    if (!user) {
        return <p className={styles.loading}>Đang tải...</p>;
    }

    return (
        <div className={styles.container}>
            <h1>Profile</h1>

            <div className={styles.card}>
                <h2>{user.name}</h2>

                <dl className={styles.info}>
                    <div>
                        <dt>Username</dt>
                        <dd>{user.username}</dd>
                    </div>

                    <div>
                        <dt>Email</dt>
                        <dd>{user.email}</dd>
                    </div>

                    <div>
                        <dt>Phone</dt>
                        <dd>{user.phone}</dd>
                    </div>

                    <div>
                        <dt>Website</dt>
                        <dd>{user.website}</dd>
                    </div>

                    <div>
                        <dt>Street</dt>
                        <dd>{user.address.street}</dd>
                    </div>

                    <div>
                        <dt>City</dt>
                        <dd>{user.address.city}</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}

export default Profile;
