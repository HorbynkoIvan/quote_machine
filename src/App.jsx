import '@scss/common.scss';
import {Footer} from "@components/footer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchQuotes} from "@helpers/helpers";
import {setRandomColor, setRandomQuote} from "@redux/reducers/qoutesSlice";
import {Loader} from "@components/loader";
import {Card, ErrorCard} from "@components/cards";

const App = () => {
    const {isLoading, error, currentQuote, color, textColor} = useSelector((state) => state.quotes);
    const dispatch = useDispatch();

    useEffect(() => {
        document.documentElement.style.setProperty('--dynamic-color', color);
        document.documentElement.style.setProperty('--dynamic-text-color', textColor);
    }, [color]);

    useEffect(() => {
        dispatch(fetchQuotes())
    }, [dispatch])

    const handleNewQuote = () => {
        dispatch(setRandomQuote());
        dispatch(setRandomColor());
    };

    if (isLoading) return <Loader/>

    return (
        <div id="wrapper">
            {!isLoading && error && (
                <ErrorCard
                    message="We couldn't fetch the quotes. Please try again."
                    onRetry={() => dispatch(fetchQuotes())}
                />
            )}
            {!isLoading && !error && <Card handleNewQuote={handleNewQuote} currentQuote={currentQuote}/>}
            <Footer/>
        </div>
    );
}

export default App;
