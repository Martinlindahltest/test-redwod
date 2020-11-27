import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query postsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  console.log("🚀 ~ file: BlogPostsCell.js ~ line 19 ~ Success ~ posts", posts, posts[0].id, typeof posts[0].id)
//  return JSON.stringify(posts)
return posts.map(p => <Link to={routes.blogPost({id: p.id})}><p>{p.title}</p></Link>)
}