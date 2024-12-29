import './scss/common.scss';
import {QuoteBox} from './components/QuoteBox';

const App = () => {
    return (
        <div id="wrapper">
            <QuoteBox/>
            <div className="myLink"> by <a href="https://github.com/HorbynkoIvan/quote_machine_react">DidIvan</a>
            </div>
        </div>
    );
}

export default App;
