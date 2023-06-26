import React, {FC, ReactNode} from 'react';
import styles from './Skill.module.scss';
import {useInView} from 'react-intersection-observer';

const Skill: FC<SkillPropsType> = ({title, description, icon}) => {
    const {ref, inView} = useInView();

    return (
        <li ref={ref} className={`${styles.skill} ${inView ? styles.inView : ''}`}>
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