import React, {Component} from 'react';
import '../scss/qouteBox.scss';
import {getRandomQuote} from "../API/functions";

class QuoteBox extends Component {
    setNextQuote = (e) => {
        e.preventDefault();
        console.log("next")
    }

    render() {
        debugger
        let quote = this.props.fetched;
        return (
            <div id="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left"> </i><span id="text">{quote.quote}</span>
                </div>
                <div className="quote-author">
                    - <span id="author">{quote.author}</span>
                </div>
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
