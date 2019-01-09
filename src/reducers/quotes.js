import {
    FETCH_QUOTES_START,
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_FAILURE,
    SET_NEXT_QUOTE,
    TWEET_QUOTE,
    TUMBLR_QUOTE
} from "../actionTypes";
import {getRandomQuote, setColor, tweetQuote, tumblrQuote} from "../API/functions";

const initialStates = {
    quote: '',
    author: ''
};
let quote;

export default (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_QUOTES_SUCCESS:
            quote = getRandomQuote(action.payload);
            setColor();
            return {...state, ...quote};
        /*  let temp = {...state, quotes: action.payload}
          return temp.quotes;*/
        //return Object.assign(state, action.payload);
        case SET_NEXT_QUOTE:
            quote = getRandomQuote(action.payload);
            setColor();
            return {...state, ...quote};
        case TWEET_QUOTE:
            tweetQuote(quote.quote, quote.author);
            return state;
        case TUMBLR_QUOTE:
            tumblrQuote(quote.quote, quote.author);
            return state;
        default:
            return state;
    }
}