import { useState } from "react";
import styles from "./Login.module.scss";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            email,
            password,
        });
    };

    return (
        <div className={styles.login}>
            <h1>Đăng nhập</h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="password">Mật khẩu</label>

                    <input
                        id="password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
}

export default Login;
