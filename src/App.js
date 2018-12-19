import React, { Component } from 'react';
import './scss/common.scss';

import QuoteBox from './components/QuoteBox';

class App extends Component {
  render() {
    return (
        <div id="wrapper">
            <QuoteBox/>
            <div className="footer"> by <a href="https://github.com/HorbynkoIvan/quote_machine_react">DidIvan</a></div>
        </div>
    );
  }
}

export default App;
