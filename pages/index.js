import { useState } from 'react'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <HeroSection
        backgroundHeight="100vh"
        backgroundImage="images/holli-cover-img.jpg"
        heroText="Holli Network"
        subText="THE BIGGEST AND THE BADDEST CARNIVAL NETWORK IN THE DIASPORA!"
        buttonText="Buy Tickets Now!"
        buttonLink="https://www.eventbrite.com/o/holli-network-18472370741"
      />
      <div className="content">
        <section>
          <div className="container">
            <h2>What is the Holli Netowrk?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quia officiis, quisquam atque dolorem ea iusto nulla quaerat
              voluptates totam! Praesentium aspernatur reiciendis autem. Dolor
              incidunt esse omnis beatae ullam?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quia officiis, quisquam atque dolorem ea iusto nulla quaerat
              voluptates totam! Praesentium aspernatur reiciendis autem. Dolor
              incidunt esse omnis beatae ullam?
            </p>
          </div>
          <div className="btn">
            <Link href="/contact" passHref>
              <a>
                <Button>Contact us today!</Button>
              </a>
            </Link>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Latest Holli Network Events</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quia officiis, quisquam atque dolorem ea iusto nulla quaerat
              voluptates totam! Praesentium aspernatur reiciendis autem. Dolor
              incidunt esse omnis beatae ullam?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quia officiis, quisquam atque dolorem ea iusto nulla quaerat
              voluptates totam! Praesentium aspernatur reiciendis autem. Dolor
              incidunt esse omnis beatae ullam?
            </p>
          </div>
          <div className="btn">
            <Link href="/contact" passHref>
              <a>
                <Button>More Events!</Button>
              </a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
