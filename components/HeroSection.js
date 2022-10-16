import styled from 'styled-components'
import Button from './Button'

const HeroSection = ({
  backgroundImage,
  heroText,
  subText,
  buttonText,
  buttonLink,
  signupText,
  signupLink,
  backgroundHeight,
}) => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
      >
        <div className="content">
          <h1 className="heroText">{heroText}</h1>
          <p>{subText}</p>
          {buttonText && (
            <a href={buttonLink} target="_blank" rel="noreferrer">
              <WhiteButton>{buttonText}</WhiteButton>
            </a>
          )}
          {signupText && (
            <a href={signupLink} target="_blank" rel="noreferrer">
              <WhiteButton>{signupText}</WhiteButton>
            </a>
          )}
        </div>
      </Hero>
    </>
  )
}

const Hero = styled('span')`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.42),
      rgba(162, 155, 254, 0.35)
    ),
    url(${(props) => props.backgroundImage});
  background-position: center;
  height: ${(props) => props.backgroundHeight};
  background-size: cover;
  margin: 0 auto;
  // margin-top: -100px;
  margin-top: -10vh;
  margin-bottom: 2rem;
  max-width: 100vw;

  @media only screen and (min-device-width: 360px) {
    h1 {
      font-size: 2.5rem;
      font-weight: 900;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.6;
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;
      letter-spacing: 1px;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.4;
      letter-spacing: 1px;
    }
  }

  .content {
    max-width: 80%;
    text-align: center;
    font-weight: 700;
  }
`

const WhiteButton = styled(Button)`
  border: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 0.8rem;
  padding: 1.2rem 1.4rem;
  margin: 2rem 0;
  font-weight: 700;

  :hover {
    color: #000;
    background-color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }

  @media only screen and (max-device-width: 320px) and (orientation: landscape) {
    font-size: 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 1.6rem;
    font-size: 1rem;
  }
`

export default HeroSection
