import React from 'react';
import styles from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Project from './project/Project';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import socialNetworkImage from '../assets/images/social-network.jpg';
import todolistImage from '../assets/images/to-do-list.png';

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
                <Title>Projects</Title>
                <div className={styles.projects}>
                    {projects.map(project => <Project key={v1()} title={project.title}
                                                      description={project.description}/>)}
                </div>
            </div>
        </div>
    );
};

export default Projects;