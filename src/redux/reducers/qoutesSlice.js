import {createSlice} from '@reduxjs/toolkit'
import {colors, tumblrQuote, tweetQuote} from "../../helpers/helpers";

const initialState = {
    quotes: [],
    currentQuote: {
        quote: '',
        author: ''
    },
    color: colors[0],
}

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        setQuotes: (state, action) => {
            state.quotes = action.payload.quotes;
        },
        setRandomQuote: (state) => {
            const randomIndex = Math.floor(Math.random() * state.quotes.length);
            state.currentQuote = state.quotes[randomIndex] || { quote: 'No quote available', author: '' };
        },
        setRandomColor: (state) => {
            const randomIndex = Math.floor(Math.random() * colors.length);
            state.color = colors[randomIndex];
        },
        tweetQuoteAction: (state) => {
            tweetQuote(state.currentQuote.quote, state.currentQuote.author);
        },
        tumblrQuoteAction: (state) => {
            tumblrQuote(state.currentQuote.quote, state.currentQuote.author);
        },
    },
})

export const {setQuotes,setRandomQuote,setRandomColor, tweetQuoteAction, tumblrQuoteAction} = quotesSlice.actions

export default quotesSlice.reducer