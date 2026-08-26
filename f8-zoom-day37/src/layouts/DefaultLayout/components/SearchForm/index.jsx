import { useState } from "react";
import styles from "./SearchForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const searchGroups = [
    {
        title: "KHÓA HỌC",
        items: [
            {
                id: 1,
                icon: "📘",
                title: "JavaScript Cơ Bản",
                description: "Học JavaScript từ cơ bản",
            },
            {
                id: 2,
                icon: "📗",
                title: "JavaScript Nâng Cao",
                description: "Kiến thức JavaScript nâng cao",
            },
            {
                id: 3,
                icon: "⚛️",
                title: "JavaScript với React",
                description: "Xây dựng ứng dụng React",
            },
        ],
    },

    {
        title: "BÀI VIẾT",
        items: [
            {
                id: 4,
                icon: "📝",
                title: "JavaScript là gì?",
                description: "Tìm hiểu về JavaScript",
            },
            {
                id: 5,
                icon: "📝",
                title: "Closure trong JavaScript",
                description: "Hiểu closure dễ dàng",
            },
            {
                id: 6,
                icon: "📝",
                title: "Promise trong JavaScript",
                description: "Xử lý bất đồng bộ",
            },
        ],
    },

    {
        title: "VIDEO",
        items: [
            {
                id: 7,
                icon: "🎬",
                title: "JavaScript Tutorial",
                description: "Video JavaScript cơ bản",
            },
            {
                id: 8,
                icon: "🎬",
                title: "JavaScript DOM",
                description: "Thao tác DOM với JavaScript",
            },
        ],
    },
];

function SearchForm() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.search}>
            <FontAwesomeIcon
                className={styles.searchIcon}
                icon={faMagnifyingGlass}
            />
            <input
                type="text"
                placeholder="Tìm kiếm khóa học, bài viết, video..."
                onFocus={() => setIsOpen(true)}
            />

            {isOpen && (
                <div className={styles.results}>
                    {searchGroups.map((group) => (
                        <div className={styles.group} key={group.title}>
                            <div className={styles.groupHeader}>
                                <h3>{group.title}</h3>
                                <button>Xem thêm</button>
                            </div>

                            {group.items.map((item) => (
                                <div className={styles.item} key={item.id}>
                                    <span>{item.icon}</span>

                                    <div>
                                        <strong>{item.title}</strong>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchForm;
