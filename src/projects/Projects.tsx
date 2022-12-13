import React from 'react';
import styles from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Project from "./project/Project";
import {v1} from "uuid";

const Projects = () => {
    const projects = [
        {
            title: 'Social network',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
        },
        {
            title: 'Todolist',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
        },
    ];

    return (
        <div className={styles.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    {projects.map(project => <Project key={v1()} title={project.title}
                                                      description={project.description}/>)}
                </div>
            </div>
        </div>
    );
};

export default Projects;