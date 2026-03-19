import fs from "fs"
import path from "path"
import matter from "gray-matter"
import "server-only"

const projectsDir = path.join(process.cwd(), "content/projects")
const journalDir = path.join(process.cwd(), "content/journal")

export function getAllProjects() {
  const folders = fs.readdirSync(projectsDir)

  return folders.map((folder) => {
    const filePath = path.join(projectsDir, folder, "index.mdx")
    const file = fs.readFileSync(filePath, "utf8")

    const { data, content } = matter(file)

    return {
      slug: folder,
      ...data,
      content,
    }
  })
}

export function getProject(slug: string) {
  return getAllProjects().find((p) => p.slug === slug)
}

export function getAllPosts() {
  const files = fs.readdirSync(journalDir)

  return files.map((fileName) => {
    const slug = fileName.replace(".mdx", "")
    const filePath = path.join(journalDir, fileName)
    const file = fs.readFileSync(filePath, "utf8")

    const { data, content } = matter(file)

    return {
      slug,
      ...data,
      content,
    }
  })
}

export function getPost(slug: string) {
  return getAllPosts().find((p) => p.slug === slug)
}