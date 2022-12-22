import AboutMe from "./AboutMe";
import MeProject from "./MeProjects";
import Experience from "./Experience";
import Education from "./Education";

const Main = props => {
    return (
    <div>
                    <h2 className="pos">Front-end DEVELOPER</h2>
                    <p>HTML5, CSS, SASS, JS, REACT.JS</p>
            <h1 className="name">Sofiia Shevtsova</h1>
            <AboutMe />
            <MeProject />
            <Education/>
<Experience/>
        </div>
)
}

export default Main