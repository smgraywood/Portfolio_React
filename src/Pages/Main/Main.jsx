import HeaderImg from "../../Components/HeaderImg/HeaderImg";
import profile from "../../Images/profile.png";
import SocialMediaNav from "../../Components/SocialMediaNav/SocialMediaNav";

const Main = () => {
	return (
		<div>
			<HeaderImg />
            <br/>
			<img
				src={profile}
				className="profile"
				alt="headshot of woman smiling at camera wearing a yellow sweater"
			></img>
			<p className="Hello">Hi, I'm Sarah.</p>
			<SocialMediaNav />
			<div className="ProfileDescriptionContainer">
				<p className="ProfileDescription">
					San Jose Based Software Engineer with a Passion for UI/UX |
					JS Wiz | Equity & Inclusion Expert | Latina in Tech{" "}
				</p>
			</div>
		</div>
	);
};

export default Main;
