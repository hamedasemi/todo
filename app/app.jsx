import React, { } from 'react';
import { render } from 'react-dom';

import styles from './app.css';

import Todo from './components/todo/todo';

const App = () => {
    return <div className={styles.app}>
        <Todo>

        </Todo>
    </div>
};

render(<App />, document.querySelector('main'));