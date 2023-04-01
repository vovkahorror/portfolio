import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from './skill/Skill';
import {v1} from 'uuid';
import Title from '../common/components/title/Title';
import {
    SiAxios,
    SiCss3, SiGit,
    SiHtml5,
    SiJavascript, SiMui, SiPostman,
    SiReact,
    SiReacthookform,
    SiRedux,
    SiSass, SiStorybook,
    SiTypescript,
} from 'react-icons/si';
import {RiShieldCheckFill} from 'react-icons/ri';

const Skills = () => {
    const skills = [
        {
            title: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiReact/>,
        },
        {
            title: 'Redux',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiRedux/>,
        },
        {
            title: 'TypeScript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiTypescript/>,
        },
        {
            title: 'JavaScript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiJavascript/>,
        },
        {
            title: 'SCSS / Sass',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiSass/>,
        },
        {
            title: 'CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiCss3/>,
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiHtml5/>,
        },
        {
            title: 'Axios',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiAxios/>,
        },
        {
            title: 'Material UI',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiMui/>,
        },
        {
            title: 'React Hook Form',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiReacthookform/>,
        },
        {
            title: 'Storybook',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiStorybook/>,
        },
        {
            title: 'Postman',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiPostman/>,
        },
        {
            title: 'Git',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiGit/>,
        },
        {
            title: 'Unit testing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <RiShieldCheckFill/>,
        },
    ];

    return (
        <div className={styles.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title>Skills</Title>
                <div className={styles.skills}>
                    {skills.map(skill => <Skill key={v1()} title={skill.title} description={skill.description}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;