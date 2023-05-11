import HeaderImg from "../../Components/HeaderImg/HeaderImg"
import profile from "../../Images/profile.png";
import SocialMediaNav from "../../Components/SocialMediaNav/SocialMediaNav"

const Main = () => {

    return(
        <div>
        <h1>Main</h1>
        <HeaderImg/>
        <img src={profile} className="profile"></img>
        <p className="Hello">Hi, I'm Sarah.</p>
        <SocialMediaNav/>
        </div>
    )
}

export default Main