import { useEffect, useState } from "react";

import styles from "./Comments.module.scss";

function Comment() {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then((res) => res.json())
            .then((comments) => setComments(comments));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !body.trim()) {
            return;
        }

        const newComment = {
            id: Date.now(),
            name: name,
            email: email,
            body: body,
            time: "Vừa xong",
        };

        setComments([newComment, ...comments]);

        setName("");
        setEmail("");
        setBody("");
    };

    return (
        <div className={styles.container}>
            <h1>Comments</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                    placeholder="Nội dung bình luận"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button type="submit">Bình luận</button>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <div className={styles.commentCard} key={comment.id}>
                        <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(comment.name)}&background=random`}
                            alt={comment.name}
                        />

                        <div className={styles.commentContent}>
                            <div className={styles.commentHeader}>
                                <div>
                                    <h3>{comment.name}</h3>
                                    <p>{comment.email}</p>
                                </div>

                                <small>{comment.time || "2 giờ trước"}</small>
                            </div>

                            <p className={styles.body}>{comment.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comment;
