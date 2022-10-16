/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import { PostCard } from '../components'
import Button from '../components/Button'

// import { getPosts } from '../lib/data'
import myEvents from '../public/events/events.json' assert {type: 'json'}

export async function getStaticProps() {
  // const data = (await getPosts()) || []
  const data = myEvents

  return {
    props: { data },
  }
}

const Events = ({ data }) => {
  return (
    <EventsPage>
      <HeroSection
        backgroundHeight="60vh"
        backgroundImage="images/holli-cover-img.jpg"
        // heroText="Events"
        subText="Holli Networks Events"
        buttonText="Buy Tickets"
        buttonLink="https://www.eventbrite.com/o/holli-network-18472370741"
      />

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
              <Link href="/about" passHref>
                <a>
                  <Button>About Us</Button>
                </a>
              </Link>
            </div>
        </section>

      {/* <section>
        <div className="content">
          <div className="events-container">
            <h2>Upcoming Events</h2>
            <div className="post">
              {data.posts.map((post) => (
                <div key={post.title}>
                  <img src={post.featuredImage.url} alt="Born to party" />
                  <div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="author-info">
                      <img
                        src={post.author.photo.url}
                        className="author-avatar"
                        alt={post.author.name}
                      />
                      <p>{post.author.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn">
              <Link href="/contact" passHref>
                <a>
                  <Button>Contact us today!</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

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

    </EventsPage>
  )
}

const EventsPage = styled.div`
  /* Author */
  .author-avatar {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    border: 4px solid #000;
    border-radius: 50px;
  }

  .author-info {
    display: flex;
    align-items: center;
  }
`

export default Events
