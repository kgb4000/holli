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
          <li>
            <Link href="/about">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </FooterSection>
      <LowerFooter>
        <p>
          Holli Network &copy;{new Date().getFullYear()} All Rights Reserved.
        </p>
      </LowerFooter>
    </>
  )
}

const FooterSection = styled.footer`
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
  background-color: #101010;
  padding: 2rem;
  text-align: center;
  p {
    font-size: 0.8rem;
    margin: 0.5rem;
  }
`

export default Footer
