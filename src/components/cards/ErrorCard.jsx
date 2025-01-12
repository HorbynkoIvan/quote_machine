import '@scss/error-card.scss';
import {Button} from "@components/button";

export const ErrorCard = ({message, onRetry}) => {
    return (
        <div className="error-card">
            <h2 className="error-title">Oops! Something went wrong.</h2>
            <p className="error-message">{message}</p>
            <Button onClick={onRetry} className="retry-button">Retry</Button>
        </div>
    );
};
