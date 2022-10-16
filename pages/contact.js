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
      // heroText="Contact us"
      // subText="Contact us today!"
      />
      <section>
        <div className="cnct-container">
          <div className='cntc-grd'>
            <div className='cntc-ttl'>Contact Info</div>
            <div className='cntc-txt'>Phone:</div>
            <div className='cntc-txt'>Email:</div>
          </div>
          <div className='cntc-grd'>
            <div className='cntc-ttl'>Send a message</div>
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

    </ContactPage>
  )
}

const ContactPage = styled.div`
  .cnct-container {
    .cntc-grd {
      margin: 1rem 0 2rem;

      .cntc-ttl {
        font-size: 1.8rem;
        font-weight: 700;
        font-style: italic;
        color: #e74c3c;
        text-transform: uppercase;
        margin-bottom: .5rem;
      }
  
      .cntc-txt {
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0 0 1rem;
        line-height: 1.4;
      }
    }
  }

  label {
    // margin-bottom: 1rem;
    font-weight: 700;
  }
  input,
  textarea {
    width: 100%;
    height: 70px;
    margin: .5rem 0 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    font: inherit;
    border-radius: 10px;
  }

  textarea {
    height: 200px;
    margin-bottom: 0;
  }
`

export default Contact
