const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ITEM':
            return { ...state, items: [action.payload, ...state.items] };
        case 'SET_DONE':
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.done = !item.done;
                }
            });
            return { ...state, items: [...state.items] };
        case 'UNSET_DONE':
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.done = !item.done;
                }
            });
            return { ...state, items: [...state.items] };
        case 'UNSET_ITEM':
            return { ...state, items: [...state.items.filter((item) => { return item.id !== action.payload.id })] };
        default:
            return state;
    }
}

export default reducer;