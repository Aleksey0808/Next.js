import { useRouter } from 'next/router'

const idUsers = () => {
  const { query } = useRouter()
  return (
    <div>
      <h1>User {query.id}</h1>
    </div>
  )
}

export default idUsers
