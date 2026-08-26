import GoToTop from "../../components/GoToTop";
import styles from "./ScrollDemo.module.scss";

function ScrollDemo() {
    return (
        <div className={styles.page}>
            <h1>Scroll Demo</h1>

            <p>Cuộn xuống dưới 300px để hiển thị nút Go To Top.</p>

            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates animi eum excepturi unde doloremque.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quaerat maxime delectus aliquid nobis alias
                    consequatur eaque.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, magni perspiciatis autem sint tempore
                    sapiente.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima voluptates amet earum explicabo accusamus quasi.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam hic voluptate molestiae necessitatibus aliquam
                    libero.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe vel quisquam commodi vitae praesentium ipsum.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique quod ratione autem iure molestias.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam adipisci voluptate exercitationem voluptatibus
                    aliquid.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam culpa nihil ipsum alias autem.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem maxime nam harum molestiae illo.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident exercitationem praesentium dolores quibusdam
                    voluptatum.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aperiam consequuntur fugit officia nulla.
                </p>
            </div>

            <GoToTop />
        </div>
    );
}

export default ScrollDemo;
