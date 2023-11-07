import Button from "../../ReusableComponents/ButtonComponent";
import { images } from "../../ReusableComponents/ProjectImages";
import { TitleComponents } from "../../ReusableComponents/TitleComponents";

import "./projects.scss";

function Projects() {
  return (
    <div id="projects-page" className="projects-section">
      <TitleComponents titleText={"Projects"} />

      <div className="projects">
        <div className="projects-inline">
          {images.map((list) => {
            return (
              <div className="project-div" key={list.id}>
                <div className="img-div">
                  <img
                    src={list.imgLink}
                    alt={list.altText}
                    className="project-img"
                  />
                </div>
                <div className="project-text-div">
                  <h3 className="project-title">{list.title}</h3>
                  <p className="project-description">{list.description}</p>
                </div>
                <div className="project-btn-div">
                  <a href={list.liveSite} className="">
                    <Button
                      btnText="Live Preview"
                      style={{
                        backgroundColor: "#e20a4a",
                        color: "#fff0f5",
                        border: "2px solid #301934",
                      }}
                    />
                  </a>
                  <a href={list.githubLink} className="">
                    <Button
                      btnText="Check on Github"
                      style={{
                        backgroundColor: "#301934",
                        color: "#fff0f5",
                        border: "2px solid #e20a4a",
                      }}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
