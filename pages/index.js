import NavBar from '../components/NavBar'
import { Container } from '../styled/index.syled'

const index = () => {
  return (
    <div>
      <Container>
        <NavBar href={'/'} text={'Main page'} />
        <NavBar href={'/users'} text={'Users page'} />
      </Container>
      {/* <Ul>
        <Li>
          <Links href="/">Main page</Links>
        </Li>
        <Li>
          <Links href="/users">Users page</Links>
        </Li>
      </Ul> */}
      <h1>Main page</h1>
    </div>
  )
}

export default index
