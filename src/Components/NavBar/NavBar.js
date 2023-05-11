import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/main">MAIN</Link>
            <Link to="/about">ABOUT ME</Link>
            <Link to="/technologies">TECHNOLOGIES</Link>
            <Link to="/projects">PROJECTS</Link>
        </nav>
    );
}

export default NavBar;