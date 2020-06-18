import React, { } from 'react';
import { render, useReducer } from 'react-dom';

import styles from './app.css';

import Todo from './components/todo/todo';
import Input from './components/input/input';
import Items from './components/items/items';

const App = () => {
    return <div className={styles.app}>
        <Todo>
            <Input></Input>
            <Items></Items>
        </Todo>
    </div>
};

render(<App />, document.querySelector('main'));