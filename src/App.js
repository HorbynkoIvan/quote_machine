import React, {Component} from 'react';
import './scss/common.scss';

import QuoteBox from './components/QuoteBox';
import {fetchQuotes} from "./API";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched: {}
        }
    }

    componentDidMount() {
        this.state = fetchQuotes()
        debugger
    }

    render() {
        return (
            <div id="wrapper">
                <QuoteBox fetched = {this.state.fetched}/>
                <div className="myLink"> by <a href="https://github.com/HorbynkoIvan/quote_machine_react">DidIvan</a>
                </div>
            </div>
        );
    }
}

export default App;
