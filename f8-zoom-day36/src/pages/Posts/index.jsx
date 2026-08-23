import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import { useSearchParams } from "react-router";
import styles from "./Posts.module.scss";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    const currentPage = Number(searchParams.get("page")) || 1;
    const postsPerPage = 20;
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handlePageChange = (page) => {
        setSearchParams({
            page: page.toString(),
        });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={styles.posts}>
            <h1>Posts</h1>

            <div className={styles.postList}>
                {currentPosts.map((post) => (
                    <article key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </article>
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Posts;
