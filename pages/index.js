import { useState } from 'react'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { PostCard, PostWidget, Categories } from '../components'

// import { getPosts } from '../lib/data'
import myEvents from '../public/events/events.json' assert {type: 'json'}

export async function getStaticProps() {
  // const data = (await getPosts()) || []
  const data = myEvents

  return {
    props: { data },
  }
}

export default function Home({ data }) {
  console.log(data.posts)
  return (
    <div className=''>
      <HeroSection
        backgroundHeight="100vh"
        backgroundImage="images/holli-cover-img2x.jpg"
        // heroText="Holli Network"
        subText="THE BIGGEST AND THE BADDEST CARNIVAL NETWORK IN THE DIASPORA!"
        buttonText="Buy Tickets"
        buttonLink="https://www.eventbrite.com/o/holli-network-18472370741"
        // signupText="Mailing List"
        // signupLink="https://www.eventbrite.com/o/holli-network-18472370741"
      />
      {/* <section className="hero-cvr">
        <div className="hero-txt">THE BIGGEST AND THE BADDEST CARNIVAL NETWORK IN THE DIASPORA!</div>
      </section> */}

      <div className="content">
        <section className="post-container">
            <div className='post-ttl'>Upcoming Events</div>
            <div className="post-section">
              {data.posts.map((post) => (
                <div key={post.title}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
            <div className="btn">
              <Link href="/events" passHref>
                <a>
                  <Button>More Events</Button>
                </a>
              </Link>
            </div>
        </section>

        <section className="signup-form">
          <div className="signup-container">
            <div className='signup-txt'>Get the latest Holli Network news straight to your inbox!</div>
            <form className="signup">
              <input type="email" placeholder="you@emailaddress.com" />
              <input type="button" value="Get it!" />
            </form>
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

        {/* <section>
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
                <Button>Contact Us</Button>
              </a>
            </Link>
          </div>
        </section> */}

      </div>
    </div>
  )
}
