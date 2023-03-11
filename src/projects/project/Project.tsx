import React, {FC} from 'react';
import styles from './Project.module.css';

const Project: FC<ProjectPropsType> = ({title, description}) => {
    return (
        <div className={styles.project}>
            <div className={styles.coverImage}>
                <a className={styles.projectLink} href=".">Watch</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    );
};

type ProjectPropsType = {
    title: string;
    description: string;
}

export default Project;