import { getAllProjects } from "@/lib/content"
import Link from "next/link"

type Project = {
  slug: string
  title: string
  excerpt: string
  content: string
}

export default function Home() {
  const projects: Project[] = getAllProjects()

  return (
    <div>
      <h1 className="text-3xl mb-6">Featured Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <div className="border border-gray-800 p-4">
              <h2 className="text-xl">{p.title}</h2>
              <p className="text-gray-400">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}