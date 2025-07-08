const baseUrl = import.meta.env.VITE_API_BASE_URL || '';

const getToken = () => localStorage.getItem('token');

const handleResponse = async (res) => {
    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'API request failed');
    }
    return res.json();
};

const apiService = {
    get: (url) => fetch(baseUrl + url).then(handleResponse),

    post: (url, data) =>
        fetch(baseUrl + url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(handleResponse),

    put: (url, data) =>
        fetch(baseUrl + url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(handleResponse),

    delete: (url) =>
        fetch(baseUrl + url, {
            method: 'DELETE',
        }).then(handleResponse),
};

export default apiService;
