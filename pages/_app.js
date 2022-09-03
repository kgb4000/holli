import { useState } from 'react'
import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
