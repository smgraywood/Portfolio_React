
import github from "../../Images/SocialMediaLinks/github.png"
import HeaderImg from "../../Components/HeaderImg/HeaderImg"

const Projects = () => {

    return(
        <div>
        <h1>Projects</h1>
        <HeaderImg/>
        <div className="aboutme">
				
                <div><a className="project-link" href="https://stacks.herokuapp.com/">Stacks</a><a href="https://github.com/smgraywood/stacks"><img className="github-projects" src ={github}></img></a></div>
                <div><a className="project-link">Decade of Pantone</a><a href="https://github.com/smgraywood/Decade_of_Pantone"><img className="github-projects" src ={github}></img></a></div>
                <div><a className="project-link" href="https://smgraywood.github.io/spring_concentration/">Spring Concentration</a><a href="https://github.com/smgraywood/spring_concentration"><img className="github-projects" src ={github}></img></a></div>
                <div><a className="project-link" href="https://smgraywood.github.io/knots_and_crosses/">Knots and Crosses</a><a href="https://github.com/smgraywood/knots_and_crosses"><img className="github-projects" src ={github}></img></a></div>
                <div><a className="project-link" href="https://smgraywood.github.io/Bad-Bunny-Practice/">Bad Bunny</a><a href="https://github.com/smgraywood/Bad-Bunny-Practice"><img className="github-projects" src ={github}></img></a></div>
			</div>
        </div>
    )
}

export default Projects