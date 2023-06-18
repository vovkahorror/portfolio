import React from 'react';
import styles from './Projects.module.scss';
import Project from './project/Project';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {projects} from '../data/projects';

const Projects = () => {
    return (
        <section className={styles.projectsBlock} id={'projects'}>
            <div className={styles.projectsContainer}>
                <Title>Projects</Title>
                <div className={styles.projects}>
                    {projects.map(project => <Project key={v1()} title={project.title}
                                                      description={project.description} style={project.style}/>)}
                </div>
            </div>
        </section>
    );
};

export default Projects;