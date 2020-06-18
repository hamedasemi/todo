import React, { useContext } from 'react';

import context from '../todo/context';

import Item from '../item/item'

const Items = () => {
    const { state } = useContext(context);

    return <div>{state.items.map((item) => {
        return <Item key={item.id} item={item}></Item>
    })}</div>
};

export default Items;