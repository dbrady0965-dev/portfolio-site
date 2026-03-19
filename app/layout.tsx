export const metadata = {
  title: "Photography Portfolio",
  description: "Portfolio and journal",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="p-4 border-b border-gray-800">
          <a href="/" className="mr-4">Home</a>
          <a href="/projects" className="mr-4">Projects</a>
          <a href="/journal">Journal</a>
        </nav>

        <main className="p-6 max-w-5xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
