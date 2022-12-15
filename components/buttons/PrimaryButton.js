import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #ffffff;
    font-size: .8rem;
    width: 8rem;
    padding: .7rem 0;
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