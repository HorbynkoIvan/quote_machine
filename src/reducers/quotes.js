import {FETCH_QOUTES_START, FETCH_QOUTES_SUCCESS, FETCH_QOUTES_FAILURE} from "../actionTypes";

const initialStates = {
    quote: "Hello world",
    author: "I am"
};

export default (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_QOUTES_SUCCESS:
            debugger
            return Object.assign(state, action.payload);
        default:
            return state;
    }
}