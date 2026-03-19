import { getProject } from "@/lib/content"

type Project = {
  slug: string
  title: string
  excerpt: string
  content: string
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project: Project | undefined = getProject(params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <h1 className="text-3xl mb-4">{project.title}</h1>
      <p className="text-gray-400 mb-6">{project.excerpt}</p>

      <div className="space-y-4">
        {project.content.split("\n").map((line, i) => {
          if (line.startsWith("![")) {
            const src = line.match(/\((.*?)\)/)?.[1]
            if (!src) return null

            return (
              <img
                key={i}
                src={src}
                alt=""
                className="w-full rounded"
              />
            )
          }

          return <p key={i}>{line}</p>
        })}
      </div>
    </div>
  )
}