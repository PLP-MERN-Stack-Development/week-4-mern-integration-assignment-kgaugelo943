import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostView from '../components/PostView';
import Layout from '../components/Layout';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`/api/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [id]);

    return (
        <Layout>
            <PostView post={post} />
        </Layout>
    );
}

export default PostDetail;
