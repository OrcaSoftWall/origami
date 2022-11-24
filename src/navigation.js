import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Publications from './pages/publications';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import ShareThoughtsPage from './pages/share-thoughts';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>  // to be able to load only one route
                <Route path="/" exact element={<Publications />} />
                <Route path="/share" element={<ShareThoughtsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation