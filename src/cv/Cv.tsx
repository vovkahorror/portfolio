import React from 'react';
import styles from './Cv.module.scss';
import {Fade} from 'react-awesome-reveal';
import {FileDownload} from '@mui/icons-material';
import cvImage from '../assets/images/Volodymyr_Yaremchak_CV.webp';
import Title from '../common/components/title/Title';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export const Cv = () => {
    const cvLink = 'https://www.dropbox.com/scl/fi/ayt8qf3jrhtfvt7gi4g0c/Volodymyr_Yaremchak_CV.pdf?rlkey=qhuius4jvtxn7ekhl8a5qb3r0&st=amwvxdjl&dl=0&raw=1';

    return (
        <section className={styles.cvBlock} id={'cv'}>
            <div className={styles.cvContainer}>
                <Title>My CV</Title>
                <div>
                    <Fade duration={1200} triggerOnce damping={0.3}>
                        <PhotoProvider maskOpacity={0.8} maskClosable={true} bannerVisible={false}>
                            <PhotoView src={cvImage}>
                                <img className={styles.cvImage} src={cvImage} alt="cv"/>
                            </PhotoView>
                        </PhotoProvider>
                    </Fade>

                    <Fade duration={1200} triggerOnce damping={0.3}>
                        <a href={cvLink} target="_blank" className={styles.button} download>
                            <FileDownload/>
                            <span>Download</span>
                        </a>
                    </Fade>
                </div>
            </div>
        </section>
    );
};
