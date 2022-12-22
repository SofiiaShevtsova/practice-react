import Contacts from "./Contacts";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";

const SiteBar = props => {
    return (
        <div>
         <img src="./images/user.jpg" alt="user" className="olecia" />          <Contacts/>
         <TechSkills/>
         <SoftSkills/>
        </div>
    )
}

export default SiteBar