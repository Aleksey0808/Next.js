import { useState, useEffect } from 'react'
import { Back, Links } from '../styled/users.styled'
import MainContainer from '../components/MainContainer'

const Users = ({ users }) => {
  // const [users, setUsers] = useState([
  //   { id: 1, name: 'petya' },
  //   { id: 2, name: 'vasya' },
  // ])

  // useEffect(async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await res.json()
  //   setUsers(data)
  // }, [])
  return (
    <MainContainer keywords={'Users page'}>
      {/* <Back>
        <Links href="/">Back</Links>
      </Back> */}
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
    </MainContainer>
  )
}

export default Users

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return {
    props: { users },
  }
}
