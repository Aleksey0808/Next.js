import { useState } from 'react'
import { Back, Links } from '../styled/users.styled'

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'petya' },
    { id: 2, name: 'vasya' },
  ])
  return (
    <>
      <Back>
        <Links href="/">Back</Links>
      </Back>
      <div>
        <h1>List userse</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Links href={`/users/${user.id}`}>{user.name}</Links>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Users
