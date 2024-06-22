import React from 'react';
import logo from '../assets/quiz-logo.png';

const Header = () => {
    
    return (
        <header>
            <img src={logo} alt="Quiz App" />
            <h1>React Simple Quiz</h1>
        </header>
    );
}

export default Header;