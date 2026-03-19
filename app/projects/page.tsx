import { getAllProjects } from "@/lib/content"

export default function Projects() {
  const projects = getAllProjects()

  return (
    <div>
      <h1 className="text-3xl mb-6">Projects</h1>

      {projects.map((p) => (
        <div key={p.slug} className="mb-6">
          <a href={`/projects/${p.slug}`}>
            <h2 className="text-xl">{p.title}</h2>
          </a>
          <p className="text-gray-400">{p.excerpt}</p>
        </div>
      ))}
    </div>
  )
}