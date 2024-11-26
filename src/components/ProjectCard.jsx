import { Card, ImgCard, DescCard } from '../styles/Project.style'

const ProjectCard = ({ project }) => {
  return (
    <>
      <Card>
        <div className="details">
          <h3 className="project-name">{project.name}</h3>
          <ImgCard>
            <img src={project.img} width="300" height="300" />
            <p className="tech-stacks">
              <strong>Technologies</strong> - {project.techstacks}
            </p>
            <p className="visit-project">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                Visit Project
              </a>
            </p>
          </ImgCard>
        </div>
        {/* <div className="description"> */}
        <DescCard>
          <ul>
            {project.description.map((elem, i) => (
              <li key={i}>{elem}</li>
            ))}
          </ul>
        </DescCard>
        {/* </div> */}
      </Card>
    </>
  )
}

export default ProjectCard
