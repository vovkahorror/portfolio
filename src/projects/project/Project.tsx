import React, {FC, ReactNode} from 'react';
import styles from './Project.module.scss';
import {useInView} from 'react-intersection-observer';

const Project: FC<ProjectPropsType> = ({title, description, icon, image, link}) => {
    const {ref, inView} = useInView();

    return (
        <li ref={ref} className={`${styles.project} ${inView ? styles.inView : ''}`}>
            <a href={link} target="_blank">
                <div className={styles.coverImage} style={{backgroundImage: `url(${image})`}}>
                    <span className={styles.description}>{description}</span>
                </div>
            </a>
            <a href={link} target="_blank" className={styles.titleWrapper}>
                <h3 className={styles.projectTitle}>
                    <span className={styles.projectIcon}>{icon}</span>
                    {title}
                </h3>
            </a>
        </li>
    );
};

type ProjectPropsType = {
    title: string;
    description: string;
    icon?: ReactNode;
    image: string;
    link: string;
}

export default Project;