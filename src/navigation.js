import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Publications from './pages/publications';
import ShareThoughtsPage from './pages/share-thoughts';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>  // to be able to load only one route
                <Route path="/" exact element={<Publications />} />
                <Route path="/share" element={<ShareThoughtsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation