import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import photo from '../assets/images/photo.jpg';

const Main = () => {
    return (
        <section className={styles.mainBlock} id={'main'}>
            <div className={`${styleContainer.container} ${styles.greetingContainer}`}>
                <div className={styles.greeting}>
                    <span>Hi there</span>
                    <h1>I am <br/> <span className={styles.name}>Volodymyr Yaremchak</span></h1>
                    <p className={styles.profession}>A Frontend Developer</p>
                </div>
                <div className={styles.photo} style={{backgroundImage: `url(${photo})`}}></div>
            </div>
        </section>
    );
};

export default Main;