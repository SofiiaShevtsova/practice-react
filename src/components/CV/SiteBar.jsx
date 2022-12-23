import Contacts from './Contacts';
import TechSkills from './TechSkills';
import SoftSkills from './SoftSkills';
import avatar from '../../images/user.jpg';

const SiteBar = props => {
  return (
    <div>
      <img src={avatar} alt="user" className="olecia" />
      <Contacts />
      <TechSkills />
      <SoftSkills />
    </div>
  );
};

export default SiteBar;
