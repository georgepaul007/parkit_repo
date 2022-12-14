import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/book' element={<Book />} />
            </Routes>
        </Router>
    );
}

export default App;