import { Links, Container } from '../styled/index.syled'

const NavBar = ({ href, text }) => {
  return (
    <>
      <Links href={href}>
        <p>{text}</p>
      </Links>
    </>
  )
}

export default NavBar
