import React from 'react';
import './ProjectPreview.css';

export default class ProjectPreview extends React.Component {

    static defaultProps = {
        details: {},
        onClick: () => {}
    }

    render() {
        const {title, src, alt, desc} = this.props.details;
        return (
            <section onClick={this.props.onClick} className='flex-col gray-box project-preview'>
                <h2>{title}</h2>
                <img src={src} alt={alt}/>
                <p>{desc}</p>
            </section>
        );
    }
}