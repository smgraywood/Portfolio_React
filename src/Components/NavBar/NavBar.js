import { Link } from "react-router-dom";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar(props) {
	return (
		<nav className="NavBar">
			<NavLink
				to="/"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				HOME
			</NavLink>
			<NavLink
				to="/main"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				MAIN
			</NavLink>
			<NavLink
				to="/about"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				ABOUT ME
			</NavLink>
			<NavLink
				to="/technologies"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				TECHNOLOGIES
			</NavLink>
			<NavLink
				to="/projects"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				PROJECTS
			</NavLink>
		</nav>
	);
}

export default NavBar;
