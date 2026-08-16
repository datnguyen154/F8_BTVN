import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({
    children,
    primary = false,
    bordered = false,
    rounded = false,
    size = "medium",
    href,
    className,
    disabled = false,
    loading = false,
    onClick,
    ...restProps
}) {
    const handleClick = (e) => {
        if (disabled || loading) {
            e.preventDefault();
            return;
        }

        onClick?.(e);
    };
    const Element = href ? "a" : "button";
    const classes = clsx(
        styles.button,
        {
            [styles.primary]: primary,
            [styles.bordered]: bordered,
            [styles.rounded]: rounded,
            [styles.small]: size === "small",
            [styles.medium]: size === "medium",
            [styles.large]: size === "large",
            [styles.disabled]: disabled,
            [styles.loading]: loading,
        },
        className,
    );

    return (
        <Element
            {...restProps}
            className={classes}
            href={href}
            onClick={handleClick}
        >
            <span className={loading ? styles.hiddenContent : ""}>
                {children}
            </span>

            {loading && <span className={styles.spinner}></span>}
        </Element>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    bordered: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    className: PropTypes.string,

    disabled: PropTypes.bool,
    loading: PropTypes.bool,

    onClick: PropTypes.func,
};

export default Button;
