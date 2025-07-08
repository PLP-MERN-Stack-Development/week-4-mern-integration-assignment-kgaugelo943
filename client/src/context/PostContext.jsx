import { createContext, useState, useEffect } from 'react';
import apiService from '../services/apiService';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchPosts = () => {
        setLoading(true);
        setError('');
        apiService.get('/api/posts')
            .then(setPosts)
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const addPost = (newPost) => setPosts(prev => [newPost, ...prev]);

    return (
        <PostContext.Provider value={{ posts, fetchPosts, addPost, loading }}>
            {children}
        </PostContext.Provider>
    );
};

const [posts, setPosts] = useState([]);
const [totalPages, setTotalPages] = useState(1);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

const fetchPosts = (pageNumber = 1) => {
    setLoading(true);
    setError('');
    apiService.get(`/api/posts?page=${pageNumber}&limit=5`)
        .then(data => {
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            setPage(data.page);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
};
