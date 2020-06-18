import React, { useReducer, useEffect } from 'react';

import context from './context';

import reducer from './reducer';


const TodoProvider = ({ children }) => {
    let initialState = { items: [] };

    if(localStorage.getItem('items')) {
        initialState = JSON.parse(localStorage.getItem('items'));
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(state))
    }, [state]);

    return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
};

export default TodoProvider;