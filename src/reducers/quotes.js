import {FETCH_QOUTES_START, FETCH_QOUTES_SUCCESS, FETCH_QOUTES_FAILURE} from "../actionTypes";

const initialStates = {
    quotes: []
};

export default (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_QOUTES_SUCCESS:
            let temp = {...state, quotes: action.payload}
            return temp.quotes;
        //return Object.assign(state, action.payload);
        default:
            return state;
    }
}