import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../client/src/pages/Home';
import PostDetail from '../../client/src/pages/PostDetail';
import PostFormPage from '../../client/src/pages/PostFormPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/create" element={<PostFormPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
