import React, {Component} from 'react';
import {connect} from 'react-redux';
import './scss/common.scss';

import QuoteBox from './components/QuoteBox';
import {fetchQuotes} from "./actions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched: {}
        }
    }

    componentDidMount() {
        fetchQuotes()
    }

    render() {
        return (
            <div id="wrapper">
                <QuoteBox fetched={this.state.fetched}/>
                <div className="myLink"> by <a href="https://github.com/HorbynkoIvan/quote_machine_react">DidIvan</a>
                </div>
            </div>
        );
    }
}

/*const mapStateToProps = (state) => ({
    return
});*/

const mapDispatchToProps = {
    fetchQuotes
};

export default connect(null, mapDispatchToProps)(App);
