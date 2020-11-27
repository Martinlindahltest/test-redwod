import { Link, routes } from '@redwoodjs/router'
import BlogPostsCell from 'src/components/BlogPostsCell'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const HomePage = () => {
  return (
    <BlogLayout>
      <h1>HomePage</h1>
      <p>Martins para</p>
      <BlogPostsCell />
      </BlogLayout>
  )
}

export default HomePage
