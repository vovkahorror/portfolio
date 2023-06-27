import React, {FC, ReactNode} from 'react';
import styles from './Title.module.scss';
import {Zoom} from 'react-awesome-reveal';

const Title: FC<TitlePropsType> = ({id, children}) => {
    return (
        <Zoom triggerOnce className={styles.title}>
            <h2 id={id}>{children}</h2>
        </Zoom>
    );
};

type TitlePropsType = {
    id?: string
    children: ReactNode
}

export default Title;