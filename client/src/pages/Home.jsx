import { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import Layout from '../components/Layout';
import useApi from '../hooks/useApi';

function Home() {
    const [posts, setPosts] = useState([]);
    const api = useApi();

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <Layout>
            <PostList posts={posts} />
        </Layout>
    );
}



export default Home;

