import UserContext from '../Context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const TestingEnvironment = ({ value, children }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <UserContext.Provider value={value}>
                        {children}
                    </UserContext.Provider>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default TestingEnvironment

