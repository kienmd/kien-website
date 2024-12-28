import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import projectsData from '../data/projects.json'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    setProjects(projectsData.projects)
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