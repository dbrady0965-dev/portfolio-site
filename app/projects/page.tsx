import { getAllProjects } from "@/lib/content"
import Link from "next/link"

type Project = {
  slug: string
  title: string
  excerpt: string
  content: string
}

export default async function Projects() {
  const projects: Project[] = getAllProjects() || []

  return (
    <div>
      <h1 className="text-3xl mb-6">Projects</h1>

      {projects.map((p) => (
        <div key={p.slug} className="mb-6">
          <Link href={`/projects/${p.slug}`}>
            <h2 className="text-xl hover:underline cursor-pointer">
              {p.title}
            </h2>
          </Link>
          <p className="text-gray-400">{p.excerpt}</p>
        </div>
      ))}
    </div>
  )
}