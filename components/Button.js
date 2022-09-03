import styled from 'styled-components'

const Button = styled('button')`
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  margin: 2rem 0;
  padding: 1.2rem 1.4rem;
  text-align: center;
  border: 2px solid ${(props) => (props.primary ? 'white' : '#a29bfe')};
  background-color: ${(props) => (props.primary ? 'white' : '#a29bfe')};
  color: ${(props) => (props.primary ? 'white' : 'white')};
  box-shadow: 0 2px 4px rgb(35 54 66 / 20%);
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 10px;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 1.4rem 1.6rem;
  }
`

export default Button
