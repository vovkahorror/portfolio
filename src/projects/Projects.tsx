import React from 'react';
import styles from './Projects.module.scss';
import Project from './project/Project';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {projects} from '../data/projects';
import {Fade} from 'react-awesome-reveal';
import {motion, Variants} from 'framer-motion';

const Projects = () => {
    return (
        <section className={styles.projectsBlock} id={'projects'}>
            <div className={styles.projectsContainer}>
                <Fade direction={'up'} triggerOnce>
                    <Title>Projects</Title>
                </Fade>
                {/*<Fade direction={'top-left'} duration={600} cascade triggerOnce damping={0.3}>*/}
                <ul className={styles.projects}>
                    {projects.map((project, index) =>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true, amount: 0.8}}
                            custom={index}
                            variants={projectVariants}>

                            <Project key={v1()} title={project.title} description={project.description}
                                     style={project.style}/>

                        </motion.div>,
                    )}

                </ul>
                {/*</Fade>*/}
            </div>
        </section>
    );
};

const projectVariants: Variants = {
    offscreen: {
        y: -300,
        opacity: 0,
    },
    onscreen: custom => ({
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 0.8,
            delay: custom * 0.8,
        },
    }),
};

export default Projects;