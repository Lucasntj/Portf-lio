const ProjectCard = ({ project }) => {
  const { title, summary, status, role, stack = [], links = [] } = project;

  return (
    <div className="project-card">
      <p className="project-status">{status}</p>
      <h3>{title}</h3>
      <p>{summary}</p>

      <p className="project-role">Papel: {role}</p>

      <div className="project-stack">
        {stack.slice(0, 4).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="project-links">
        {links.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
