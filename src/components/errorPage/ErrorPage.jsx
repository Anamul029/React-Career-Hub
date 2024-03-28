import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h4>Opps!!!</h4>
            <button>
            <Link to="/">GO BACK TO HOME</Link>
            </button>
           
        </div>
    );
};

export default ErrorPage;