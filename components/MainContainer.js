import NavBar from '../components/NavBar'
import { Container } from '../styled/index.syled'
import Head from 'next/head'

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'next.js' + keywords}></meta>
        <title>Main page</title>
      </Head>
      <Container>
        <NavBar href={'/'} text={'Main page'} />
        <NavBar href={'/users'} text={'Users page'} />
      </Container>
      <div>{children}</div>
    </>
  )
}

export default MainContainer
