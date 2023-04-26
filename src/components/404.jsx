import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/home">Go back to Home</Link>
        </div>
    );
    }

export default PageNotFound;