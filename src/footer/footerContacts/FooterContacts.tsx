import React, {FC, ReactNode} from 'react';
import styles from './FooterContacts.module.scss';

const FooterContacts: FC<SocialNetworksPropsType> = ({link, icon}) => {
    return (
        <a className={styles.link} href={link}>
            {icon}
        </a>
    );
};

type SocialNetworksPropsType = {
    link: string;
    icon: ReactNode;
}

export default FooterContacts;