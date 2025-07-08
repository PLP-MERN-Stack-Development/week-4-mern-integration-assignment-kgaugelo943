function useApi() {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || '';

    const get = (url) =>
        fetch(baseUrl + url).then(res => {
            if (!res.ok) throw new Error('Failed to fetch');
            return res.json();
        });

    const post = (url, data) =>
        fetch(baseUrl + url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(res => {
            if (!res.ok) throw new Error('Failed to save');
            return res.json();
        });

    const put = (url, data) =>
        fetch(baseUrl + url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(res => {
            if (!res.ok) throw new Error('Failed to update');
            return res.json();
        });

    const del = (url) =>
        fetch(baseUrl + url, { method: 'DELETE' }).then(res => {
            if (!res.ok) throw new Error('Failed to delete');
            return res.json();
        });

    return { get, post, put, del };
}

export default useApi;
