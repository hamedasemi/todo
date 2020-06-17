import React, { useReducer } from 'react';

import context from './context';

import reducer from './reducer'

const Todo = ({ children }) => {
    const { state, dispatch } = useReducer(reducer, { todo: [] });

    return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
};

export default Todo;