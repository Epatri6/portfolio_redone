import React from 'react';
import './AboutPage.css';
import profile from '../../Images/profile.png';
import banjo from '../../Images/about/banjo.png';
import coat from '../../Images/about/coat.png';
import violin from '../../Images/about/violin.png';

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className='about flex-col'>
                <section className='flex-col gray-box text-center'>
                    <h2>Hello, I'm Patrick Easter!</h2>
                    <div className='info'>
                        <img src={profile} alt='head shot'/>
                        <p className='space-pre-wrap'>{"I'm a software developer in Richmond, VA that enjoys solving problems via analytical methods with imaginative twists.\n\nLogical problems never fail to catch my interest. That's the primary reason I graduated in Philosophy from Virginia Tech.\n\nHowever, writing books or pursuits of a similar nature do not inspire me. Rather, I find great motivation in creating engaging experiences via software."}</p>
                    </div>
                </section>
                <section className='flex-col gray-box text-center'>
                    <h2>Other Interests</h2>
                    <div className='info'>
                        <img src={banjo} alt='banjo kazooie box'/>
                        <div className='flex-col'>
                            <h3>Video Games</h3>
                            <p className='space-pre-wrap'>{"Video games have always been a big part of my life and I find game design fascinating.\n\nI have tinkered with various game engines such as Unity for the past decade.\n\nWorking with a small team of artists and musicians, I've developed several small scale projects.\n\nThrough these mediums I've developed skills in problem solving, game design, user experience, and creativity that I can bring to any team of programmers.\n\nUtilizing these skills, I wish to provide service in software development (with a preference for game development)."}</p>
                            <h4>Top Video Games</h4>
                            <ol>
                                <li>Banjo Kazooie</li>
                                <li>Ratchet and Clank</li>
                                <li>Fire Emblem: Three Houses</li>
                            </ol>
                        </div>
                    </div>
                    <div className='info'>
                        <img src={coat} alt='romantic gothic coat'/>
                        <div className='flex-col'>
                            <h3>Romantic Gothic Fashion</h3>
                            <p className='space-pre-wrap'>{"I absolutely adore Victorian/Romantic gothic fashion.\n\nPictured is my favorite coat - warm, comfy, and stylish.\n\nNeedless to say, I'm completely fine with formal dress codes."}</p>
                        </div>
                    </div>
                    <div className='info'>
                        <img src={violin} alt='example violin'/>
                        <div className='flex-col'>
                            <h3>Violin</h3>
                            <p className='space-pre-wrap'>{"The violin is my favorite instrument and the majority of music I enjoy features it.\n\nI practice it in my free time - it's an effective stress reduction activity.\n\nEventually I'd like to be able to play Lindsey Stirling's rendition of Evanescence's \"My Immortal\".n"}</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}