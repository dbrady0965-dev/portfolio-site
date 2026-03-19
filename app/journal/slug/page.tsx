import { getPost } from "@/lib/content"

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)

  if (!post) return <div>Not found</div>

  return (
    <div>
      <h1 className="text-3xl mb-4">{post.title}</h1>

      <div className="space-y-4">
        {post.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  )
}