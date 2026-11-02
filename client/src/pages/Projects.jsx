import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import useFetch from '../hooks/useFetch'

export default function Projects() {
  const { data: projects, loading, error } = useFetch('/api/projects')
  const [activeTag, setActiveTag] = useState('All')

  // Derived state: compute the tag list from the data instead of storing it separately
  const tags = useMemo(() => {
    if (!projects) return ['All']
    const all = projects.flatMap((p) => p.tags)
    return ['All', ...new Set(all)]
  }, [projects])

  const visible = useMemo(() => {
    if (!projects) return []
    return activeTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag))
  }, [projects, activeTag])

  return (
    <section>
      <h1>Projects</h1>

      {loading && <p className="status">Loading projects…</p>}
      {error && (
        <p className="status error">
          Couldn't load projects: {error}. Is the Spring Boot server running on
          port 8080?
        </p>
      )}

      {projects && (
        <>
          <div className="filters">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`chip ${tag === activeTag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
