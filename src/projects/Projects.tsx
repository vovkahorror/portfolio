import React from 'react';
import styles from './Projects.module.scss';
import Project from './project/Project';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {projects} from '../data/projects';
import {Fade} from 'react-awesome-reveal';

const Projects = () => {
    return (
        <section className={styles.projectsBlock} id={'projects'}>
            <div className={styles.projectsContainer}>
                <Fade direction={'up'} triggerOnce>
                    <Title>Projects</Title>
                </Fade>
                <Fade direction={'top-left'} duration={600} cascade triggerOnce>
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