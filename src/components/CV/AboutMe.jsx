import StyledList from "./Styled";

const{AboutMeStyle, SloganStyle}= StyledList

const AboutMe = props => {
  return (
    <AboutMeStyle>
      <SloganStyle>"Self-development is the way to self-knowledge"</SloganStyle>
      I am 32 years old. I am Ukrainian. I currently live in Poland, but I am ready to change my country
      of residence if necessary. I want to become a good developer, so I study
      hard and am interested in all the new things in the IT field. I like to
      communicate with people. I never stop at on my way and move on.
    </AboutMeStyle>
  );
};

export default AboutMe;
