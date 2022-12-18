import AboutMe from "./AboutMe";
import MeProject from "./MeProjects";
import Experience from "./Experience";
import Education from "./Education";

const Main = props => {
    return (
    <div>
            <h2 className="pos">Менеджер ІТ-проектів</h2>
            <h1 className="name">Sofiia Shevtsova</h1>
            <AboutMe />
            <MeProject />
            <Education/>
<Experience/>
        </div>
)
}

export default Main