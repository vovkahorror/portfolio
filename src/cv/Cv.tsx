import React, {useEffect, useCallback, useState} from 'react';
import styles from './Cv.module.scss';
import {Fade} from 'react-awesome-reveal';
import {Backdrop, Box, Button, Modal} from '@mui/material';
import {FileDownload} from '@mui/icons-material';
import resume from '../assets/documents/Volodymyr_Yaremchak_CV.pdf';
import {CvDocument} from './cv-document/CvDocument';
import Title from '../common/components/title/Title';

export const Cv = ({setIsLoaded}: CvPropsType) => {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);

    const downloadFile = useCallback(async (fileUrl: URL) => {
        try {
            const response = await fetch(fileUrl);
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
    }, []);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const response = await fetch(resume);
                const blob = await response.blob();
                const reader = new FileReader();

                reader.readAsDataURL(blob);
                reader.onload = () => setIsLoaded(true);
            } catch (error) {
                console.error('Error fetching or reading file:', error);
            }
        };

        fetchResume();
    }, [setIsLoaded]);

    return (
        <section className={styles.cvBlock} id={'cv'}>
            <div className={styles.cvContainer}>
                <Title>My CV</Title>
                <div>
                    <Fade duration={1200} triggerOnce damping={0.3}>
                        <div className={styles.documentWrapper} onClick={handleOpen}>
                            <CvDocument file={resume} mode={'compact'}/>
                        </div>
                    </Fade>
                    <Button endIcon={<FileDownload/>} className={styles.button} onClick={() => downloadFile(resume)}>
                        Download
                    </Button>
                </div>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    keepMounted
                    closeAfterTransition
                    slots={{backdrop: Backdrop}}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Box sx={modalBoxStyle} onClick={handleClose}>
                        <CvDocument file={resume} mode={'fullScreen'}/>
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

interface CvPropsType {
    setIsLoaded: (isLoaded: boolean) => void;
}
