import { getProject } from "@/lib/content"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) return <div>Not found</div>

  return (
    <div>
      <h1 className="text-3xl mb-4">{project.title}</h1>
      <p className="text-gray-400 mb-6">{project.excerpt}</p>

      <div className="space-y-4">
        {project.content.split("\n").map((line, i) => {
          if (line.startsWith("![")) {
            const src = line.match(/\((.*?)\)/)?.[1]
            return <img key={i} src={src} className="w-full" />
          }

          return <p key={i}>{line}</p>
        })}
      </div>
    </div>
  )
}