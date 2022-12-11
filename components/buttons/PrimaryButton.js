import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #ffffff;
    font-size: .8rem;
    margin: 0 0 0 2.5rem;
    padding: .7rem 2rem;
    color: var(--pink);
    border-radius: 50px;
    cursor: pointer;

    transition: opacity .5s ease-in-out;

    &:hover {
        opacity: .8;
    }
`

const PrimaryButton = ({ children }) => {
    return (
        <Button>{children}</Button>
    )
}

export default PrimaryButton