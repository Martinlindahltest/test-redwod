import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return <>
        <nav>
        <ul>
          <li> <Link to={routes.home()}>Home</Link></li>
          <li> <Link to={routes.about()}>About</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
  </>
}
export default BlogLayout
