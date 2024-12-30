import '@scss/button.scss';

export const Button = ({children, className, ...props}) =>
    <button className={`button ${className || ''}`} role="button" {...props}>{children}</button>
