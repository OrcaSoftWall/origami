import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Publications from './pages/publications';
// import RegisterPage from './pages/register';
// import LoginPage from './pages/login';
// import ProfilePage from './pages/profile';
// import ShareThoughtsPage from './pages/share-thoughts';
// import ErrorPage from './pages/error';
import { lazy, Suspense } from 'react';

const LazyPublications = lazy(() => import('./pages/publications'))
const LazShareThoughtsPage = lazy(() => import('./pages/share-thoughts'))
const LazyRegisterPage = lazy(() => import('./pages/register'))
const LazyLoginPage = lazy(() => import('./pages/login'))
const LazyProfilePage = lazy(() => import('./pages/profile'))
const LazyErrorPage = lazy(() => import('./pages/error'))
const LazyNavigation = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<h1>Loading</h1>}>
                <Routes>
                    <Route path="/" element={<LazyPublications />} />
                    <Route path="/share" element={<LazShareThoughtsPage />} />
                    <Route path="/register" element={<LazyRegisterPage />} />
                    <Route path="/login" element={<LazyLoginPage />} />
                    <Route path="/profile/:userid" element={<LazyProfilePage />} />
                    <Route path="*" element={<LazyErrorPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter >
    )
}

export default LazyNavigation


// const Navigation = () => {
//     return (
//         <BrowserRouter>
//             <Routes>  // to be able to load only one route
//                 <Route path="/" element={<Publications />} />
//                 <Route path="/share" element={<ShareThoughtsPage />} />
//                 <Route path="/register" element={<RegisterPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/profile/:userid" element={<ProfilePage />} />
//                 <Route path="*" element={<ErrorPage />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default Navigation