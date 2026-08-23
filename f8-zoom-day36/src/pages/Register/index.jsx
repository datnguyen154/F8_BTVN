import { useState } from "react";
import styles from "./Register.module.scss";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            name,
            email,
            password,
        });
    };

    return (
        <div className={styles.register}>
            <h1>Đăng ký</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Họ tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Tạo tài khoản</button>
            </form>
        </div>
    );
}

export default Register;
