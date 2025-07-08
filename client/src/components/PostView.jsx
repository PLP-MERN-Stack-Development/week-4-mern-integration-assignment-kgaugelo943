function PostView({ post }) {
    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>Category:</strong> {post.category?.name || 'Uncategorized'}</p>
        </div>
    );
}

export default PostView;
