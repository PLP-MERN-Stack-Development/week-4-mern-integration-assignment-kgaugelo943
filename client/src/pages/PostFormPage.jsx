import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../context/CategoryContext';
import PostForm from '../components/PostForm';
import Layout from '../components/Layout';
import useApi from '../hooks/useApi';

function PostFormPage() {
    const {categories } = useContext(CategoryContext);
    const api = useApi();
    const navigate = useNavigate();
    
    
    useEffect(() => {
        fetch('/api/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const handleSubmit = (postData) => {
        fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData),
        })
            .then(res => res.json())
            .then(() => navigate('/'));
    };

    return (
        <Layout>
            <h2>Create Post</h2>
            <PostForm onSubmit={handleSubmit} categories={categories} />
        </Layout>
    );
}

export default PostFormPage;
