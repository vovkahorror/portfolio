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
                <Title>Projects</Title>
                <Fade duration={1200} cascade triggerOnce damping={0.3}>
                    <ul className={styles.projects}>
                        {projects.map(project =>
                            <Project key={v1()} title={project.title} description={project.description}
                                     image={project.image} link={project.link}/>)}
                    </ul>
                </Fade>
            </div>
        </section>
    );
};

export default Projects;