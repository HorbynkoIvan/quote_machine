import {FETCH_QUOTES_START, FETCH_QUOTES_SUCCESS, FETCH_QUOTES_FAILURE, SET_NEXT_QUOTE} from "../actionTypes";
import {getRandomQuote} from "../API/functions";

const initialStates = {
    quote: '',
    author: ''
};
let quote;

export default (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_QUOTES_SUCCESS:
            const data = action.payload;
            quote = getRandomQuote(action.payload);
            return {...state, ...quote};
        /*  let temp = {...state, quotes: action.payload}
          return temp.quotes;*/
        //return Object.assign(state, action.payload);
        case SET_NEXT_QUOTE:
            debugger
            quote = getRandomQuote(action.payload);
            return {...state, ...quote};
        default:
            return state;
    }
}