import React, {FC, ReactNode} from 'react';
import styles from './Title.module.scss';
import {Zoom} from 'react-awesome-reveal';

const Title: FC<TitlePropsType> = ({children}) => {
    return (
        <Zoom triggerOnce className={styles.title}>
            <h2>{children}</h2>
        </Zoom>
    );
};

type TitlePropsType = {
    children: ReactNode
}

export default Title;