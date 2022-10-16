import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
  // text-align: center;
  margin: 0 auto 0 4rem;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  // text-align: center;
  text-align: left;
  margin: 0;

  @media screen and (max-width: 480px) {
    // grid-template-rows: repeat(6, 60px);
    grid-template-rows: repeat(6,100px);
  }
`
export const SidebarItem = styled.li`
  height: 80px;
  line-height: 80px;
  // color: #000;
  list-style: none;
`

export const SidebarLink = styled(Link)``

export const SidebarLinkA = styled.a`
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 2rem;
  font-weight: 300;

  &:hover {
    color: #a29bfe;
    transition: 0.2s ease-in-out;
  }
`

export const SidebarBtnWrap = styled.div`
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 10px);
  }
`
export const SidebarBtnLink = styled.div``

export const SidebarBtnLinkA = styled.a`
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid #a29bfe;
  background-color: #a29bfe;
  white-space: nowrap;
  padding: 1rem 1.8rem;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
    border-radius: 5px;
  }
`
