import { useRouter } from 'next/router'
import MainContainer from '../../components/MainContainer'

const idUsers = ({ user }) => {
  const { query } = useRouter()
  return (
    <MainContainer keywords={user.name}>
      <div>
        <h1>User id {query.id}</h1>
        <p>User name {user.name}</p>
      </div>
    </MainContainer>
  )
}

export default idUsers

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  )
  const user = await res.json()

  return {
    props: { user },
  }
}
