import React from 'react';
import './SpritPage.css';
import landing from '../../Images/sprits/preview.png';
import board from '../../Images/sprits/example_board.png';
import loss from '../../Images/sprits/example_loss.png';

const screenshots = [
    {
        src: landing,
        alt: 'landing page',
        desc: 'A welcoming forest aesthetic'
    },
    {
        src: board,
        alt: 'example game board',
        desc: 'The game board'
    },
    {
        src: loss,
        alt: 'loss screen',
        desc: 'Don\'t make Sprit sad by losing!'
    }
];

export default class SpritPage extends React.Component {
    render() {
        return (
            <div className='flex-col sprit'>
                <section className='flex-col gray-box text-center'>
                    <h2>Sprit's Forest</h2>
                    <p className='space-pre-wrap'>{"A small scale orginial puzzle game.\n\nStop corruption from spilling into the forest by cleansing it before it leaks!\n\nPlayers can save games and track how many puzzles they've completed."}</p>
                    <a className='demo' target='blank' href='https://sprits-forest.vercel.app/'>Play it here!</a>
                    <p>Client Repo:<a target='blank' href='https://github.com/Epatri6/SpritsForest'>GitHub</a></p>
                    <p>API Repo:<a target='blank' href='https://github.com/Epatri6/sprits-forest-server'>GitHub</a></p>
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