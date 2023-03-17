import React from 'react';
import styles from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css';

const Main = () => {
    return (
        <div className={styles.mainBlock} id={'main'}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi there</span>
                    <h1>I am Volodymyr Yaremchak</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
};

export default Main;