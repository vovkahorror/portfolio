import React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {skills} from '../data/skills';
import {Zoom} from 'react-awesome-reveal';

const Skills = () => {
    return (
        <section className={styles.skillsBlock} id={'skills'}>
            <div className={styles.skillsContainer}>
                <Zoom triggerOnce>
                    <Title>Skills</Title>
                </Zoom>
                <ul className={styles.skills}>
                    {skills.map(skill => <Skill key={v1()} title={skill.title}
                                                description={skill.description} icon={skill.icon}/>)}
                </ul>
            </div>
        </section>
    );
};

export default Skills;