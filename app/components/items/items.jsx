import React, { useContext } from 'react';

import context from '../todo/context';

import Item from '../item/item';
import styles from './items.css';

const Items = () => {
    const { state } = useContext(context);

    return <div className={styles.items}>{state.items.map((item, index) => {
        return <Item key={item.id} item={item} index={index} delay={index ? Math.floor(Math.random()*10)%10 : 0}></Item>
    })}</div>
};

export default Items;