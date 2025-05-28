import React, { useState } from "react";
import styles from "./Blog.module.css";
import blogs from "../../data/blogs.json";

export const Blog = () => {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (idx) => {
        setExpanded((prev) => ({
            ...prev,
            [idx]: !prev[idx],
        }));
    };

    return (
        <section className={styles.container} id="blogs">
            <h2 className={styles.title}>Blogs</h2>
            <div className={styles.blogs}>
                {blogs.map((blog, idx) => (
                    <div key={idx} className={styles.blogCard}>
                        <img src={blog.imageSrc} alt={blog.title} className={styles.blogImage} />
                        <h3 className={styles.blogTitle}>{blog.title}</h3>
                        <p className={styles.blogDescription}>
                            {expanded[idx]
                                ? blog.description
                                : blog.description.split(" ").slice(0, 20).join(" ") + "..."}
                        </p>
                        <div className={styles.actions}>
                            <button
                                className={styles.toggleBtn}
                                onClick={() => toggleExpand(idx)}
                            >
                                {expanded[idx] ? "View Less" : "View More"}
                            </button>
                            <a
                                href={blog.link}
                                className={styles.blogLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read Blog
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};