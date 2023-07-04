import React, {SyntheticEvent, useState} from 'react';
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import {useInView} from 'react-intersection-observer';
import {FieldError, SubmitHandler, useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {validateEmail} from '../common/validate/validateEmail';
import {publicKey, serviceID, templateID} from '../data/emailJSData';
import {Alert, AlertColor, Snackbar} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';

const Contacts = () => {
    const {ref, inView} = useInView({threshold: 1, triggerOnce: true});

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm<Inputs>();

    const successMessage = 'Your message has been sent successfully';
    const errorMessage = 'Your message has not been sent. Something went wrong.';

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<AlertColor>('success');
    const [alertMessage, setAlertMessage] = useState(successMessage);

    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setLoading(true);
        emailjs.send(serviceID, templateID, data, publicKey)
            .then(() => {
                setSeverity('success');
                setAlertMessage(successMessage);
                setOpen(true);
                reset();
            })
            .catch(() => {
                setSeverity('error');
                setAlertMessage(errorMessage);
                setOpen(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const errorClassName = (error?: FieldError) => {
        return `${styles.error} ${error ? styles.visible : ''}`;
    };

    return (
        <section className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Title>Contacts</Title>
                <form ref={ref} className={`${styles.form} ${inView ? styles.inView : ''}`} id={'contactsForm'}
                      onSubmit={handleSubmit(onSubmit)}>
                    <Fade delay={300} triggerOnce>
                        <div>
                            <input type={'text'} placeholder={'Name'}
                                   {...register('name', {required: 'This field is required'})}/>
                            <span className={errorClassName(errors.name)}>{errors.name?.message}</span>
                        </div>
                    </Fade>
                    <Fade delay={600} triggerOnce>
                        <div>
                            <input type={'text'} placeholder={'E-mail'}
                                   {...register('email', {
                                       required: 'This field is required',
                                       validate: value => validateEmail(value),
                                   })}/>
                            <span className={errorClassName(errors.email)}>{errors.email?.message}</span>
                        </div>
                    </Fade>
                    <Fade delay={900} triggerOnce>
                        <div>
                        <textarea placeholder={'Your message'}
                                  {...register('message', {required: 'This field is required'})}/>
                            <span className={errorClassName(errors.message)}>{errors.message?.message}</span>
                        </div>
                    </Fade>
                    <Fade delay={1200} triggerOnce>
                        <LoadingButton
                            loading={loading}
                            loadingPosition="end"
                            endIcon={<SendIcon/>}
                            variant="text"
                            className={styles.button}
                            type={'submit'}
                            form={'contactsForm'}
                        >
                            Send message
                        </LoadingButton>
                    </Fade>
                </form>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity={severity} sx={{width: '100%'}}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </section>
    );
};

type Inputs = {
    name: string;
    email: string;
    message: string;
};

export default Contacts;