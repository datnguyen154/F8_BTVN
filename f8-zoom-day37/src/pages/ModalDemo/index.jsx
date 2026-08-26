import { useState } from "react";

import Modal from "../../components/Modal";
import styles from "./ModalDemo.module.scss";

function ModalDemo() {
    const [basicOpen, setBasicOpen] = useState(false);
    const [animationOpen, setAnimationOpen] = useState(false);
    const [noOverlayCloseOpen, setNoOverlayCloseOpen] = useState(false);
    const [noEscCloseOpen, setNoEscCloseOpen] = useState(false);
    const [customOpen, setCustomOpen] = useState(false);
    const [callbackOpen, setCallbackOpen] = useState(false);

    return (
        <div className={styles.page}>
            <h1>Modal Demo</h1>

            <div className={styles.grid}>
                {/* 1. Basic Modal */}
                <div className={styles.card}>
                    <h2>Basic Modal</h2>

                    <p>Modal đơn giản với nút mở và đóng.</p>

                    <button onClick={() => setBasicOpen(true)}>Mở Modal</button>

                    <Modal
                        isOpen={basicOpen}
                        onRequestClose={() => setBasicOpen(false)}
                    >
                        <h3>Basic Modal</h3>

                        <p>Đây là modal cơ bản.</p>

                        <button onClick={() => setBasicOpen(false)}>
                            Đóng
                        </button>
                    </Modal>
                </div>

                {/* 2. Animation */}
                <div className={styles.card}>
                    <h2>Modal với Animation</h2>

                    <p>Có closeTimeoutMS 300ms.</p>

                    <button onClick={() => setAnimationOpen(true)}>
                        Mở Modal
                    </button>

                    <Modal
                        isOpen={animationOpen}
                        onRequestClose={() => setAnimationOpen(false)}
                        closeTimeoutMS={300}
                    >
                        <h3>Animation Modal</h3>

                        <p>Khi mở và đóng sẽ có hiệu ứng transition.</p>

                        <button onClick={() => setAnimationOpen(false)}>
                            Đóng
                        </button>
                    </Modal>
                </div>

                {/* 3. Không đóng khi click overlay */}
                <div className={styles.card}>
                    <h2>Không đóng khi click overlay</h2>

                    <p>Click vùng nền tối sẽ không đóng modal.</p>

                    <button onClick={() => setNoOverlayCloseOpen(true)}>
                        Mở Modal
                    </button>

                    <Modal
                        isOpen={noOverlayCloseOpen}
                        onRequestClose={() => setNoOverlayCloseOpen(false)}
                        shouldCloseOnOverlayClick={false}
                    >
                        <h3>Overlay Disabled</h3>

                        <p>Thử click ra ngoài modal, modal vẫn mở.</p>

                        <button onClick={() => setNoOverlayCloseOpen(false)}>
                            Đóng
                        </button>
                    </Modal>
                </div>

                {/* 4. Không đóng khi nhấn Esc */}
                <div className={styles.card}>
                    <h2>Không đóng bằng Esc</h2>

                    <p>Nhấn Esc sẽ không làm modal đóng.</p>

                    <button onClick={() => setNoEscCloseOpen(true)}>
                        Mở Modal
                    </button>

                    <Modal
                        isOpen={noEscCloseOpen}
                        onRequestClose={() => setNoEscCloseOpen(false)}
                        shouldCloseOnEsc={false}
                    >
                        <h3>ESC Disabled</h3>

                        <p>Thử nhấn Esc. Modal vẫn phải giữ nguyên.</p>

                        <button onClick={() => setNoEscCloseOpen(false)}>
                            Đóng
                        </button>
                    </Modal>
                </div>

                {/* 5. Custom className */}
                <div className={styles.card}>
                    <h2>Custom className</h2>

                    <p>Truyền className riêng để override style.</p>

                    <button onClick={() => setCustomOpen(true)}>
                        Mở Modal
                    </button>

                    <Modal
                        isOpen={customOpen}
                        onRequestClose={() => setCustomOpen(false)}
                        className={styles.customModal}
                        overlayClassName={styles.customOverlay}
                    >
                        <h3>Custom Modal</h3>

                        <p>Modal này có giao diện khác modal mặc định.</p>

                        <button onClick={() => setCustomOpen(false)}>
                            Đóng
                        </button>
                    </Modal>
                </div>

                {/* 6. Callback */}
                <div className={styles.card}>
                    <h2>Modal với Callbacks</h2>

                    <p>Kiểm tra onAfterOpen và onAfterClose trong Console.</p>

                    <button onClick={() => setCallbackOpen(true)}>
                        Mở Modal
                    </button>

                    <Modal
                        isOpen={callbackOpen}
                        onRequestClose={() => setCallbackOpen(false)}
                        onAfterOpen={() => {
                            console.log("Modal đã mở");
                        }}
                        onAfterClose={() => {
                            console.log("Modal đã đóng");
                        }}
                        closeTimeoutMS={300}
                    >
                        <h3>Callback Modal</h3>

                        <p>Mở DevTools → Console để xem callback.</p>

                        <button onClick={() => setCallbackOpen(false)}>
                            Đóng
                        </button>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default ModalDemo;
