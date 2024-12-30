import {createSlice} from '@reduxjs/toolkit'
import {colors, getRandomIndex, tumblrQuote, tweetQuote} from "../../helpers/helpers";

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
            state.quotes = action.payload.quotes || [];
        },
        setRandomQuote: (state) => {
            if (state.quotes.length > 0) {
                const randomIndex = getRandomIndex(state.quotes);
                state.currentQuote = state.quotes[randomIndex];
            } else {
                state.currentQuote = { quote: 'No quotes available', author: '' };
            }
        },
        setRandomColor: (state) => {
            const randomIndex = getRandomIndex(colors);
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

export const {setQuotes, setRandomQuote, setRandomColor, tweetQuoteAction, tumblrQuoteAction} = quotesSlice.actions

export default quotesSlice.reducer