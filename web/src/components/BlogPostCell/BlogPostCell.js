export const QUERY = gql`
  query($id: Int!) {
    post(id: $id) {
      id
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => {
  console.log("🚀 ~ file: postCell.js ~ line 18 ~ Success ~ post", post)
  return JSON.stringify(post)
}
