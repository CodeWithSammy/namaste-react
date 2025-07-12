import { useRouteError } from "react-router";
const Error =()=>{
    const error = useRouteError();
    console.log("Error occurred:", error);
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>We are unable to process your request at the moment. Please try again later.</p>
        </div>
    );
}
export default Error;