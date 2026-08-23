import styles from "./Pagination.module.scss";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = [];

    for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
    }

    return (
        <div className={styles.pagination}>
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(1)}
            >
                First
            </button>

            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    className={page === currentPage ? styles.active : ""}
                    disabled={page === currentPage}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(totalPages)}
            >
                Last
            </button>
        </div>
    );
}

export default Pagination;
