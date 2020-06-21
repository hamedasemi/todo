import React, { useReducer, useEffect } from 'react';

import context from './context';

import reducer from './reducer';


const TodoProvider = ({ children }) => {
    let initialState = {
        items: [{ content: "Bring an umbrella", id: 1592751723302, done: false },
        { content: "Organise photo shoot", id: 1592751709592, done: false },
        { content: "Design a prototype", id: 1592751651633, done: true },
        { content: "2:00 Meet with Laura", id: 1592751597364, done: false },
        { content: "Polish brand idea", id: 1592751605817, done: false }], filteredItems: []
    };

    if (localStorage.getItem('items')) {
        initialState = JSON.parse(localStorage.getItem('items'));
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(state))
    }, [state]);

    return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
};

export default TodoProvider;