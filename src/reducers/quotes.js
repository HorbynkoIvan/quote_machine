import {FETCH_QUOTES_START, FETCH_QUOTES_SUCCESS, FETCH_QUOTES_FAILURE, SET_NEXT_QUOTE} from "../actionTypes";
import {getRandomQuote} from "../API/functions";

const initialStates = {
    quote: '',
    author: ''
};

export default (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_QUOTES_SUCCESS:
            let quote = getRandomQuote(action.payload);
            return {...state, ...quote};
        /*  let temp = {...state, quotes: action.payload}
          return temp.quotes;*/
        //return Object.assign(state, action.payload);
        case SET_NEXT_QUOTE:
            
        default:
            return state;
    }
}