import React from 'react'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'

const Events = () => {
  return (
    <EventsPage>
      <HeroSection
        backgroundHeight="40vh"
        backgroundImage="images/holli-cover-img.jpg"
        heroText="Events"
        subText="Latest Events from Holli Networks"
      />
      <section>
        <div className="content">
          <div className="container">
            <h2>Events</h2>
          </div>
        </div>
      </section>
    </EventsPage>
  )
}

const EventsPage = styled.div``

export default Events
