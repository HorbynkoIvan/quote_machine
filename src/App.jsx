import '@scss/common.scss';
import { Card} from '@components/quoteBox';

const App = () => {
    return (
        <div id="wrapper">
            <Card/>
            <div className="my-link"> by <a href="https://github.com/HorbynkoIvan/quote_machine">DidIvan</a>
            </div>
        </div>
    );
}

export default App;
