import React, {Component} from 'react';
import {connect} from 'react-redux';
import './scss/common.scss';

import {QuoteBox} from './components/QuoteBox';
import {fetchQuotes, setNextQuote, tweetQuoteAction, tumblrQuoteAction} from "./actions";

//import {getRandomQuote} from "./API/functions";

class App extends Component {

    componentWillMount() {
        this.props.fetchQuotes()
    }

    render() {
        //console.log(this.props.quotes)
        return (
            <div id="wrapper">
                <QuoteBox
                    quotes={this.props.quotes}
                    setNextQuote={this.props.setNextQuote}
                    tweetQuoteAction={this.props.tweetQuoteAction}
                    tumblrQuoteAction={this.props.tumblrQuoteAction}/>
                <div className="myLink"> by <a href="https://github.com/HorbynkoIvan/quote_machine_react">DidIvan</a>
                </div>
            </div>
        );
    }
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
