import React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {skills} from '../data/skills';
import {Fade} from 'react-awesome-reveal';
import {motion, Variants} from 'framer-motion';

const Skills = () => {
    return (
        <section className={styles.skillsBlock} id={'skills'}>
            <div className={styles.skillsContainer}>
                <Fade direction={'up'} triggerOnce>
                    <Title>Skills</Title>
                </Fade>
                {/*<Fade direction={'bottom-right'} duration={400} cascade triggerOnce damping={0.3}>*/}
                <ul className={styles.skills}>
                    {skills.map((skill, index) =>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true, amount: 0}}
                            custom={index}
                            variants={skillVariants}>

                            <Skill key={v1()} title={skill.title} description={skill.description} icon={skill.icon}/>

                        </motion.div>,
                    )}
                </ul>
                {/*</Fade>*/}
            </div>
        </section>
    );
};

const skillVariants: Variants = {
    offscreen: {
        y: 300,
        opacity: 0,
        rotate: -45,
    },
    onscreen: custom => ({
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            duration: 0.5,
            delay: custom * 0.1,
        },
    }),
};

export default Skills;