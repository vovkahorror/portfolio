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
            description: 'A front-end JavaScript library for building user interfaces based on components, the core idea of which is the concept of a virtual DOM',
            icon: <SiReact/>,
        },
        {
            title: 'Redux / Redux Toolkit',
            description: 'A predictable state management library for JavaScript applications that provides a centralized and predictable way to manage the state of an application',
            icon: <SiRedux/>,
        },
        {
            title: 'TypeScript',
            description: 'A high-level programming language that adds static typing with optional type annotations to JavaScript',
            icon: <SiTypescript/>,
        },
        {
            title: 'JavaScript',
            description: 'A high-level, often just-in-time compiled language, that has dynamic typing, prototype-based object-orientation, and first-class functions',
            icon: <SiJavascript/>,
        },
        {
            title: 'SCSS / Sass',
            description: 'A preprocessor scripting language that is interpreted or compiled into CSS and provides variables, nesting, mixins, and selector inheritance',
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
            description: 'A simple promise based HTTP client for the browser and Node.js. On the client it uses XMLHttpRequests',
            icon: <SiAxios/>,
        },
        {
            title: 'React Router',
            description: 'A routing library for React applications that provides a way to handle client-side routing in a declarative and efficient manner',
            icon: <SiReactrouter/>,
        },
        {
            title: 'Material UI',
            description: 'A comprehensive library of components that features implementation of Google\'s Material Design system',
            icon: <SiMui/>,
        },
        {
            title: 'React Hook Form',
            description: 'A library that helps validate forms in React. Reduces the amount of code need to write while removing unnecessary re-renders',
            icon: <SiReacthookform/>,
        },
        {
            title: 'Storybook',
            description: 'A frontend workshop for building UI components and pages in isolation, that allows to create organized UI systems',
            icon: <SiStorybook/>,
        },
        {
            title: 'Postman',
            description: 'An API platform for building and using APIs, that simplifies each step of the API lifecycle and streamlines collaboration',
            icon: <SiPostman/>,
        },
        {
            title: 'Git',
            description: 'A distributed version control system that tracks changes in any set of computer files, used for coordinating work among programmers collaboratively developing source code',
            icon: <SiGit/>,
        },
        {
            title: 'Unit testing',
            description: 'A software testing method by which individual units of source code are tested to determine whether they are fit for use',
            icon: <RiShieldCheckFill/>,
        }],
};