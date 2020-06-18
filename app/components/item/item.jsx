import React, { useContext } from 'react';

import context from '../todo/context';

import styles from './item.css';

const Item = (props) => {
    const {dispatch} = useContext(context);
    
    const doneHandler = () => {
        dispatch({type: 'SET_DONE', payload: props.item});
    }
    
    const removeHandler = () => {
        dispatch({type: 'UNSET_ITEM', payload: props.item});
    }

    return <div className={`${styles.item} ${props.item.done ? styles.lineThrough : ''}`} onClick={doneHandler}> 
        {props.item.content}
        <button className={styles.button}>✔</button>
        <button className={styles.button} onClick={removeHandler}>✘</button>
    </div>
};

export default Item;