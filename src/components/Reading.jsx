import readingData from '../data/reading.json'

export default function Reading() {
  return (
    <div className="mt-32 space-y-8">
      {readingData.reading.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group space-y-2"
        >
          <h3 className="text-2xl font-serif group-hover:text-blue-600 transition-colors">
            {item.title}
          </h3>
        </a>
      ))}
    </div>
  )
} 