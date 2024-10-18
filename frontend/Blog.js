import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="blog">
            <h1>Blog Posts</h1>
            {posts.map(post => (
                <div key={post._id} className="blog-post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;
