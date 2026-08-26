import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=random";

function Profile() {
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const handleChange = (e) => {
        const image = e.target.files[0];
        const previewURL = URL.createObjectURL(image);
        setPreviewUrl(previewURL);
    };

    return (
        <div className={styles.profile}>
            <h1>Profile</h1>

            <label className={styles.avatarLabel}>
                <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleChange}
                />

                <img
                    className={styles.avatar}
                    src={previewUrl || defaultAvatar}
                    alt="Avatar"
                />

                <span className={styles.changeText}>Đổi ảnh</span>
            </label>
        </div>
    );
}

export default Profile;
