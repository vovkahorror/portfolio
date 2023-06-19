import React from 'react';
import styles from './Main.module.scss';
import photo from '../assets/images/photo.jpg';
import Particles from 'react-particles';
import type {Engine} from 'tsparticles-engine';
import {loadLinksPreset} from 'tsparticles-preset-links';
import {Fade} from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import {Tilt} from 'react-tilt';

const Main = () => {
    const customInit = async (engine: Engine) => {
        await loadLinksPreset(engine);
    };

    const particlesOptions = {
        preset: 'links',
        background: {
            color: {
                value: '#252527',
            },
        },
        fullScreen: {
            enable: false,
        },
        responsive: [{
            maxWidth: 768,
            options: {
                particles: {
                    number: {limit: 40},
                },
            },
        }],
    };

    const tiltOptions = {
        reverse: true,
        perspective: 1000,
        scale: 1,
        max: 10,
    };

    return (
        <section className={styles.mainBlock} id={'main'}>
            <Particles options={particlesOptions} init={customInit} className={styles.particles}/>
            <div className={styles.greetingContainer}>
                <Fade direction={'down'} triggerOnce>
                    <div className={styles.greeting}>
                        <span>Hi There</span>
                        <h1>I am <br/> <span className={styles.name}>Volodymyr Yaremchak</span></h1>
                        <p className={styles.profession}>
                            <ReactTypingEffect
                                text={['A Frontend Developer', 'A React Developer', 'A JavaScript Developer', 'A TypeScript Developer']}
                                speed={100}
                                eraseSpeed={100}
                                eraseDelay={3000}
                                typingDelay={1000}/>
                        </p>
                    </div>
                </Fade>

                <Fade direction={'up'} triggerOnce>
                    <Tilt options={tiltOptions} className={styles.photoContainer}>
                        <Tilt options={tiltOptions} className={styles.photo}
                              style={{backgroundImage: `url(${photo})`}}></Tilt>
                        <div className={styles.border}></div>
                    </Tilt>
                </Fade>
            </div>
        </section>
    );
};

export default Main;