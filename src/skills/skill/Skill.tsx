import React, {FC} from 'react';
import styles from './Skill.module.css';

const Skill: FC<SkillPropsType> = ({title, description}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3 className={styles.skillTitle}>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
};

type SkillPropsType = {
    title: string;
    description: string;
}

export default Skill;