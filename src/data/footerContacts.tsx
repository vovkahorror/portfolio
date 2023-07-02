import {SiGithub, SiGmail, SiLinkedin} from 'react-icons/si';
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import React from 'react';

export const footerContacts = [
    {
        link: 'https://github.com/vovkahorror',
        icon: <SiGithub/>,
        title: 'vovkahorror',
    },
    {
        link: 'https://linkedin.com/in/volodymyr-yaremchak',
        icon: <SiLinkedin/>,
        title: 'LinkedIn',
    },
    {
        link: 'mailto:v.yaremchak@gmail.com',
        icon: <SiGmail/>,
        title: 'vovkahorror@gmail.com',
    },
    {
        link: 'tel:+380502748009',
        icon: <BsFillTelephoneOutboundFill/>,
        title: '+380502748009',
    },
];