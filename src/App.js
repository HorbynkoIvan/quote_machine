import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './scss/common.scss';

import {QuoteBox} from './components/QuoteBox';
import {fetchQuotes, setNextQuote, tweetQuoteAction, tumblrQuoteAction} from "./actions";

const App = ({fetchQuotes, quotes, setNextQuote, tweetQuoteAction, tumblrQuoteAction}) => {
    useEffect(()=>{
        fetchQuotes()
    }, [fetchQuotes]);

    return (
        <div id="wrapper">
            <QuoteBox
                quotes={quotes}
                setNextQuote={setNextQuote}
                tweetQuoteAction={tweetQuoteAction}
                tumblrQuoteAction={tumblrQuoteAction}/>
            <div className="myLink"> by <a href="https://github.com/HorbynkoIvan/quote_machine_react">DidIvan</a>
            </div>
        </div>
    );
}

const mapStateToProps = store => ({
    quotes: store.quotes
});

const mapDispatchToProps = {
    fetchQuotes,
    setNextQuote,
    tweetQuoteAction,
    tumblrQuoteAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
