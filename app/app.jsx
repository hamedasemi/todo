import React, { } from 'react';
import { render, useReducer } from 'react-dom';

import styles from './app.css';

import Todo from './components/todo/todo';
import Input from './components/input/input';
import Items from './components/items/items';
import Filter from './components/filter/filter';

const App = () => {
    return <div className={styles.app}>
        <Todo>
            <Input></Input>
            <Filter></Filter>
            <Items></Items>
        </Todo>
    </div>
};

render(<App />, document.querySelector('main'));