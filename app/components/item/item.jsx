import React, { useContext } from 'react';

import context from '../todo/context';

import styles from './item.css';
import Icon from '../icon/icon';

const Item = (props) => {
    const { dispatch } = useContext(context);

    const doneHandler = () => {
        dispatch({ type: 'SET_DONE', payload: props.item });
    }

    const removeHandler = () => {
        dispatch({ type: 'UNSET_ITEM', payload: props.item });
    }

    const moveUpHandler = (event) => {
        event.stopPropagation();
        dispatch({ type: 'MOVE_UP', payload: props.index });
    }

    const moveDownHandler = (event) => {
        event.stopPropagation();
        dispatch({ type: 'MOVE_DOWN', payload: props.index });
    }

    return <div className={`${styles.item} ${props.item.done ? styles.lineThrough : ''}`} onClick={doneHandler} style={{ animationDelay: `.${props.delay}s` }}>
        <div className={styles.move}>
            <button className={styles.button} onClick={moveUpHandler}><Icon name="up" size="24px"></Icon></button>
            <button className={styles.button} onClick={moveDownHandler}><Icon name="down" size="24px"></Icon></button>
        </div>
        <div className={styles.content}>{props.item.content}</div>
        <button className={styles.button} onClick={removeHandler}><Icon name="cross" size="24px"></Icon></button>
    </div>
};

export default Item;