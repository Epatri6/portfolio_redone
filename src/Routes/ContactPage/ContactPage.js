import React from 'react';
import './ContactPage.css';

export default class ContactPage extends React.Component {
    render() {
        return (
            <div className='flex-row contact'>
                <div className='flex-col gray-box space-evenly'>
                    <h2>Please feel free to reach me by the following means:</h2>
                    <code><a target="blank" href="mailto:epatri6@gmail.com">Epatri6@gmail.com</a></code>
                    <a target='blank' href='https://www.linkedin.com/in/patrick-easter'>LinkedIn</a>
                    <a target='blank' href='https://github.com/Epatri6'>GitHub</a>
                </div> 
            </div>
        );
    }
}