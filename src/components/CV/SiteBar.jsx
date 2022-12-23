import Contacts from './Contacts';
import TechSkills from './TechSkills';
import SoftSkills from './SoftSkills';
import Language from './Lang';
import StyledList from './Styled';
import avatar from '../../images/user.jpg';

const { SiteBarStyle, AvatarStyle } = StyledList;

const SiteBar = props => {
  return (
    <SiteBarStyle>
      <AvatarStyle src={avatar} alt="user"/>
      <TechSkills />
      <SoftSkills />
      <Language />
      <Contacts />
    </SiteBarStyle>
  );
};

export default SiteBar;
