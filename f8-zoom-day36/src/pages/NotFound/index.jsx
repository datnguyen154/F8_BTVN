import { Link } from "react-router";
import styles from "./NotFound.module.scss";

function NotFound() {
    return (
        <div className={styles.notFound}>
            <h1>404</h1>

            <h2>Không tìm thấy trang</h2>

            <p>Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>

            <Link to="/">Về trang chủ</Link>
        </div>
    );
}

export default NotFound;
