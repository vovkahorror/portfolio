import React from 'react';
import styles from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <ul className={styles.skills}>

                </ul>
            </div>
        </div>
    );
};

export default Skills;