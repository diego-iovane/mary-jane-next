import styled from 'styled-components'

const Button = styled.button`
    background-color: var(--green);
    font-size: .8rem;
    padding: .7rem 2rem;
    color: #ffffff;
    border-radius: 50px;
    cursor: pointer;

    transition: opacity .5s ease-in-out;

    &:hover {
        opacity: .8;
    }
`

const SmallCta = ({ children }) => {
  return (
    <Button>{children}</Button>
  )
}

export default SmallCta