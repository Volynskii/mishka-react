const redux = require('redux');
const initialState = {
    index:0
}

// Reducer
const reducer = (state = initialState, action) => {
if (action.type === 'NEXT') {
    return {
        index: state.index + 1
    }
}
return state;
};

//Store
const store = redux.createStore(reducer);
console.log(store.getState())

// Actions
const addCounter = {
    type:'NEXT'
};

store.dispatch(addCounter);
console.log(store.getState());
