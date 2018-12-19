import React, { Component } from 'react';
import './scss/common.scss';

class App extends Component {
  render() {
    return (
        <div id="wrapper">
            <div id="quote-box">
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
            <div className="footer"> by <a href="https://github.com/HorbynkoIvan/quote_machine_react">DidIvan</a></div>
        </div>
    );
  }
}

export default App;
