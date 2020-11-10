import React from 'react';
import ProfilePicture from '../../Images/profile.png';
import './LandingPage.css';

export default class LandingPage extends React.Component {

    render() {
        return (
            <div className='landing gray-box'>
                <img src={ProfilePicture} alt='patrick'/>
                <div className='flex-col'>
                    <h2>Welcome to my portfolio!</h2>
                    <p>My name is Patrick and I'm looking for a career in software development.</p> 
                    <p>Please use the links above to explore the projects I've done and general information about me.</p>
                </div>
            </div>
        );
    };
}