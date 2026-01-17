import { Link, useParams } from "react-router-dom";
import { ProjectData } from "../data/ProjectData.js";
import "./projectInfo.css";
import NavBar from "./Navbar.jsx";

function ProjectInfo() {
  const { projectId } = useParams();
  const project = ProjectData.find((p) => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <NavBar />
      <div className="project-container">
        <aside className="sidebar">
          <Link to="/" className="back-link">
            ← Home
          </Link>
          <nav>
            {project.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="content-area">
          <img
            className="content-image"
            src={project.image}
            alt="A image of the home page of my project"
          />
          <h1>{project.subTitle}</h1>

          {project.sections.map((section) => (
            <div className="section-body">
              {Array.isArray(section.content) ? (
                <ul className="overview-list">
                  {section.content.map((item, i) => {
                    const [label, value] = Object.entries(item)[0];
                    return (
                      <li key={i}>
                        <strong>{label}:</strong> {value}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default ProjectInfo;
