const reducer = (state, action) => {
    switch (action.type) {
        case 'MOVE_UP':
            if (0 < action.payload) {
                const target = state.items[action.payload];
                state.items[action.payload] = state.items[action.payload - 1]
                state.items[action.payload - 1] = target;
            }
            return { ...state, items: [...state.items] };
        case 'MOVE_DOWN':
            if (action.payload < state.items.length - 1) {
                const target = state.items[action.payload];
                state.items[action.payload] = state.items[action.payload + 1]
                state.items[action.payload + 1] = target;
            }
            return { ...state, items: [...state.items] };
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
        case 'FILTER_DONE':
            return { ...state, filterDone: true, filterUndone: false };
        case 'FILTER_UNDONE':
            return { ...state, filterDone: false, filterUndone: true };
        case 'FILTER_NONE':
            return { ...state, filterDone: false, filterUndone: false };
        case 'FILTER':
            let items = [...state.items];
            if (state.filterDone) {
                items = items.filter((item) => { return item.done })
            }
            if (state.filterUndone) {
                items = items.filter((item) => { return !item.done })
            }
            return { ...state, filteredItems: [...items] };
        default:
            return state;
    }
}

export default reducer;