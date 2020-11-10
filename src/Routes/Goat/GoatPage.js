import React from 'react';
import './GoatPage.css';
import goal from '../../Images/goat/create_reward.png';
import reward from '../../Images/goat/create_reward.png';
import archive from '../../Images/goat/archived_goals.png';

const screenshots = [
    {
        src: goal,
        alt: 'goal creation screen',
        desc: 'Create goals'
    },
    {
        src: reward,
        alt: 'reward creation screen',
        desc: 'Create rewards'
    },
    {
        src: archive,
        alt: 'archived goals screen',
        desc: 'See past completed goals'
    }
];

export default class GoatPage extends React.Component {
    render() {
        return (
            <div className='flex-col sprit goat'>
                <section className='flex-col gray-box text-center'>
                    <h2>Goat</h2>
                    <p className='space-pre-wrap'>{"A gamified personal goal setting app.\n\nUsers wager points they'll complete goals by a set time, losing them if they fail.\n\nThey can then spend these points on self defined rewards."}</p>
                    <a className='demo' target='blank' href='https://goat-client.vercel.app/'>Try it!</a>
                    <p>Client Repo:<a target='blank' href='https://github.com/thinkful-ei-quail/goat-client'>GitHub</a></p>
                    <p>API Repo:<a target='blank' href='https://github.com/thinkful-ei-quail/goat-api'>GitHub</a></p>
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