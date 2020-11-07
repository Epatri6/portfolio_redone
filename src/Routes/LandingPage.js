import React from 'react';

const pathData = [
    {
        title: 'About Me',
        path: '/about'
    },
    {
        title: '',
        path: ''
    },
    {
        title: '',
        path: ''
    }
];

export default class LandingPage extends React.Component {

    switchPath = (e, path) => {
        e.preventDefault();
        this.props.history.push(path)
    }

    renderPath = (data) => {
        const {path, title} = data;
        return (
            <button onClick={(e) => this.switchPath(e, path)}>{title}</button>
        );
    };

    render() {
        return (
            <div>
                {pathData.map(data => this.renderPath(data))}
            </div>
        );
    };
}