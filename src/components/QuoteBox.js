import React, {Component} from 'react';
import '../scss/qouteBox.scss';
import {getRandomQuote} from "../API/functions";

class QuoteBox extends Component {
    setNextQuote = (e) => {
        e.preventDefault();
        console.log("next")
    }

    render() {
        let quote = getRandomQuote(this.props.fetched.quotes);
        return (
            <div id="quote-box">
                {quote}
                <div className="buttons">
                    <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
                        <i className="fa fa-tumblr"></i>
                    </a>
                    <button className="button" id="new-quote" onClick={this.setNextQuote}>New quote</button>
                </div>
            </div>
        );
    }
}

export default QuoteBox;
