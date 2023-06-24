import React from 'react';
import styles from './Projects.module.scss';
import Project from './project/Project';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {projects} from '../data/projects';
import {Fade} from 'react-awesome-reveal';

const Projects = () => {
    return (
        <section className={styles.projectsBlock}>
            <div className={styles.projectsContainer}>
                <Title id={'projects'}>Projects</Title>
                <Fade duration={1200} cascade triggerOnce damping={0.3}>
                    <ul className={styles.projects}>
                        {projects.map(project => <Project key={v1()} title={project.title}
                                                          description={project.description} style={project.style}/>)}
                    </ul>
                </Fade>
            </div>
        </section>
    );
};

export default Projects;