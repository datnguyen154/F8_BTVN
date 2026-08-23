import styles from "./Contact.module.scss";

function Contact() {
    return (
        <div className={styles.contact}>
            <h1>Liên hệ</h1>

            <p>
                Nếu bạn có câu hỏi hoặc cần hỗ trợ, hãy liên hệ với chúng tôi
                qua các thông tin bên dưới.
            </p>

            <section>
                <h2>Thông tin liên hệ</h2>

                <p>Email: contact@example.com</p>
                <p>Điện thoại: 0123 456 789</p>
                <p>Địa chỉ: Hà Nội, Việt Nam</p>
            </section>

            <section>
                <h2>Hỗ trợ khách hàng</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, tempora. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Repudiandae blanditiis consequatur
                    voluptatem necessitatibus incidunt molestiae.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus provident laboriosam voluptates, facilis eum
                    asperiores rerum. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                </p>
            </section>

            <section>
                <h2>Thời gian làm việc</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio quaerat possimus aperiam fugiat dolor voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente, consequatur.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione maxime temporibus laborum fugit aliquid repellendus.
                </p>
            </section>

            <section>
                <h2>Thông tin khác</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium quod architecto molestiae, voluptates ratione
                    dolorem eveniet. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque recusandae facere voluptates officia praesentium
                    consequatur pariatur corporis.
                </p>
            </section>
        </div>
    );
}

export default Contact;
