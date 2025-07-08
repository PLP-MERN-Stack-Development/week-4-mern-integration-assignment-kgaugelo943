import { createContext, useState, useEffect } from 'react';
import apiService from '../services/apiService';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        apiService.get('/api/categories')
            .then(setCategories)
            .catch(err => console.error(err));
    }, []);

    return (
        <CategoryContext.Provider value={{ categories }}>
            {children}
        </CategoryContext.Provider>
    );
};
