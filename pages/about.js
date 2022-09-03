import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const About = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <AboutPage>
      <HeroSection
        backgroundHeight="60vh"
        backgroundImage="images/holli-cover-img.jpg"
        heroText="About Holli"
        subText="Contact us"
      />
      <section>
        <div className="container">
          <h2>Holli Network</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita ullam error nam, debitis sequi earum excepturi sapiente
            sint, eos doloremque inventore iste! Quasi modi ipsa dolores optio
            nemo corporis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita ullam error nam, debitis sequi earum excepturi sapiente
            sint, eos doloremque inventore iste! Quasi modi ipsa dolores optio
            nemo corporis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita ullam error nam, debitis sequi earum excepturi sapiente
            sint, eos doloremque inventore iste! Quasi modi ipsa dolores optio
            nemo corporis.
          </p>
          <div className="btn">
            <Button as="a" href="/contact">
              Contact us
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Executive Team</h2>
          <div className="team-member">
            {/* <img src=""/> */}
            <div className="team-member-info">
              <h3>Lebron James</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </p>
            </div>
          </div>
          <div className="team-member">
            {/* <img src=""/> */}
            <div className="team-member-info">
              <h3>Larry Bird</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </p>
            </div>
          </div>
          <div className="team-member">
            {/* <img src=""/> */}
            <div className="team-member-info">
              <h3>Jason Tatum</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </p>
            </div>
          </div>
          <div className="btn">
            <Button as="a" href="/contact">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </AboutPage>
  )
}

const AboutPage = styled.div`
  .team-member-info {
    h3 {
      margin: 1rem 0;
    }
  }
`

export default About
