import styles from './CV.module.scss';
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import React from 'react';
import {Document, Page} from 'react-pdf';
import {Button} from '@mui/material';
import {FileDownload} from '@mui/icons-material';

export const CV = () => {
    const resumeUrl = 'https://www.dropbox.com/scl/fi/91rwzbse2mxltsy9x63hd/Volodymyr_Yaremchak_CV.pdf?rlkey=3hn3flcu7tsk8rx3s167y562a&dl=0&raw=1';

    const downloadFile = async () => {
        try {
            const response = await fetch(resumeUrl);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const element = document.createElement('a');
            element.href = url;
            element.download = 'Volodymyr_Yaremchak.pdf';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        } catch (error) {
            console.error('File download error:', error);
        }
    };

    return (
        <section className={styles.cvBlock} id={'cv'}>
            <div className={styles.cvContainer}>
                <Title>My CV</Title>
                <Fade duration={1200} triggerOnce damping={0.3}>
                    <div className={styles.documentWrapper}>
                        <Document file={resumeUrl}>
                            <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false}
                                  width={400}/>
                        </Document>
                    </div>
                </Fade>
                <Button endIcon={<FileDownload/>} className={styles.button} onClick={downloadFile}>
                    Download
                </Button>
            </div>
        </section>
    );
};