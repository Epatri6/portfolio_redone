import React from 'react';
import ProjectPreview from '../../Components/ProjectPreview/ProjectPreview';
import spirtPreview from '../../Images/sprits/preview.png';
import spacedPreview from '../../Images/spaced/preview.png';
import goatPreview from '../../Images/goat/preview.png';
import './ProjectPage.css';

const data = [
    {
        title: 'Sprit\'s Forest',
        src: spirtPreview,
        alt: 'sprit game preview',
        desc: 'An original small scale puzzle game',
        path: '/sprit'
    },
    {
        title: 'Spaced Repetition',
        src: spacedPreview,
        alt: 'spaced repeition app preview',
        desc: 'App for learning Irish using spaced repetition',
        path: '/spaced-repetition'
    },
    {
        title: 'Goat',
        src: goatPreview,
        alt: 'goat app preview',
        desc: 'Gamified personal goal setting app',
        path: '/goat'
    }
]

export default class ProjectPage extends React.Component {

    switchPath = (dest) => {
        this.props.history.push(dest);
    }

    render() {
        return (
            <div className='flex-col text-center project-page'>
                <h2>Projects</h2>
                <p>Click a project below to learn more about it!</p>
                <div className='projects'>
                    {data.map((ele, idx) => <ProjectPreview key={idx} details={ele} onClick={() => this.switchPath(ele.path)}/>)}
                </div>
            </div>
        );
    }
}