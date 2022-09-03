import Link from 'next/link'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <div className="logo">
        <Link href="/" passHref>
          <a>Holli Network</a>
        </Link>
      </div>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <nav>
        <ul className="nav">
          <li>
            <Link href="/events" passHref>
              <a>Events</a>
            </Link>
          </li>
          <li>Merch</li>
          <li>
            <Link href="/radio" passHref>
              <a>Radio</a>
            </Link>
          </li>
          <li>Gallery</li>
          <li>
            <Link href="/about" passHref>
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <a>Contact us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Nav>
  )
}

export default Navbar

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    transform: translate(-100%. 60%);
    cursor: pointer;
    align-item: center;
    color: #fff;
    font-size: 2rem;
    height: 80px;
    line-height: 80px;
    align-items: center;
  }
`

const Nav = styled.header`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  max-width: 90%;
  margin: 0 auto;
  height: 80px;
  line-height: 80px;

  .logo {
    font-weight: bold;
    font-size: 2rem;

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  nav {
    display: none;

    @media screen and (min-width: 1023px) {
      display: flex;
  }

  .nav {
    display: none;
    font-size: 1.4rem;

    @media screen and (min-width: 1023px) {
      display: flex;
      li {
        list-style-type: none;
        margin: 0 1rem;
        line-height: 80px;

        a {
          color: #fff;
          text-decoration: none;

          :hover {
            border-bottom: 4px solid #fff;
            padding-bottom: 1rem;
          }
        }
      }
    }
  }
`
