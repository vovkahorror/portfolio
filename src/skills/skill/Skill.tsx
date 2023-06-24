import React, {FC, ReactNode} from 'react';
import styles from './Skill.module.scss';

const Skill: FC<SkillPropsType> = ({title, description, icon}) => {
    return (
        <li className={styles.skill}>
            <div className={styles.iconWrapper}>
                <div className={styles.icon}>{icon}</div>
            </div>
            <h3 className={styles.skillTitle}>{title}</h3>
            <span className={styles.description}>{description}</span>
        </li>
    );
};

type SkillPropsType = {
    title: string;
    description: string;
    icon: ReactNode;
}

export default Skill;