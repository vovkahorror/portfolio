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
        link: '',
        icon: <SiLinkedin/>,
        title: 'LinkedIn',
    },
    {
        link: 'mailto:vovkahorror@gmail.com',
        icon: <SiGmail/>,
        title: 'vovkahorror@gmail.com',
    },
    {
        link: 'tel:+380502748009',
        icon: <BsFillTelephoneOutboundFill/>,
        title: '+380502748009',
    },
];