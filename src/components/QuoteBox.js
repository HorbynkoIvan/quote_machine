import React, { Component } from 'react';
import '../scss/qouteBox.scss';

class QuoteBox extends Component {
  render() {
    return (
            <div id="quote-box">
                <i className="fas fa-mobile-alt"></i>
                <div className="quote-text">
                    <i className="fa fa-quote-left"> </i><span id="text"></span>
                </div>
                <div className="quote-author">
                    - <span id="author"></span>
                </div>
                <div className="buttons">
                    <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
                        <i className="fa fa-tumblr"></i>
                    </a>
                    <button className="button" id="new-quote">New quote</button>
                </div>
            </div>
    );
  }
}

export default QuoteBox;
