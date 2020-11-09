import React from 'react';

export default class NonRoute extends React.Component {
    render() {
        return (
            <div className='gray-box flex-col full-width'>
                <h2>404</h2>
                <p>There's nothing to see here!</p> 
                <p>Use one of the buttons above to find your way back!</p>
            </div>
        );
    };
}