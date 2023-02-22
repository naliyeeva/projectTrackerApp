import {NotFound} from "../components/StyledComponents/NotFound";

const PageNotFound = () => {
    document.title = "Not Found";

    return (
        <NotFound>
            <h1>404</h1>
            <h4>Page Not Found</h4>
            <p>It seems like the page you are looking for does not exist</p>
        </NotFound>
    );
}

export default PageNotFound;