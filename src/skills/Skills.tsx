import React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {skills} from '../data/skills';
import {Fade} from 'react-awesome-reveal';

const Skills = () => {
    return (
        <section className={styles.skillsBlock} id={'skills'}>
            <div className={styles.skillsContainer}>
                <Fade direction={'up'} triggerOnce>
                    <Title>Skills</Title>
                </Fade>
                <Fade direction={'bottom-right'} duration={600} cascade triggerOnce>
                    <ul className={styles.skills}>
                        {skills.map(skill => <Skill key={v1()} title={skill.title}
                                                    description={skill.description} icon={skill.icon}/>)}
                    </ul>
                </Fade>
            </div>
        </section>
    );
};

export default Skills;