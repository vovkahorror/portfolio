import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from './skill/Skill';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';

const Skills = () => {
    const skills = [
        {
            title: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
        },
        {
            title: 'TypeScript/Javascript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
        },
        {
            title: 'CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
        },
    ];

    return (
        <div className={styles.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title>Skills</Title>
                <div className={styles.skills}>
                    {skills.map(skill => <Skill key={v1()} title={skill.title} description={skill.description}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;