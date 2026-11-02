// A presentational component: receives a project via props and renders it.
export default function ProjectCard({ project }) {
  const { title, description, tags, repoUrl, liveUrl } = project

  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tags" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <div className="card-links">
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
        )}
      </div>
    </article>
  )
}
