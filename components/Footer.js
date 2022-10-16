import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <FooterSection>
        <ul className="nav">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/about">
              <a>Gallery</a>
            </Link>
          </li> */}
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </FooterSection>
      <LowerFooter>
        <div className="ftr-cpy">
          Copyright &copy; {new Date().getFullYear()} Holli Network
        </div>
        <div className="ftr-scl">
          <div className="scl-icn">
            <a
              href="https://www.facebook.com/hollinetwork/"
              className="fab fa-facebook"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
          <div className="scl-icn">
            <a
              href="https://www.instagram.com/hollinetwork/"
              className="fab fa-instagram"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
          <div className="scl-icn">
            <a
              href="https://www.youtube.com/channel/UC71wpmTu88EwS9XZmHS3SpQ?app=desktop"
              className="fab fa-youtube"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
          {/* <div className='scl-icn'>
            <a href="https://www.instagram.com/hollijouvert/" className="fab fa-instagram" target="_blank" rel="noreferrer"></a>
          </div> */}
        </div>
      </LowerFooter>
    </>
  )
}

const FooterSection = styled.footer`
  display: none;
  color: #fff;
  background-color: #2c3e50;
  padding: 1rem;
  text-align: center;
  p {
    font-size: 0.8rem;
    margin: 0.5rem;
  }
`

const LowerFooter = styled.footer`
  color: #fff;
  background-color: #101010dd;
  padding: 2rem;
  text-align: center;
  .ftr-cpy {
    font-size: 0.8rem;
    // margin: 0.5rem;
    line-height: 1.6;
    margin-left: -2rem;
    margin-bottom: 0.2rem;
  }

  .ftr-scl {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 0.8rem 0 -0.2rem -2rem;

    .scl-icn {
      a {
        color: #ffffff;
        font-size: 2rem;
        font-weight: 700;
        text-decoration: none;
      }
    }
  }

  @media (min-width: 720px) {
    .ftr-cpy {
      margin-left: 0;
    }
  }
`

export default Footer
