/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import { PostCard } from '../components'
import Button from '../components/Button'

import { getPosts } from '../lib/data'

export async function getStaticProps() {
  const data = (await getPosts()) || []

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
        heroText="Events"
        subText="Latest Events from Holli Networks"
      />
      <section>
        <div className="content">
          <div className="events-container">
            <h2>Latest Events</h2>
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
