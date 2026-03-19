import { getPost } from "@/lib/content"

type Post = {
  slug: string
  title: string
  content: string
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post: Post | undefined = getPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

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