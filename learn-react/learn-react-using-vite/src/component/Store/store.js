// store.js
import { createStore } from 'redux';

// Reducer (this will handle how the state changes based on actions)
const rootReducer = (state = { tcount: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { tcount: state.tcount + 1 };
        case 'DECREMENT':
            return { tcount: state.tcount - 1 };
        default:
            return state;
    }
};

// Create store with the reducer
const store = createStore(rootReducer);

export default store;
