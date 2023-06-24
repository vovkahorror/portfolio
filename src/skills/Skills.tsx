import React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {skills} from '../data/skills';
import {Fade} from 'react-awesome-reveal';

const Skills = () => {
    return (
        <section className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
                <Title id={'skills'}>Skills</Title>
                <Fade duration={800} cascade triggerOnce damping={0.2}>
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