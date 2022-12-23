const MeProject = props => {
  return (
    <div className="second">
      <h3 className="spravy">My projects</h3>
      <ol className="sps-nom">
        <li className="sps-spr">
          <a
            href="https://sofiiashevtsova.github.io/project4/"
            className="sps-spr2"
          >
            "Ice cream made with passion"
          </a>
          An ice cream shop website built with Parcel by a team of five
          developers. I personally worked on the header and the section-hero.
          Created animations and transitions during events.
          <span className="sps-spr3">[</span> HTML5, CSS3
          <span className="sps-spr3">]</span>
        </li>
        <li className="sps-spr">
          <span className="sps-spr1">
            <a
              href="sofiiashevtsova.github.io/goit-js-hw-11/"
              className="sps-spr2"
            >
              "Image search"
            </a>
            Image search site. Developed by me on the Parcel assembly. The
            functions of infinite scrolling are implemented, there is also
            smooth scrolling. Working with API requests.{' '}
            <span className="sps-spr3">[</span> HTML5, CSS3, JS, API
            <span className="sps-spr3">]</span>
          </span>
        </li>
        <li className="sps-spr">
          <span className="sps-spr1">
            <a
              href="sofiiashevtsova.github.io/my-project-js/"
              className="sps-spr2"
            >
              "My notes and list-buy"{' '}
            </a>
            A site for organizing your classes. Developed independently. Shows
            working with local storage. Adding elements to the DOM using JS.{' '}
            <span className="sps-spr3">[</span> HTML5, CSS3, JS
            <span className="sps-spr3">]</span>
          </span>
        </li>
      </ol>
    </div>
  );
};
export default MeProject;
