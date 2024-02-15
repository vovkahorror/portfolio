import styles from './CV.module.scss';
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import React from 'react';
import {Document, Page} from 'react-pdf';
import {Box, Button, Modal} from '@mui/material';
import {FileDownload} from '@mui/icons-material';
import resume from '../assets/documents/Volodymyr_Yaremchak_CV.pdf';
import {ReactComponent as PreloaderImage} from '../assets/icons/preloader.svg';

export const CV = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const downloadFile = async () => {
        try {
            const response = await fetch(resume);
            const blob = await response.blob();

            const url = URL.createObjectURL(blob);

            const element = document.createElement('a');
            element.href = url;
            element.download = 'Volodymyr_Yaremchak.pdf';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    return (
        <section className={styles.cvBlock} id={'cv'}>
            <div className={styles.cvContainer}>
                <Title>My CV</Title>
                <div>
                    <Fade duration={1200} triggerOnce damping={0.3}>
                        <div className={styles.documentWrapper} onClick={handleOpen}>
                            <Document file={resume} loading={<PreloaderImage/>}>
                                <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false}
                                      height={600}/>
                            </Document>
                        </div>
                    </Fade>
                    <Button endIcon={<FileDownload/>} className={styles.button} onClick={downloadFile}>
                        Download
                    </Button>
                </div>

                <Modal open={open} onClose={handleClose}>
                    <Box sx={modalBoxStyle} onClick={handleClose}>
                        <Document file={resume} loading={<PreloaderImage/>}>
                            <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false}/>
                        </Document>
                    </Box>
                </Modal>
            </div>
        </section>
    );
};

const modalBoxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 0,
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'zoom-out',
    outline: 'none',
};