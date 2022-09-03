import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterSection>
      <p>Holli Network &copy;{new Date().getFullYear()}</p>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  color: #fff;
  background-color: #2c3e50;
  padding: 2rem;
  text-align: center;
  p {
    font-size: 0.8rem;
    margin: 0.5rem;
  }
`

export default Footer
