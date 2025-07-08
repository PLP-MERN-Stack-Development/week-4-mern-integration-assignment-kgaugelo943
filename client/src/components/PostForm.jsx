import { useState, useEffect } from 'react';

function PostForm({ onSubmit, initialData = {}, categories }) {
    const [title, setTitle] = useState(initialData.title || '');
    const [content, setContent] = useState(initialData.content || '');
    const [category, setCategory] = useState(initialData.category || '');
    
    
    
     const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onSubmit({ title, content, category });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input value={title} onChange={e => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Content:</label>
                <textarea value={content} onChange={e => setContent(e.target.value)} required />
            </div>
            <div>
                <label>Category:</label>
                <select value={category} onChange={e => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Save</button>
        </form>
    );
}

