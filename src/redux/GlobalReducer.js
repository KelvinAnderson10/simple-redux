import ActionType from "./reducer/GlobalActionType";

const globalState = {
    globalNumber : 1
}

const rootReducer = (state= globalState, action) => {
    if (action.type === ActionType.PLUS){
        return {
            ...state,
            globalNumber: state.globalNumber + 1
        }
    }
    else if (action.type === ActionType.MINUS){
        return {
            ...state,
            globalNumber: state.globalNumber - 1
        }
    }
    else if (action.type === ActionType.MULTI){
        return {
            ...state,
            globalNumber: state.globalNumber * 2
        }
    }
    return state;
}

export default rootReducer;