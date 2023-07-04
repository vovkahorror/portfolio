import React from 'react';
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import {useInView} from 'react-intersection-observer';
import {FieldError, SubmitHandler, useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {validateEmail} from '../common/validate/validateEmail';
import {publicKey, serviceID, templateID} from '../data/emailJSData';


const Contacts = () => {
    const {ref, inView} = useInView({threshold: 1, triggerOnce: true});

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        emailjs.send(serviceID, templateID, data, publicKey)
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error.text);
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
                            <input type={'email'} placeholder={'E-mail'}
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
                        <button className={styles.button} form={'contactsForm'}>
                            Send message
                        </button>
                    </Fade>
                </form>
            </div>
        </section>
    );
};

type Inputs = {
    name: string;
    email: string;
    message: string;
};

export default Contacts;