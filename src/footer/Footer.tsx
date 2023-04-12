import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import FooterContacts from './footerContacts/FooterContacts';
import {v1} from 'uuid';
import {SiGithub, SiGmail, SiLinkedin} from 'react-icons/si';
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';

const Footer = () => {
    const footerContacts = [
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

    return (
        <footer className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.footerTitle}>Volodymyr Yaremchak</h2>
                <div className={styles.contacts}>
                    {footerContacts.map(contact => <FooterContacts key={v1()} link={contact.link}
                                                                   icon={contact.icon}/>)}
                </div>
                <span className={styles.year}>2023</span>
            </div>
        </footer>
    );
};

export default Footer;