import React from 'react';
import styles from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import {v1} from "uuid";

const Skills = () => {
    const skills = [
        {
            title: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!'
        },
        {
            title: 'TypeScript/Javascript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!'
        },
        {
            title: 'CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!'
        },
    ];

    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    {skills.map(skill => <Skill key={v1()} title={skill.title} description={skill.description}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;