import { useState } from 'react'

export default function ProjectCard({ title, description, image, link }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block aspect-square rounded-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay */}
      <div 
        className={`
          absolute inset-0 bg-black/60 flex flex-col justify-end p-6
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <h3 className="text-white font-serif text-xl mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </a>
  )
}