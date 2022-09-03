import React from 'react'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

const Contact = () => {
  return (
    <ContactPage>
      <HeroSection
        backgroundHeight="60vh"
        backgroundImage="images/holli-cover-img.jpg"
        heroText="Contact us"
        subText="Contact us today!"
      />
      <section>
        <div className="container">
          <h2>Contact Holli Network</h2>
          <p>Phone:</p>
          <p>Email:</p>
          <h2>Send a message</h2>
          <form>
            <label>Name</label>
            <input
              id="name"
              type="text"
              // onChange={handleOnChange}
              // value={inputs.name}
            />
            <label>Email</label>
            <input
              id="name"
              type="text"
              // onChange={handleOnChange}
              // value={inputs.name}
            />
            <label>Message</label>
            <textarea></textarea>
            <Button>Send Message</Button>
          </form>
        </div>
      </section>
    </ContactPage>
  )
}

const ContactPage = styled.div`
  label {
    margin-bottom: 1rem;
  }
  input,
  textarea {
    width: 100%;
    height: 70px;
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ddd;
    font: inherit;
    border-radius: 5px;
  }

  textarea {
    height: 200px;
  }
`

export default Contact
