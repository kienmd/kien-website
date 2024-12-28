import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/projects')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch projects')
        return res.json()
      })
      .then(data => {
        setProjects(data.projects)
      })
      .catch(err => {
        setError(err.message)
      })
  }, [])

  if (error) return <div className="mt-8 text-center text-red-500">Error: {error}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id}
          {...project}
        />
      ))}
    </div>
  )
} 