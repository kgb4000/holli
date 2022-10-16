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
        // heroText="About Holli"
        subText="What is Holli Network?"
      />
      <section className="abt-container">
          <div className='abt-hdr'>Holli Network</div>
          <div className='abt-info'>
          <div className='abt-txt'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita ullam error nam, debitis sequi earum excepturi sapiente
            sint, eos doloremque inventore iste! Quasi modi ipsa dolores optio
            nemo corporis.
          </div>
          <div className='abt-txt'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita ullam error nam, debitis sequi earum excepturi sapiente
            sint, eos doloremque inventore iste! Quasi modi ipsa dolores optio
            nemo corporis.
          </div>
          <div className='abt-txt'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita ullam error nam, debitis sequi earum excepturi sapiente
            sint, eos doloremque inventore iste! Quasi modi ipsa dolores optio
            nemo corporis.
          </div>
          </div>
      </section>

      <section>
        <div className="abt-container">
          <div className='abt-hdr'>Executive Team</div>
          <div className="abt-team">
            {/* <img src=""/> */}
            {/* <div className="team-member-info"> */}
              <div className='abt-ttl'>Lebron James</div>
              <div className='abt-txt'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </div>
              <div className='abt-txt'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </div>
            {/* </div> */}
          </div>
          <div className="abt-team">
            {/* <img src=""/> */}
            {/* <div className="team-member-info"> */}
              <div className='abt-ttl'>Larry Bird</div>
              <div className='abt-txt'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </div>
              <div className='abt-txt'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </div>
            {/* </div> */}
          </div>
          <div className="abt-team">
            {/* <img src=""/> */}
            {/* <div className="team-member-info"> */}
              <div className='abt-ttl'>Jason Tatum</div>
              <div className='abt-txt'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </div>
              <div className='abt-txt'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                quasi minima! Accusantium, nesciunt nisi adipisci velit labore
                eligendi quam rem ut possimus, officia, totam harum minima.
                Optio voluptatibus distinctio deserunt?
              </div>
            {/* </div> */}
          </div>
          <div className="btn">
            <Button as="a" href="/contact">
              Contact us
            </Button>
          </div>
        </div>
      </section>

      <section className="radio-fab">
          <div className="radio-ctl">
            <audio src="https://s4.radio.co/s9cf107df1/listen" id="radio"></audio>
            <div className="radio-key">
              <button id='play-stop' onClick={() => {
                let playSrc = `${window.location.protocol}//${window.location.host}/images/play_circle_FILL0_wght400_GRAD0_opsz48.svg`;
                let stopSrc = `${window.location.protocol}//${window.location.host}/images/pause_circle_FILL0_wght400_GRAD0_opsz48.svg`;

                  if (document.getElementById('radio-play').src === playSrc) {
                  // // play radio & change button to pause icon
                  // console.log('about to play');
                  // console.log(document.getElementById('radio-play').src);
                  document.getElementById('radio').play();
                  document.getElementById('radio-play').src = stopSrc;
                } else {
                  // // pause radio & change button to play icon
                  // console.log('about to stop');
                  // console.log(document.getElementById('radio-play').src);
                  document.getElementById('radio').pause();
                  document.getElementById('radio-play').src = playSrc;
                }
              }
              }>
              <img id='radio-play' src='images/play_circle_FILL0_wght400_GRAD0_opsz48.svg' alt='Play' />
              </button>
              <div className="radio-stn">Holli Radio</div>
            </div>
          </div>
        </section>

    </AboutPage>
  )
}

const AboutPage = styled.div`
.abt-container {
  .abt-hdr {
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: 700;
  }
  abt-info, .abt-team {
    margin: 1rem 0 2rem;

    .abt-ttl {
      font-size: 1.4rem;
      font-weight: 700;
      font-style: italic;
      color: #e74c3c;
      text-transform: uppercase;
      margin-bottom: .5rem;
    }

    .abt-txt {
      font-size: 1.2rem;
      // font-weight: 700;
      margin: 0 0 1rem;
      line-height: 1.4;
    }
  }

  // .abt-info {
  //   margin-bottom: 0;
  // }
}
`

export default About
