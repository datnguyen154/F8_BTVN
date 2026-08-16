import Button from "../../components/Button";
import styles from "./Buttons.module.scss";

function Buttons() {
    return (
        <div className={styles.container}>
            <h1>Button Components</h1>

            <section>
                <h2>Basic Button</h2>

                <Button>Click me</Button>
            </section>

            <section>
                <h2>Primary Button</h2>

                <Button primary>Primary Button</Button>
            </section>

            <section>
                <h2>Link Button</h2>

                <Button
                    href="https://google.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Go to Google
                </Button>
            </section>

            <section>
                <h2>Button Size</h2>

                <div className={styles.group}>
                    <Button size="small">Small</Button>

                    <Button size="medium">Medium</Button>

                    <Button size="large">Large</Button>
                </div>
            </section>

            <section>
                <h2>Variants</h2>

                <div className={styles.group}>
                    <Button bordered>Bordered</Button>

                    <Button rounded>Rounded</Button>

                    <Button primary rounded>
                        Primary Rounded
                    </Button>
                </div>
            </section>

            <section>
                <h2>onClick</h2>

                <Button primary onClick={() => alert("Clicked!")}>
                    Click Alert
                </Button>
            </section>

            <section>
                <h2>Disabled</h2>

                <Button disabled onClick={() => alert("Should not show")}>
                    Disabled Button
                </Button>
            </section>

            <section>
                <h2>Loading</h2>

                <Button
                    primary
                    loading
                    onClick={() => console.log("Should not log")}
                >
                    Loading Button
                </Button>
            </section>

            <section>
                <h2>Custom className</h2>

                <Button primary className={styles.customButton}>
                    Custom Styled
                </Button>
            </section>

            <section>
                <h2>Button với Icon</h2>

                <Button primary>
                    <span>✉️</span>
                    Send Email
                </Button>
            </section>
        </div>
    );
}

export default Buttons;
