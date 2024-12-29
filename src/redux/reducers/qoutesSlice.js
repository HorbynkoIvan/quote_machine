import {createSlice} from '@reduxjs/toolkit'
import {getRandomQuote, setColor, tumblrQuote, tweetQuote} from "../../helpers/helpers";

const initialState = {
    quotes: [],
    currentQuote: {
        quote: '',
        author: ''
    }
}

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        fetchQuotesAction: (state, action) => {
            state.quotes = action.payload;
            state.currentQuote = getRandomQuote(state.quotes) || { quote: 'No quote available', author: '' };
            setColor();
        },
        nextQuoteAction: (state) => {
            state.currentQuote = getRandomQuote(state.quotes) || { quote: 'No quote available', author: '' };
            setColor();
        },
        tweetQuoteAction: (state) => {
            tweetQuote(state.currentQuote.quote, state.currentQuote.author);
        },
        tumblrQuoteAction: (state) => {
            tumblrQuote(state.currentQuote.quote, state.currentQuote.author);
        },
    },
})

export const {fetchQuotesAction, nextQuoteAction, tweetQuoteAction, tumblrQuoteAction} = quotesSlice.actions

export default quotesSlice.reducer