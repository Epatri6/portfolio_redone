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
            <section onClick={this.props.onClick} className='flex-col gray-box space-evenly project-preview'>
                <div className='flex-row'>
                    <h2>{title}</h2>
                </div>
                <img src={src} alt={alt}/>
                <div className='flex-row'>
                    <p>{desc}</p>
                </div>
            </section>
        );
    }
}