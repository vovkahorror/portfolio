import React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {skills} from '../data/skills';
import {Fade, Zoom} from 'react-awesome-reveal';

const Skills = () => {
    return (
        <section className={styles.skillsBlock} id={'skills'}>
            <div className={styles.skillsContainer}>
                <Title>Skills</Title>
                <div>
                    <Zoom triggerOnce>
                        <h2 className={styles.title}>Core Technologies Stack</h2>
                    </Zoom>
                    <Fade duration={800} cascade triggerOnce damping={0.2}>
                        <ul className={styles.skills}>
                            {skills.mainStack.map(skill => <Skill key={v1()} title={skill.title}
                                                                  description={skill.description} icon={skill.icon}/>)}
                        </ul>
                    </Fade>
                </div>
                <div>
                    <Zoom triggerOnce>
                        <h2 className={styles.title}>Assistive Technologies and Libraries</h2>
                    </Zoom>
                    <Fade duration={800} cascade triggerOnce damping={0.2}>
                        <ul className={styles.skills}>
                            {skills.assistiveTechnologies.map(skill => <Skill key={v1()} title={skill.title}
                                                                              description={skill.description}
                                                                              icon={skill.icon}/>)}
                        </ul>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Skills;