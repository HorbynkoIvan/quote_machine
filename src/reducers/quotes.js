import {
    FETCH_QUOTES_SUCCESS,
    SET_NEXT_QUOTE,
    TWEET_QUOTE,
    TUMBLR_QUOTE
} from "../actionTypes";

import {getRandomQuote, setColor, tweetQuote, tumblrQuote} from "../helpers/helpers";

const initialStates = {
    quote: '',
    author: ''
};
let quote;

export default (state = initialStates, {type, payload}) => {
    switch (type) {
        case FETCH_QUOTES_SUCCESS:
            quote = getRandomQuote(payload);
            setColor();
            return {...state, ...quote};
        case SET_NEXT_QUOTE:
            quote = getRandomQuote(payload);
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
