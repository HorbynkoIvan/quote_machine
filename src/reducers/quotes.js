import {FETCH_QOUTES_START, FETCH_QOUTES_SUCCESS, FETCH_QOUTES_FAILURE} from "../actionTypes";

const initialStates = {

};

export default (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_QOUTES_SUCCESS:
            debugger
            return {...state, quotes: action.payload};
            //return Object.assign(state, action.payload);
        default:
            return state;
    }
}