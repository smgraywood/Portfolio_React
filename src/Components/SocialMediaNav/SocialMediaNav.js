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
							<a href="https://www.linkedin.com/in/smgraywood/" target="_blank" rel="noreferrer">
								<img src={linkedin} alt="linkedin logo representing linkedin link"></img>
							</a>
						</li>
						<li className="Instagram">
							<a href="https://www.instagram.com/tech.quiero.mucho/" target="blank" rel="noreferrer">
								<img src={instagram} alt="instagram logo representing instagram link"></img>
							</a>
						</li>
						<li className="Email">
							<a href="mailto:smgraywood@gmail.com" target="blank" rel="noreferrer">
								<img src={email} alt="envelope logo representing email link"></img>
							</a>
						</li>
						<li className="Resume">
							<a href="https://docs.google.com/document/d/1W2m2NFGCCt0cuoSgHJ2SEZwfyfEBuDzOs5f_23Ki4rQ/edit?usp=sharing" target="blank" rel="noreferrer">
								<img src={resume} alt="resume logo representing resume link"></img>
							</a>
						</li>
						<li className="Github">
							<a href="https://github.com/smgraywood" target="_blank" rel="noreferrer">
								<img src={github} alt="github logo representing github link"></img>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SocialMediaNav;
