import { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import apiService from '../services/apiService';

function PostList({ posts }) {
    const { setPosts } = useContext(PostContext);

    const handleDelete = (id) => {
        const backup = [...posts];

        
        setPosts(prev => prev.filter(p => p._id !== id));

        apiService.delete(`/api/posts/${id}`)
            .catch(err => {
                alert('Failed to delete post');
                setPosts(backup); 
            });
    };

    return (
        <div>
            <h2>All Posts</h2>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default PostList;
