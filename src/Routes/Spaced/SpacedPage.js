import React from 'react';
import './SpacedPage.css';
import dashboard from '../../Images/spaced/dashboard.png';
import guess from '../../Images/spaced/guess.png';
import result from '../../Images/spaced/result.png';

const screenshots = [
    {
        src: dashboard,
        alt: 'example dashboard',
        desc: 'Dashboard and some of the learnable words'
    },
    {
        src: guess,
        alt: 'example guess form',
        desc: 'Submit English translation'
    },
    {
        src: result,
        alt: 'guess result example',
        desc: 'Find out if you were correct and see your record'
    }
];

export default class SpacedPage extends React.Component {
    render() {
        return (
            <div className='flex-col sprit spaced'>
                <section className='flex-col gray-box text-center'>
                    <h2>Spaced Repetition</h2>
                    <p className='space-pre-wrap'>{"An app to learn Irish using the spaced repetition technique.\n\nUsers can see all the words they have to learn and their scores for each.\n\nThere is framework on the backend to support multiple languages in the future."}</p>
                    <a className='demo' target='blank' href='https://spaced-rep-client-patrick-johnp.vercel.app/'>Try it!</a>
                    <p>Client Repo:<a target='blank' href='https://github.com/thinkful-ei-quail/spaced-rep-client-patrick-johnp'>GitHub</a></p>
                    <p>API Repo:<a target='blank' href='https://github.com/thinkful-ei-quail/spaced-rep-server-patrick-johnp'>GitHub</a></p>
                </section>
                <section className='gray-box flex-col text-center'>
                <h2>Screenshots</h2>
                {screenshots.map((shot, idx) => {
                    const {src, alt, desc} = shot;
                    return (
                        <div key={idx} className='flex-col text-center screenshot'>
                            <img src={src} alt={alt}/>
                            <p>{desc}</p>
                        </div>
                    );
                })}
                </section>
                <section className='flex-col gray-box text-center'>
                    <h2>Tech Stack</h2>
                    <div className='stack'>
                        <div className='flex-col'>
                            <h3>Front End</h3>
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className='flex-col'>
                            <h3>Back End</h3>
                            <ul>
                                <li>JavaScript</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}