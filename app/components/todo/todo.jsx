import React, { useReducer } from 'react';

import context from './context';

import reducer from './reducer';


const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { items: [] });

    return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
};

export default TodoProvider;