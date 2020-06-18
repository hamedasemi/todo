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

    return <div className={`${styles.item} ${props.item.done ? styles.lineThrough : ''}`} onClick={doneHandler} style={{ animationDelay: `.${props.delay}s` }}>
        <div>{props.item.content}</div>
        {/* <button className={styles.button} onClick={doneHandler}><Icon name="check" size="24px"></Icon></button> */}
        <button className={styles.button} onClick={removeHandler}><Icon name="cross" size="24px"></Icon></button>
    </div>
};

export default Item;