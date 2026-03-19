import { getAllPosts } from "@/lib/content"
import Link from "next/link"

type Post = {
  slug: string
  title: string
  content: string
}

export default async function Journal() {
  const posts: Post[] = getAllPosts() || []

  return (
    <div>
      <h1 className="text-3xl mb-6">Journal</h1>

      {posts.map((p) => (
        <div key={p.slug} className="mb-6">
          <Link href={`/journal/${p.slug}`}>
            <h2 className="text-xl hover:underline cursor-pointer">
              {p.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  )
}