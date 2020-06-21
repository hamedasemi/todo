import React, { useContext, useEffect } from 'react';

import context from '../todo/context';

import styles from './filter.css';
import Icon from '../icon/icon';

const Filter = (props) => {
    const { state, dispatch } = useContext(context);

    const filterDoneHandler = () => {
        dispatch({ type: 'FILTER_DONE' });
    };

    const filterUndoneHandler = () => {
        dispatch({ type: 'FILTER_UNDONE' });
    };

    const filterNoneHandler = () => {
        dispatch({ type: 'FILTER_NONE' });
    };

    useEffect(() => {
        dispatch({ type: 'FILTER' });
    }, [state.items, state.filterDone, state.filterUndone]);

    return <div className={styles.filter}>
        <button className={`${styles.button} ${state.filterDone ? styles.activeButton : ''}`} onClick={filterDoneHandler}>
            <Icon className={styles.icon} name="filter" size="24px"></Icon>Done
        </button>
        <button className={`${styles.button} ${state.filterUndone ? styles.activeButton : ''}`} onClick={filterUndoneHandler}>
            <Icon className={styles.icon} name="filter" size="24px"></Icon>Undone
        </button>
        <button className={`${styles.button} ${(state.filterDone || state.filterUndone) ? '' : styles.activeButton}`} onClick={filterNoneHandler}>
            <Icon className={styles.icon} name="filter" size="24px"></Icon>All
        </button>
    </div>
};

export default Filter;