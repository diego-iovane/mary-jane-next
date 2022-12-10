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
`

const PrimaryButton = ({ children }) => {
    return (
        <Button>{children}</Button>
    )
}

export default PrimaryButton