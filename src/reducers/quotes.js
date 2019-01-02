import {FETCH_QOUTES_START, FETCH_QOUTES_SUCCESS, FETCH_QOUTES_FAILURE} from "../actionTypes";
import {getRandomQuote} from "../API/functions";

const initialStates = {
    quote: '',
    author: ''
};

export default (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_QOUTES_SUCCESS:
            let quote = getRandomQuote(action.payload);
            console.log("quote " + quote)
            debugger
           //return Object.assign({}, {state}, {quote});
        return {...state, ...quote};
        /*  let temp = {...state, quotes: action.payload}
          return temp.quotes;*/
        //return Object.assign(state, action.payload);
        default:
            return state;
    }
}