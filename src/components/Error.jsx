import { useRouteError } from "react-router";
import './Error.css'; // Assuming you have a CSS file for styling the error page
const Error = () => {
    const error = useRouteError();
    console.log("Error occurred:", error);
    return (

        <div className="error-page">
            <h1>Oops! Something went wrong.</h1>
            <p>We are unable to process your request at the moment. Please try again later.</p>
            <p>Error Details: {error.status} - {error.statusText}</p>
            <p>{error.message}</p>
            <p>If the problem persists, please contact support.</p>
            <p>Thank you for your understanding.</p>
            <p>Go to <a href="/">Home</a></p>
            <p>Or visit our <a href="/about">About</a> page for more information.</p>
        </div>

    );
}
export default Error;