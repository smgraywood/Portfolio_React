import email from "../../Images/SocialMediaLinks/email.png";
import github from "../../Images/SocialMediaLinks/github.png";
import instagram from "../../Images/SocialMediaLinks/instagram.png";
import linkedin from "../../Images/SocialMediaLinks/linkedin.png";
import resume from "../../Images/SocialMediaLinks/resume.png";
import "./SocialMediaNav.css"

function SocialMediaNav() {
	return (
		<div className="OuterContainer">
			<div className="InnerContainer">
				<div className="SocMediaList">
					<ul>
						<li className="LinkedIn">
							<a href="https://www.linkedin.com/in/smgraywood/" target="_blank">
								<img src={linkedin}></img>
							</a>
						</li>
						<li className="Instagram">
							<a href="https://www.instagram.com/tech.quiero.mucho/" target="blank">
								<img src={instagram}></img>
							</a>
						</li>
						<li className="Email">
							<a href="mailto:smgraywood@gmail.com" target="blank">
								<img src={email}></img>
							</a>
						</li>
						<li className="Resume">
							<a href="https://docs.google.com/document/d/1W2m2NFGCCt0cuoSgHJ2SEZwfyfEBuDzOs5f_23Ki4rQ/edit?usp=sharing" target="blank">
								<img src={resume}></img>
							</a>
						</li>
						<li className="Github">
							<a href="https://github.com/smgraywood" target="_blank">
								<img src={github}></img>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SocialMediaNav;
