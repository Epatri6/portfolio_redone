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
                    <Link>About Me</Link>
                    |
                    <Link>Projects</Link>
                    |
                    <Link>Contact</Link>
                </nav>
            </div>
        );
    };
}