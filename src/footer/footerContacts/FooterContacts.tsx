import React, {FC} from 'react';
import styles from './FooterContacts.module.scss';

type SocialNetworkPropsType = {
    link: string;
    imgSrc: string;
    alt: string;
}

const FooterContacts: FC<SocialNetworkPropsType> = ({link, imgSrc, alt}) => {
    return (
        <a className={styles.link} href={link}>
            <img className={styles.image} src={imgSrc} alt={alt}/>
        </a>
    );
};

export default FooterContacts;