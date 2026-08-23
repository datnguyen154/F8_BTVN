import { useState } from "react";
import styles from "./Settings.module.scss";

function Settings() {
    const [siteName, setSiteName] = useState("F8 Day 36");
    const [theme, setTheme] = useState("light");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            siteName,
            theme,
        });
    };

    return (
        <div className={styles.settings}>
            <h1>Cài đặt</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="siteName">Tên website</label>

                <input
                    id="siteName"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                />

                <label htmlFor="theme">Giao diện</label>

                <select
                    id="theme"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                >
                    <option value="light">Sáng</option>
                    <option value="dark">Tối</option>
                </select>

                <button type="submit">Lưu thay đổi</button>
            </form>
        </div>
    );
}

export default Settings;
