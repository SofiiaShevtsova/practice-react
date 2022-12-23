import StyledList from "./Styled"

const{SiteBarTitleStyle, SiteBarListStyle} = StyledList

const Skills = props => {
const listTech =  ["HTML5/CSS3/SASS","Responsive/Adaptive design GIT","JavaScript","React","Redux","REST API","Handlebars","Webpack","Parcel"]
const listSoft = ["Teamwork", "Creativity", "Good communication", "Responsible", "Stress resistant"]
const listLang = ["Ukrainian - Native language", "English - Limited working proficiency", "Poland - Limited working proficiency", "Russian - Full professional proficiency"]
   
  return (
         <>
            <div><SiteBarTitleStyle>Tech skills</SiteBarTitleStyle>
        <SiteBarListStyle>
          {listTech.map((elem) => (<li>{elem}</li>))}
        </SiteBarListStyle></div>
        <div><SiteBarTitleStyle>Soft skills</SiteBarTitleStyle>
                <SiteBarListStyle>
          {listSoft.map((elem) => (<li>{elem}</li>))}
          </SiteBarListStyle></div>
                <div><SiteBarTitleStyle>Language</SiteBarTitleStyle>
                <SiteBarListStyle>
          {listLang.map((elem) => (<li>{elem}</li>))}
        </SiteBarListStyle></div>


          </>
    )
}
export default Skills

