import {
    SiAxios,
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMui,
    SiPostman,
    SiReact,
    SiReacthookform,
    SiReactrouter,
    SiRedux,
    SiSass,
    SiStorybook,
    SiTypescript,
} from 'react-icons/si';
import {RiShieldCheckFill} from 'react-icons/ri';
import React from 'react';

export const skills = {
    mainStack: [
        {
            title: 'React',
            description: 'A front-end JavaScript library for building user interfaces based on components',
            icon: <SiReact/>,
        },
        {
            title: 'Redux / Redux Toolkit',
            description: 'A JavaScript library for managing and centralizing application state',
            icon: <SiRedux/>,
        },
        {
            title: 'TypeScript',
            description: 'A high-level programming language that adds static typing with optional type annotations to JavaScript',
            icon: <SiTypescript/>,
        },
        {
            title: 'JavaScript',
            description: 'A high-level, often just-in-time compiled language. It has dynamic typing, prototype-based object-orientation, and first-class functions',
            icon: <SiJavascript/>,
        },
        {
            title: 'SCSS / Sass',
            description: 'A preprocessor scripting language that is interpreted or compiled into CSS. Provides variables, nesting, mixins, and selector inheritance',
            icon: <SiSass/>,
        },
        {
            title: 'CSS',
            description: 'A style sheet language used for describing the presentation of a document written in a markup language',
            icon: <SiCss3/>,
        },
        {
            title: 'HTML',
            description: 'The standard markup language for documents designed to be displayed in a web browser',
            icon: <SiHtml5/>,
        },

    ],
    assistiveTechnologies: [
        {
            title: 'Axios',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiAxios/>,
        },
        {
            title: 'React Router',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iure repellat vero!',
            icon: <SiReactrouter/>,
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
        }],
};