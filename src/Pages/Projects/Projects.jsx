import github from "../../Images/SocialMediaLinks/github.png";
import HeaderImg from "../../Components/HeaderImg/HeaderImg";

const Projects = () => {
	return (
		<>
			<h1>Projects</h1>
			<HeaderImg />
			<div className="infodiv">
				<div>
					<a
						className="project-link"
						href="https://stacks.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						Stacks
					</a>
					<a
						href="https://github.com/smgraywood/stacks"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="github-projects"
							src={github}
							alt="github logo"
						></img>
					</a>
				</div>
				<div>
					<a className="project-link">Decade of Pantone</a>
					<a
						href="https://github.com/smgraywood/Decade_of_Pantone"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="github-projects"
							src={github}
							alt="github logo"
						></img>
					</a>
				</div>
				<div>
					<a
						className="project-link"
						href="https://a-week-in-the-stars.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						A Week in the Stars
					</a>
					<a
						href="https://github.com/smgraywood/A_Week_in_the_Stars"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="github-projects"
							src={github}
							alt="github logo"
						></img>
					</a>
				</div>
				<div>
					<a
						className="project-link"
						href="https://smgraywood.github.io/spring_concentration/"
						target="_blank"
						rel="noreferrer"
					>
						Spring Concentration
					</a>
					<a
						href="https://github.com/smgraywood/spring_concentration"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="github-projects"
							src={github}
							alt="github logo"
						></img>
					</a>
				</div>
				<div>
					<a
						className="project-link"
						href="https://smgraywood.github.io/knots_and_crosses/"
						target="_blank"
                        rel="noreferrer"
					>
						Knots and Crosses
					</a>
					<a
						href="https://github.com/smgraywood/knots_and_crosses"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="github-projects"
							src={github}
							alt="github logo"
						></img>
					</a>
				</div>
				<div>
					<a
						className="project-link"
						href="https://smgraywood.github.io/Bad-Bunny-Practice/"
						target="_blank"
						rel="noreferrer"
					>
						Bad Bunny
					</a>
					<a
						href="https://github.com/smgraywood/Bad-Bunny-Practice"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="github-projects"
							src={github}
							alt="github logo"
						></img>
					</a>
				</div>
			</div>
		</>
	);
};

export default Projects;
