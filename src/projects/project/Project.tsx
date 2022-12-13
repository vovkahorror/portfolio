import React, {FC} from 'react';
import styles from './Project.module.css';

type ProjectPropsType = {
    title: string;
    description: string;
}

const Project: FC<ProjectPropsType> = ({title, description}) => {
    return (
        <div className={styles.project}>
            <div className={styles.coverImage}>
                <a className={styles.projectLink} href="">Watch</a>
            </div>
            <h3>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
};

export default Project;