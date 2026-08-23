import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import Loading from "../../components/Loading";
import styles from "./PostDetail.module.scss";

function PostDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const postResponse = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`,
                );

                if (!postResponse.ok) {
                    if (postResponse.status === 404) {
                        navigate("/posts", { replace: true });
                    }

                    return;
                }

                const commentsResponse = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
                );

                const postData = await postResponse.json();
                const commentsData = await commentsResponse.json();

                setPost(postData);
                setComments(commentsData);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, navigate]);

    if (loading) {
        return <Loading />;
    }

    if (!post) {
        return null;
    }

    return (
        <div className={styles.container}>
            <Link className={styles.backLink} to="/posts">
                ← Quay lại danh sách
            </Link>

            <article className={styles.post}>
                <div className={styles.meta}>
                    <span>Post #{post.id}</span>
                    <span>User #{post.userId}</span>
                </div>

                <h1>{post.title}</h1>

                <p>{post.body}</p>
            </article>

            <section className={styles.comments}>
                <h2>Bình luận ({comments.length})</h2>

                <div className={styles.commentList}>
                    {comments.map((comment) => (
                        <article className={styles.comment} key={comment.id}>
                            <div className={styles.commentHeader}>
                                <h3>{comment.name}</h3>
                                <span>{comment.email}</span>
                            </div>

                            <p>{comment.body}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default PostDetail;
