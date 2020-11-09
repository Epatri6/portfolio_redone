import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className='flex-col header'>
                <Link to='/'>
                    <h1>Patrick Easter's Portfolio</h1>
                </Link>
                <nav className='flex-row'>
                    <Link to='/about'>About Me</Link>
                    |
                    <Link to='/projects'>Projects</Link>
                    |
                    <Link to='/contact'>Contact</Link>
                </nav>
            </div>
        );
    };
}