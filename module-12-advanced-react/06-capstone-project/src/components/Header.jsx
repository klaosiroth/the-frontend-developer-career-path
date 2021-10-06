import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import logo from '../logo.svg'

function Header() {
  return (
    <Head>
      <StyledLink to="/" style={{display: 'inline-block'}}><Image src={logo} alt="logo" /></StyledLink>
      <nav>
        <ul>
          <li><StyledLink to="/cart">cart</StyledLink></li>
        </ul>
      </nav>
    </Head>
  )
}

const Head = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 0 5%;
  box-shadow: 0px 2px 10px -5px rgba(21,6,5,1);
`

const spin = keyframes `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Image = styled.img `
  height: 8vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`

const StyledLink = styled(Link) `
  text-decoration: none;
`

export default Header
