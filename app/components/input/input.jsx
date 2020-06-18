import React, { useContext, useState } from 'react';

import context from '../todo/context';

import styles from './input.css';

const Input = () => {
    const [todo, setTodo] = useState('');
    const { dispatch } = useContext(context);

    const changeHandler = (event) => {
        setTodo(event.target.value);
    };
    
    const keyPressHandler = (event) => {
        if (event.which === 13 && todo) {
            dispatch({ type: 'SET_ITEM', payload: { content: todo, id: new Date().valueOf(), done: false } })
            setTodo('');
        }
    };
    return <input className={styles.input} type="text" placeholder='Add todo' value={todo} onKeyPress={keyPressHandler} onChange={changeHandler}/>
};

export default Input;