import React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {skills} from '../data/skills';

const Skills = () => {
    return (
        <section className={styles.skillsBlock} id={'skills'}>
            <div className={styles.skillsContainer}>
                <Title>Skills</Title>
                <div className={styles.skills}>
                    {skills.map(skill => <Skill key={v1()} title={skill.title}
                                                description={skill.description} icon={skill.icon}/>)}
                </div>
            </div>
        </section>
    );
};

export default Skills;