import { Link } from 'wouter';

function Header({ children }) {
    return (
        <h1>
            <Link to="/">
                <a>{children}</a>
            </Link>
        </h1>
    );
}

export default Header;