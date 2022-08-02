// store = storage value atau state secara global
// reducer = berfungsi untuk melakukan update pada store
// action = proses pemanggilan reducer
// subscription = pemanggilan store yang diperlukan

// Create_store langsung subscribe, baru bisa dispatch

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    name: 'Doni',
    age: 20
}

// reducer
const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "ADD_AGE":
            return{
                ...state,
                age: state.age + 1
            }
        case "CHANGE_NAME":
            return{
                ...state,
                name: action.newName
            }
    
        default:
            return state;
    }
}

// store
const store = createStore(rootReducer)
console.log(store.getState());

// subscription
store.subscribe(() => {
    console.log("store change", store.getState());
})

// dispatching action
store.dispatch({
    type: "ADD_AGE"
})

store.dispatch({
    type: "CHANGE_NAME", newName : "Octa"
})

console.log(store.getState());