import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import photo from '../assets/images/photo.jpg';

const Main = () => {
    return (
        <div className={styles.mainBlock} id={'main'}>
            <div className={`${styleContainer.container} ${styles.greetingContainer}`}>
                <div className={styles.greeting}>
                    <span>Hi there</span>
                    <h1>I am <br/> Volodymyr Yaremchak</h1>
                    <p className={styles.profession}>A Frontend Developer</p>
                </div>
                <div className={styles.photo} style={{backgroundImage: `url(${photo})`}}></div>
            </div>
        </div>
    );
};

export default Main;